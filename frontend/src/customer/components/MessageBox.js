import React, { useState } from "react";
import "./MessageBox.css";
import axios from "axios";

const MessageBox = ({ message, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [modelLoaded, setModelLoaded] = useState(false);

    const handleLoadModel = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const response = await axios.get(
                "http://localhost:3001/model/loadModel",
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            const timeInSeconds = response.data.timeInSeconds;
            await new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
            setLoading(false);
            setModelLoaded(true);
        } catch (error) {
            console.error("Error loading model:", error);
            setLoading(false);
        }
    };

    return (
        <div className="message-box">
            <span className="close-btn" onClick={onClose}>
                &times;
            </span>
            <div className="message-content">
                {modelLoaded ? (
                    <p className="status">Model loaded successfully!</p>
                ) : (
                    <>
                        <p className="msg">{message}</p>
                        {loading ? (
                            <div className="loading-spinner"></div>
                        ) : (
                            <button className="loadmodel" onClick={handleLoadModel}>Load Model</button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MessageBox;
