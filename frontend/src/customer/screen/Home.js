import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../images/landing1.jpg'
import ParticleRing from '../components/ParticleRing';
import './Home.css';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        color: '#fff',
        padding: '100px 0',
    };

    return (
        <div>
            <Navbar />
            <div>
                <ParticleRing />
            </div>
            <div className="landing-page">
                {/* <div className="header" style={backgroundStyle}> */}
                <div className="header">
                    <div className="container">
                        <h1 className="display-4">Issue Report Classification</h1>
                        <p className="lead">
                            Streamline your issue reports with advanced classification.
                        </p>
                        <a href="#learn-more" className="btn btn-primary btn-lg">
                            Learn More
                        </a>
                    </div>
                    {/* </div> */}
                </div>


                <section id="learn-more" className="section">
                    <div className="container">
                        <h2 className="section-heading">How it Works</h2>
                        <p className="section-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                            fringilla lectus nec fermentum hendrerit.
                        </p>
                    </div>
                </section>

                <section className="section bg-light">
                    <div className="container">
                        <h2 className="section-heading">Key Features</h2>
                        <div className="row feature-boxes">
                            <div className="col-md-4">
                                <div className="feature-box">
                                    <i className="fas fa-check-circle fa-3x"></i>
                                    <h3>Advanced Classification</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-box">
                                    <i className="fas fa-user-friends fa-3x"></i>
                                    <h3>User-Friendly Interface</h3>
                                    <p>
                                        Proin fringilla lectus nec fermentum hendrerit.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-box">
                                    <i className="fas fa-shield-alt fa-3x"></i>
                                    <h3>Secure and Reliable</h3>
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div >
    );
};

export default Home;
