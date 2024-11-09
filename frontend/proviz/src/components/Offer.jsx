import React, { useState } from 'react'; 
// import { Link } from 'react-router-dom'; 
import AI from '../assets/images/AI.jpg'; 
import AIML from '../assets/images/AIML.jpg'; 
import ML from '../assets/images/ML.jpg'; 
import './styles/offer.css'; 
import Footer from '../components/Footer';
import Modal from './Model'; // Import Modal component

const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="program-body">
      <div className="program-page">
        <header className="program-header">
          <div className="header-images">
            <img src={AI} alt="AI Image Left" className="header-image-left" />
            <div className="header-text">
              <h1>Data Science Program Offers</h1>
              <p>Explore our Data Science courses and become an expert in the field!</p>
            </div>
            <img src={ML} alt="AI Image Right" className="header-image-right" />
          </div>
        </header>

        <div className="program-content">
          <section className="program-details">
            <h2>Program Overview</h2>
            <p>
              Our Data Science program is designed to help students develop a deep understanding of data analysis,
              machine learning, and big data technologies. Whether you're a beginner or have some experience,
              our courses will equip you with the skills needed to excel in this dynamic field.
            </p>

            <h2>Courses Offered</h2>
            <ul>
              <li><strong>Introduction to Data Science:</strong> Learn the basics of data science, statistics, and programming.</li>
              <li><strong>Machine Learning with Python:</strong> Dive deep into supervised and unsupervised learning algorithms.</li>
              <li><strong>Data Visualization:</strong> Learn how to present data effectively using tools like Matplotlib and Seaborn.</li>
              <li><strong>Big Data Technologies:</strong> Gain hands-on experience with Hadoop, Spark, and other big data frameworks.</li>
            </ul>

            <h2>Program Features</h2>
            <ul>
              <li>Experienced instructors with real-world expertise</li>
              <li>Interactive hands-on projects</li>
              <li>Flexible learning schedule (online and offline options)</li>
              <li>Job placement assistance and career support</li>
            </ul>
          </section>

          <div className="program-image">
            <img src={AIML} alt="Data Science Program" />
          </div>
        </div>

        <section className="program-enrollment">
          {/* Apply Now button */}
          <p onClick={openModal} id="enroll-button">Apply Now</p>

          <p>Ready to start your journey in Data Science? Join our program today!</p>
        </section>
        
        {/* Modal component with the application form */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <Footer/>
    </div>
    
  );
}

export default Offer;
