// Navbar.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import settings from "../images/settings.gif"
import logout from "../images/logout.gif"
import profile from "../images/profile.gif"
import logo from "../images/ClassifAi.png"

const Navbar = () => {

    useEffect(() => {
        // Initialize Bootstrap components on mount
        window.$('[data-toggle="tooltip"]').tooltip();
        window.$('[data-toggle="popover"]').popover();
    }, []);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        // Check if user is logged in by looking for token in local storage
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        // Clear token from local storage and update login status
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // Redirect to the login page after logout
        // history.push('/Login');
    };

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
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/Profile"
                                        id="profileDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={profile}
                                            alt="Profile"
                                            className="profile-image"
                                        />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="profileDropdown"
                                    >
                                        <a className="dropdown-item" href="/Profile">
                                            <img
                                                src={profile}
                                                alt="Profile"
                                                className="dropdown-icon"
                                            />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="/Dashboard">
                                            <img
                                                src={settings}
                                                alt="Settings"
                                                className="dropdown-icon"
                                            />
                                            Dashboard
                                        </a>
                                        <a className="dropdown-item" onClick={handleLogout} href="Login">
                                            <img
                                                src={logout}
                                                alt="Logout"
                                                className="dropdown-icon"
                                            />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <a href="/Login" className="login btn btn-primary btn-lg">SignIn</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Signup" className="signup btn btn-primary btn-lg">SignUp</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;