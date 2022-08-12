import React from 'react'
import '../css/pro.css'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">User Registration</a>
                <div className="nav">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                </div>
            </div>
        </nav>
    )
}

export default Header