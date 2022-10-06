import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
const Header = () => {
    return (
        <Fragment>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                         <img src="/images/logosvg.svg" />
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mt-md-0">
                   <Link to="/" style={{ textDecoration: 'none' }} >
                        <span id="home" className="ml-3">Home</span>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <span id="home" className="ml-3">About</span>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <span id="home" className="ml-3">Feature Link</span>
                    </Link>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span>
                    <Link to="/">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    </Link>
                    </span>
                    <span>
                    <Link to="/contact">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </Link>
                    </span>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
