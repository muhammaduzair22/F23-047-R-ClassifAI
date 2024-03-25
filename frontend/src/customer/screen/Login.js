import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import loginimage from '../images/landing3.jpg';
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loginimg from '../images/login.gif';
import bg from '../images/bg6.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email,
                password
            });
            const { token } = response.data;
            localStorage.setItem('token', token); // Save JWT token in local storage
            console.log(localStorage)
            // Redirect or perform any other action upon successful login
            window.location.href = '/Dashboard'; // Redirect to Dashboard page
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                <MDBRow>
                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                            The best offer <br />
                            <span style={{ color: '#F4C142' }}>for your business</span>
                        </h1>
                        <p className='px-3' style={{ color: 'hsl(218, 81%, 95%)' }}>
                            The best offer for your business! Enhance your workflow efficiency with our cutting-edge Issue Report Classification system. Streamline the categorization and resolution process, ensuring quick and accurate handling of all reported issues. Revolutionize your project management and elevate your business productivity today!
                        </p>
                    </MDBCol>
                    <MDBCol md='6' className='position-relative'>
                        <MDBCard className='loginbox my-5 bg-glass'>
                            <br />
                            <h2>Sign In</h2>
                            <MDBCardBody className='p-5'>
                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={handleEmailChange} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={handlePasswordChange} />
                                {error && <div className="text-danger">{error}</div>}
                                <button className="login-button" onClick={handleLogin}>
                                    <img
                                        src={Loginimg}
                                        alt="Loginimg"
                                        className="icon"
                                    />
                                    <span className="logintext">Login</span>
                                </button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </div>
    );
};

export default Login;
