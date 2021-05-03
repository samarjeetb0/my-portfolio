import React from 'react';
// import logo from "../assets/images/mylogo.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">SJB
                    {/* <img className="logo" src={logo} alt="logo..." /> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;