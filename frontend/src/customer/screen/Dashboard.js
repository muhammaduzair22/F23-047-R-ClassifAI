import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Container, Row, Col } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import Overview from "../components/Overview";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import upload from "../images/upload.gif";
import axios from "axios";
import MessageBox from "../components/MessageBox";

const Dashboard = () => {
  const [fileName, setFileName] = useState("");
  const [resData, setResData] = useState({ fileContent: "", dataInsights: [] });
  const [message, setMessage] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log("Accepted Files:", acceptedFiles[0]);
    const formData = new FormData();
    formData.append("csv", acceptedFiles[0]);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:3001/model/fileUpload",
          formData,
          {
            headers: { Authorization: token },
          }
        );
        setFileName(response.data.fileName);
        setMessage("File Uploaded");
        setShowMessageBox(true);
        setIsBlurred(true);
      } catch (error) {
        setMessage("Error uploading file");
        setShowMessageBox(true);
        setIsBlurred(true);
        console.error("Error uploading file:", error);
      }
    } else {
      setMessage("Token not found");
      setShowMessageBox(true);
      setIsBlurred(true);
    }
  }, []);

  const handleClick = async () => {
    console.log("Button Clicked");
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get(
          `http://localhost:3001/model/makePrediction/${fileName}`,
          {
            headers: { Authorization: token },
          }
        );
        setResData(response.data);
      } catch (error) {
        console.error("Error making prediction:", error);
        setMessage("Error making prediction");
        setShowMessageBox(true);
        setIsBlurred(true);
      }
    } else {
      setMessage("Token not found");
      setShowMessageBox(true);
      setIsBlurred(true);
    }
  };

  const downloadCSV = () => {
    const blob = new Blob([resData.fileContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ClassifAI_output.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
  });

  return (
    <div className={`page ${isBlurred ? "blurred" : ""}`}>
      <Navbar />
      <Container fluid>
        <Row>
          <Col ClassName="sidebar" sm={2}>
            {/* Left Sidebar */}
            <LeftSidebar />
          </Col>
          <Col sm={10} className="dashboard-content">
            {/* Main Content Area */}

            <div
              className={`file-upload-container ${isDragActive ? "drag-active" : ""
                }`}
            >
              <div {...getRootProps()} className="upload-box">
                <input {...getInputProps()} type="file" id="file" />
                <img className="uploadlogo" src={upload} size={40} />
                <p className="upload-text">
                  Click or drag 'n' drop CSV or Excel files here
                </p>
              </div>
            </div>
            <button className="insights" onClick={handleClick}>Get Insights</button>
            <button className="download" onClick={downloadCSV}>Download CSV</button>
            <div>
              <p>{resData.fileContent}</p>
            </div>
            <div>
              <Overview dataInsights={resData.dataInsights} />
            </div>
            {/* Add other components here, e.g., Results, Subscription, ProfileSettings, etc. */}
            <br />
          </Col>
        </Row>
      </Container>

      <Footer />
      {showMessageBox && (
        <>
          <div className="message-box">
            <MessageBox
              message={message}
              onClose={() => {
                setShowMessageBox(false);
                setIsBlurred(false);
              }}
            />
          </div>
          <div className={`overlay ${isBlurred ? "blurred" : ""}`} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
