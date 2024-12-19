import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Brain Stroke Prediction",
      description: "Developed AI/ML algorithms for Brainstroke prediction.Implemented predictive models for brainstroke prediction, utilizing AI/ML techniques to ensure accuracy."
    },
    {
      title: "Lung Cancer Prediction",
      description: "Developed CNN (Convolutional Neural Network) algorithm for predicting Lung cancer. The dataset of “Lung cancer Prediction” is being trained and testing using “Logistic Regression” Algorithm to ensure accuracy."
    },
    {
      title: "Student Details using C",
      description: " Developed student details application using C language where you can store and manage the entire complete data of student in schools and colleges and universities etc. "
    },
    {
      title: "Attendance Facial Recognition System",
      description: "In this project, I have developed a attendance facial recognition system using visio track in order to mark the attendance through facial recognization. Developed a robust attendance tracking system leveraging Python libraries such as OpenCV, Dlib, and face_recognition for efficient facial detection and recognition."
    },
    {
      title: "AI Powered Traffic Sign Recognition For Autonomous Vechiles Using Raspberry Pi",
      description: "Developed a real-time traffic sign detection and classification system using Raspberry Pi, OpenCV, and TensorFlow.Trained a Convolutional Neural Network (CNN) on the GTSRB dataset to achieve high accuracy in diverse conditions. "
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
