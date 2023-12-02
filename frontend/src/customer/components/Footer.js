import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <p>Email: classifAI@gmail.com</p>
                        <p>Phone: (051) 230-6478</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <p>Connect with us on social media:</p>
                        <ul className="social-icons">
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Address</h4>
                        <p>FAST NUCES, H11/4, Islamabad, 44000</p>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container text-center">
                    <p>&copy; 2023 ClassifAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
