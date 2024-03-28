import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import "./Pricing.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftSidebar from "./LeftSidebar";
const Example = () => {
    return (
        <div >
            <Navbar></Navbar>
            <h1>Choose Your Right Plan!</h1>
            <Container fluid className="cont">
                <Row>
                    <Col sm={3} className="dashboard-content">
                        <div className="price1">
                            <TiltCard1 />
                        </div>
                    </Col>
                    <Col sm={3} className="dashboard-content">
                        <div className="price2">
                            <TiltCard2 />
                        </div>
                    </Col>
                    <Col sm={3} className="dashboard-content">
                        <div className="price3">
                            <TiltCard3 />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

const TiltCard1 = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="element"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="element2"
            >
                {/* <FiMousePointer
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="element3"
                /> */}
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="element4"
                >
                    {/* <div className="custom-card">
                        <div className="card-body"> */}
                    <h2 className="card-title">Starter Plan</h2>
                    <p className="card-subtitle mb-2 text-muted">Category</p>
                    <br></br>
                    <p className="card-text">
                        Get 500 Issues ClassifAI-ed
                    </p>
                    <br></br>

                    <div className="price-details">
                        <h4 className="card-price">$9.99/Month</h4>
                    </div>
                    <button className="but btn btn-primary">GET IT NOW</button>

                    {/* </div>
                    </div> */}
                </p>
            </div>
        </motion.div>
    );
};
const TiltCard2 = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="element"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="element2"
            >
                {/* <FiMousePointer
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="element3"
                /> */}
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="element4"
                >

                    <h2 className="card-title">PRO</h2>
                    <p className="card-subtitle mb-2 text-muted">Category</p>
                    <br></br>
                    <p className="card-text">
                        Get 5000 Issues ClassifAI-ed
                    </p>
                    <br></br>
                    <div className="price-details">
                        <h4 className="card-price">29.99/Month</h4>
                    </div>
                    <button className="but btn btn-primary">GET IT NOW</button>

                </p>
            </div>
        </motion.div>
    );
};
const TiltCard3 = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="element"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="element2"
            >
                {/* <FiMousePointer
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="element3"
                /> */}
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="element4"
                >

                    <h2 className="card-title">Enterprise</h2>
                    <p className="card-subtitle mb-2 text-muted">Category</p>
                    <br></br>
                    <p className="card-text">
                        Get 50000 Issues ClassifAI-ed
                    </p>
                    <br></br>
                    <div className="price-details">
                        <h4 className="card-price">$59.99/Month</h4>
                    </div>
                    <button className="but btn btn-primary">GET IT NOW</button>
                </p>
            </div>
        </motion.div>
    );
};
export default Example;