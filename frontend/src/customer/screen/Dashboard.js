import React, { useState,useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSidebar from '../components/LeftSidebar';
import Overview from '../components/Overview';
import './Dashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import upload from '../images/upload.gif'
import axios from "axios"
import { color } from 'framer-motion';

const Dashboard = () => {
    const [fileName,setFileName]=useState("")
    const [resData,setResData]=useState({fileContent:"", dataInsights:[]})

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log('Accepted Files:', acceptedFiles[0]);
        const formData = new FormData()
        formData.append("csv",acceptedFiles[0])
        await axios.post("http://localhost:3001/fileUpload",formData).then((res)=>{setFileName(res.data.fileName);alert("File Uploaded")}).catch((err)=>{alert("error When uploading File")})
    }, []);

    const handleClick=async ()=>{
        console.log("Button Clicked")
        await axios.get(`http://localhost:3001/makePrediction/${fileName}`).then((res)=>{setResData(res.data)}).catch((err)=>{alert("error when get")})
    }
    
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
                                <input {...getInputProps()} type='file' id="file"/>
                                <img className="uploadlogo" src={upload} size={40} />
                                <p className="upload-text">Click or drag 'n' drop CSV or Excel files here</p>
                                
                            </div>
                           
                        </div>
                        <button onClick={handleClick}>Get Insights</button>
                        <div>
                            <p>
                                {resData.fileContent}
                            </p>
                        </div>
                        <div>
                            <Overview dataInsights={resData.dataInsights} />
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
