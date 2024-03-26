import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newbutton from './3dBtn'
import backgroundImage from '../images/landing1.jpg'
import ParticleRing from '../components/ParticleRing';
import './Home.css';
import MoveUpSection from '../components/MoveUpSection';




const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isView, setView] = useState(false);

    const moveUpAnimation = useSpring({
        opacity: isVisible ? 10 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
    });
    const moveUp = useSpring({
        opacity: isVisible ? 10 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('move-up-section');
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            console.log(sectionOffset)
            const isSectionEnteringViewport = scrollPosition + viewportHeight > 1800;

            setIsVisible(isSectionEnteringViewport);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handle = () => {
            const section = document.getElementById('move-up');
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            console.log(sectionOffset)
            const isSectionEnteringViewport = scrollPosition + viewportHeight > 2300;
            setView(isSectionEnteringViewport);
        };

        window.addEventListener('scroll', handle);
        handle(); // Check initial scroll position

        return () => {
            window.removeEventListener('scroll', handle);
        };
    }, []);
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.type = 'module';
        script.src = "https://unpkg.com/@splinetool/viewer@1.0.55/build/spline-viewer.js";
        script.async = true;


        // Append the script to the document body
        document.body.appendChild(script);

        // Handle script load
        script.onload = () => {
            // Code to run after the script has loaded
            console.log('Spline Viewer script loaded!');
        };

        // Clean up: remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount
    return (
        <div>
            <Navbar />
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.57/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/VQK-xLvofoabAViS/scene.splinecode"></spline-viewer>
            <div className="newbtn" style={{ position: 'absolute', top: 550, left: 20, zIndex: 1 }} >
                <a className="getstarted" href="Login">
                    <Newbutton />
                </a>
            </div>


            {/* <div> */}
            {/* <img src={backgroundImage}></img> */}
            {/* 
                <div>
                    <spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/V-xyj-dg77oUwTcf/scene.splinecode"></spline-viewer>
                </div> */}
            {/* </div> */}


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

                <animated.section id="move-up-section" className="move-up-section" style={moveUpAnimation}>
                    <section id="learn-more" className="section" >
                        <div className="container">
                            <h2 className="section-heading">How it Works</h2>
                            <p className="section-text">
                                CLASSIFAI is a state of art issue classification tool that helps you save time and improve your customer service. Just upload your issue reports on our tool and categorize them  in a flash. Make sure that your file is in the given format to remove any chances of errors. View the reports and charts of your data with an ease of click. Let ClassifAI take care of quality.
                            </p>
                        </div>
                    </section>
                </animated.section>

                <animated.section id="move-up" className="move-up" style={moveUp}>
                    <section id="features" className="section bg-light">
                        <div className="container">
                            <h2 className="section-heading">Key Features</h2>
                            <div className="row feature-boxes">
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <i className="fas fa-check-circle fa-3x"></i>
                                        <h3>Advanced Classification</h3>
                                        <p>
                                            ClassifAI with its advanced technology enables you to categorize your issue reports accurately into 3 distinct categories ( Bugs, Feature Requests and Questions ). You can use the results to enhance and speed your quality management and provide better customer experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <i className="fas fa-user-friends fa-3x"></i>
                                        <h3>User-Friendly Interface</h3>
                                        <p>
                                            ClassifAI offers users a seamlessly intuitive interface, ensuring a user-friendly experience. With a thoughtfully designed platform, users can effortlessly navigate through the advanced classification process, making issue management straightforward and efficient.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <i className="fas fa-shield-alt fa-3x"></i>
                                        <h3>Secure and Reliable</h3>
                                        <p>
                                            ClassifAI prioritizes user security, delivering a robust and trustworthy environment. With stringent measures in place, users can rely on a secure platform for issue classification, safeguarding sensitive data and ensuring a dependable experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </animated.section>

                <Footer />
            </div>
        </div >
    );
};

export default Home;
