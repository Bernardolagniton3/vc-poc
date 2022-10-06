import React, { Fragment, useState} from 'react'
import MetaData from '../layout/MetaData'

const Register = () => {
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
                        <h1 className="mb-3">Register</h1>
                        <div className="form-group">
                            <label className="labelspan" htmlFor="email_field">number</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="labelspan" htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="labelspan" htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group'>
                            <div className='d-flex align-items-center'>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept="iamges/*"
                                        onChange={onChange}
                                    />                                 
                                </div>
                            </div>
                        </div>
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                            /* disabled={loading ? true : false} */
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
