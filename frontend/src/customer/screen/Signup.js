import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg from '../images/bg6.jpg'
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
    return (
        // <div>

        //     <Navbar></Navbar>
        //     <div className="signup-page">

        //         <div className="signup-container">
        //             <div className="left-panel">
        //                 {/* Image on the left side */}
        //                 <img
        //                     src="https://placekitten.com/600/800" // Replace with your image URL
        //                     alt="Signup Image"
        //                     className="signup-image"
        //                 />
        //             </div>
        //             <div className="right-panel">
        //                 {/* Signup box on the right side */}
        //                 <div className="signup-box">
        //                     <h2>Sign Up</h2>
        //                     <form>
        //                         <div className="form-group">
        //                             <label htmlFor="fullName">Full Name:</label>
        //                             <input type="text" id="fullName" className="form-control" />
        //                         </div>
        //                         <div className="form-group">
        //                             <label htmlFor="email">Email:</label>
        //                             <input type="email" id="email" className="form-control" />
        //                         </div>
        //                         <div className="form-group">
        //                             <label htmlFor="password">Password:</label>
        //                             <input type="password" id="password" className="form-control" />
        //                         </div>
        //                         <button type="submit" className="btn btn-primary btn-block">
        //                             Sign Up
        //                         </button>
        //                     </form>
        //                     <p className="login-link">
        //                         Already have an account? <a href="Login">Login</a>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer></Footer>

        // </div>
        <div>
            <Navbar></Navbar>
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

                        {/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}

                        <MDBCard className='loginbox my-5 bg-glass'>
                            <br></br>
                            <h2>Create an Account</h2>
                            <MDBCardBody className='p-5'>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

                                <div className='d-flex justify-content-center mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

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
            <Footer></Footer>

        </div>
    );
};

export default Signup;
