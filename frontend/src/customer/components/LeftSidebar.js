import React, { useState, useCallback } from "react";
import { Nav } from 'react-bootstrap';
import axios from "axios";
import './LeftSidebar.css'
const LeftSidebar = () => {

    const [fileName, setFileName] = useState("");
    const [resData, setResData] = useState({ fileContent: "", dataInsights: [] });
    const [message, setMessage] = useState("");
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

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

    return (
        <Nav defaultActiveKey="/home" className="flex-column sidebar">
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link href="/subscription">Subscription</Nav.Link>
            <Nav.Link className="a" onClick={handleClick}>Get Insights</Nav.Link>
            <Nav.Link className="a" onClick={downloadCSV}>Download CSV</Nav.Link>

            {/* <button className="insights" onClick={handleClick}>Get Insights</button>
            <button className="download" onClick={downloadCSV}>Download CSV</button> */}
            {/* Add more links for other sections */}
        </Nav>
    );
};

export default LeftSidebar;
