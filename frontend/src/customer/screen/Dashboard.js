import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../components/LeftSidebar';
import Overview from '../components/Overview';
import './Dashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import upload from '../images/upload.gif'
import { color } from 'framer-motion';

const Dashboard = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Handle the dropped files
        console.log('Accepted Files:', acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    });

    return (
        <div className="page">
            <Navbar></Navbar>
            <Container fluid>
                <Row>
                    <Col ClassName="sidebar" sm={2}>
                        {/* Left Sidebar */}
                        <LeftSidebar />
                    </Col>
                    <Col sm={10} className="dashboard-content">
                        {/* Main Content Area */}

                        <div className={`file-upload-container ${isDragActive ? 'drag-active' : ''}`}>
                            <div {...getRootProps()} className="upload-box">
                                <input {...getInputProps()} />
                                <img className="uploadlogo" src={upload} size={40} />
                                <p className="upload-text">Click or drag 'n' drop CSV or Excel files here</p>
                            </div>
                        </div>
                        <div>
                            <Overview />
                        </div>
                        {/* Add other components here, e.g., Results, Subscription, ProfileSettings, etc. */}
                        <br></br>

                    </Col>
                </Row>

            </Container>

            <Footer></Footer>
        </div>

    );
};

export default Dashboard;
