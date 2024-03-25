import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg from '../images/bg6.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
} from 'mdb-react-ui-kit';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subscribe, setSubscribe] = useState(false);
    const [error, setError] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubscribeChange = () => {
        setSubscribe(!subscribe);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3001/auth/signup', {
                firstName,
                lastName,
                email,
                password,
                subscribe
            });
            // Redirect to login page upon successful signup
            window.location.href = '/Login'; // Redirect to Login page
        } catch (error) {
            setError('An error occurred while signing up. Please try again. (Email Already Exists)');
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
                            <h2>Create an Account</h2>
                            <MDBCardBody className='p-5'>
                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={handleFirstNameChange} />
                                    </MDBCol>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={handleLastNameChange} />
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={handleEmailChange} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={handlePasswordChange} />
                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='subscribe' id='subscribe' label='Subscribe to our newsletter' checked={subscribe} onChange={handleSubscribeChange} />
                                </div>
                                {error && <div className="text-danger">{error}</div>}
                                <button className="signup-button" onClick={handleSignup}>
                                    <a className="signuptext" href="/">Sign up</a>
                                </button>
                                <div className="text-center">
                                    <p>or sign up with:</p>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>
                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </div>
    );
};

export default Signup;

