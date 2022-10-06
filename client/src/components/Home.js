import React, { Fragment  } from 'react'
import MetaData from './layout/MetaData'
const Home = () => {
    return (
        <Fragment>
                <Fragment>
                    <MetaData title={'Home Page'} />
                    <h1 id="products_heading">Landing Page</h1>
                    <section id="products" className="container mt-5">
                        <div className="row">
                                <Fragment>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <hr className="my-5" />
                                            <div className="mt-5">
                                                <h4 className="mb-3">
                                                Home
                                                </h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                         {/* map lists sample here */}
                                        </div>
                                    </div>
                                </Fragment>
                            </div>
                    </section>
                </Fragment>
        </Fragment>
    )
}
export default Home
