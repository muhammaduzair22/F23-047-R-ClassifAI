import React, { useState, useCallback } from "react";
import { Nav } from 'react-bootstrap';
import './LeftSidebar.css'
import logout from "../images/logout.gif"
import Dashboard from "../images/dashboard.gif"
import Result from "../images/result.gif"
import Subscription from "../images/subscribe.gif"

const LeftSidebar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const handleLogout = () => {
        // Clear token from local storage and update login status
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        // Redirect to the login page after logout
        // history.push('/Login');
    };

    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <Nav.Link href="/Dashboard">
                <img
                    src={Dashboard}
                    alt="Dashboard"
                    className="dropdown-icon"
                />
                Dashboard</Nav.Link>
            <Nav.Link className="data" href="/results">
                <img
                    src={Result}
                    alt="Result"
                    className="dropdown-icon"
                />
                Results</Nav.Link>
            <Nav.Link className="data2" href="/subscription">
                <img
                    src={Subscription}
                    alt="Subscription"
                    className="dropdown-icon"
                />

                Subscription</Nav.Link>
            <Nav.Link className="data" href="/Login" onClick={handleLogout}>
                <img
                    src={logout}
                    alt="Logout"
                    className="dropdown-icon"
                />
                Logout</Nav.Link>

        </Nav>
    );
};

export default LeftSidebar;
