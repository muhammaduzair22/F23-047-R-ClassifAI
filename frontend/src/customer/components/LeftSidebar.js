import React from 'react';
import { Nav } from 'react-bootstrap';
import './LeftSidebar.css'
const LeftSidebar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link href="/subscription">Subscription</Nav.Link>
            {/* Add more links for other sections */}
        </Nav>
    );
};

export default LeftSidebar;
