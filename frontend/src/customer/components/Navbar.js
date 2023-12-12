// Navbar.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import settings from "../images/settings.gif"
import logout from "../images/logout.gif"
import profile from "../images/profile.gif"
import logo from "../images/ClassifAi.png"
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        // Initialize Bootstrap components on mount
        window.$('[data-toggle="tooltip"]').tooltip();
        window.$('[data-toggle="popover"]').popover();
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img
                        src={logo} // Replace with your logout icon URL
                        alt="ClassifAI"
                        className="logo"
                    />
                    {/* ClassifAI */}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">a</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="items navbar-nav ml-auto">
                        <li className="home slide-up-and-down-on-hover nav-item">
                            <a className="nav-link" href="Home">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="about slide-up-and-down-on-hover nav-item">
                            <a className="nav-link" href="#learn-more">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="contact slide-up-and-down-on-hover nav-item">
                            <a className="nav-link" href="#features">
                                <span>Features</span>
                            </a>
                        </li>
                        <li className="contact slide-up-and-down-on-hover nav-item">
                            <a className="nav-link" href="Pricing">
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li className="contact slide-up-and-down-on-hover nav-item">
                            <a className="nav-link" href="Login">
                                <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <a href="Login" className="login btn btn-primary btn-lg">
                                SignIn
                            </a>
                        </li>
                        <li>
                            <a href="Signup" className="signup btn btn-primary btn-lg">
                                SignUp
                            </a>
                        </li>
                        {/* <li className="profile nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="Login"
                                id="profileDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://placekitten.com/32/32" // Replace with your profile image URL
                                    alt="Profile"
                                    className="profile-image"
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="profileDropdown"
                            >
                                <a className="dropdown-item" href="#profile">
                                    <img
                                        src={profile} // Replace with your logout icon URL
                                        alt="Logout"
                                        className="dropdown-icon"
                                    />
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#settings">
                                    <img
                                        src={settings} // Replace with your logout icon URL
                                        alt="Logout"
                                        className="dropdown-icon"
                                    />
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#logout">
                                    <img
                                        src={logout} // Replace with your logout icon URL
                                        alt="Logout"
                                        className="dropdown-icon"
                                    />
                                    Logout
                                </a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
