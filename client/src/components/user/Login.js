import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
                <Fragment>
                    <MetaData title={'Login'} />
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg p-3 mb-5 bg-white rounded" onSubmit={submitHandler}>
                                <h1 className="mb-3">Authentication</h1>
                                <div className="form-group">
                                    <span className="labelspan" htmlFor="email_field">Cell Number or email/username</span>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                <span className="labelspan" htmlFor="password_field">Password</span>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='row'>
                                <div className="col-6"> 
                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                    LOGIN
                                </button>
                                </div>
                                <div className="col-6 marTop"> 
                                <Link to="/loginotp" className="float-right mt-3 labelspan">Login with otp?</Link> 
                                 </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </Fragment>         
        </Fragment>
    )
}

export default Login
