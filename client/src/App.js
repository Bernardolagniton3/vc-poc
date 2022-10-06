import { Route, Routes } from 'react-router-dom' 
import Header from './components/layout/Header'
import Home from './components/Home'
import Login from './components/user/Login'
import Register from './components/user/Register' 
import LoginOtp from './components/user/LoginOtp' 
function App() {
  return (
    <>
     <Header/>
     <Routes> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/loginotp" element={<LoginOtp/>}/>
    </Routes>
    </>
  );
}

export default App;
