const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault} = require("apollo-server-core");
const { typeDefs } = require("./schema/typedefs.js");
const { resolvers } = require("./schema/resolvers.js");
const express = require("express");
const http = require("http");
const { otp , verify} = require("./otpAuth")

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention : true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.start();

  app.use(express.json());

  app.post('/otp', (req, res) => {
    otp(req,res);
  })

  app.post('/verify', (req, res) => {
    verify(req,res);
  })

  server.applyMiddleware({ app, path: "/" });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);