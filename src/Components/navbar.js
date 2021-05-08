import React from 'react';
 import logo from '../assets/images/logo.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    return (
        // "navbar navbar-expand-lg navbar-light bg-primary"
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#000000"}}>
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img className="logo" src={logo} alt="logo..." style={{width: 50, height: 50, borderRadius: 50/2}}  />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;