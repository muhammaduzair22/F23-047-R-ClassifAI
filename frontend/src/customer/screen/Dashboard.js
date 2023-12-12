import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../components/LeftSidebar';
import Overview from '../components/Overview';
import './Dashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        {/* Left Sidebar */}
                        <LeftSidebar />
                    </Col>
                    <Col sm={9} className="dashboard-content">
                        {/* Main Content Area */}
                        <Overview />
                        {/* Add other components here, e.g., Results, Subscription, ProfileSettings, etc. */}
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;
