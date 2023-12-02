import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="left-panel">
                    {/* Image on the left side */}
                    <img
                        src="https://placekitten.com/600/800" // Replace with your image URL
                        alt="Signup Image"
                        className="signup-image"
                    />
                </div>
                <div className="right-panel">
                    {/* Signup box on the right side */}
                    <div className="signup-box">
                        <h2>Sign Up</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" id="fullName" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Sign Up
                            </button>
                        </form>
                        <p className="login-link">
                            Already have an account? <a href="#login">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
