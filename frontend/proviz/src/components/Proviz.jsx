// Proviz.js
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/mission.png';
import Image2 from '../assets/images/Vision.png';
import './styles/Proviz.css';
import backVideo from '../assets/videos/back.mp4';
// AnimatedImage component with a return statement
const AnimatedImage = ({ src, alt }) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="intro-image"
        />
    );
};

// Main Proviz component (uppercase "P" for React component naming convention)
const Proviz = () => {
    return (
        <div id="background">
        <video autoPlay loop muted>
          <source src={backVideo} type="video/mp4" />
        </video>
        <div className="Intro-Container">
            
            <section className="intro-section">
                <div className="intro-content">
                    <h1>Welcome To Proviz School of AI</h1>
                    <Link to="/Offer"> <h3 className="KnowMore" ><span id="Clikk">!Click </span>  To Know More About What We Offer</h3>
                    </Link>
                    <p> 
                        Proviz School of AI is dedicated to shaping the future of artificial intelligence by offering cutting-edge courses, hands-on training, and a comprehensive curriculum. Our goal is to empower the next generation of AI professionals, equipping them with the knowledge and skills to succeed in the fast-evolving world of AI.
                    </p>
                    <div className="mission-vision">
                        <div className="mission">
                            <h2>OUR MISSION</h2>
                            <AnimatedImage src={Image1} alt="AI Mission" />
                            <p>
                                To democratize AI education by providing a hands-on, project-based learning experience guided by industry experts. We believe that learning AI should be accessible to everyone, fostering a community that is inclusive, supportive, and committed to real-world applications.
                            </p>
                        </div>
                        
                        <div className="vision">
                            <h2>OUR VISION</h2>
                            <AnimatedImage src={Image2} alt="AI Vision" />
                            <p>
                                To build a global network of AI pioneers and thought leaders who are equipped with the skills and knowledge to make meaningful contributions to society and industry. Proviz School of AI envisions a future where AI is not just a field of study but a tool that everyone can use to solve complex challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Proviz;
