import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginimage from '../images/landing3.jpg'
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="left-panel">
                    {/* Image on the left side */}
                    <img
                        src={loginimage} // Replace with your image URL
                        alt="Login Image"
                        className="login-image"
                    />
                </div>
                <div className="right-panel">
                    {/* Login box on the right side */}
                    <div className="login-box">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                        </form>
                        <p className="signup-link">
                            Don't have an account? <a href="Signup">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
