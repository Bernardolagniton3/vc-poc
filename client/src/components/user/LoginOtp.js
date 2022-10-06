import React, { Fragment, useState} from 'react'
import MetaData from '../layout/MetaData'
import { Link } from 'react-router-dom'
const LoginOtp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password } = user;
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('password', password);  
    }
    const onChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <Fragment>
            <MetaData title={'Register User'} />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-3">Login with an OTP</h1>
                        <div className="form-group">
                            <label className="labelspan" htmlFor="email_field">Cell number or Email/Username</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row"> 
                        <div className="col-6"> 
                       <Link to="/register">
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                            /* disabled={loading ? true : false} */
                        >
                            REGISTER
                        </button>
                        </Link> 
                        </div>
                        <div className="col-6"> 
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                            /* disabled={loading ? true : false} */
                        >
                            Send OTP
                        </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginOtp
