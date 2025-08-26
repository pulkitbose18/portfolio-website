import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/LAVA.png";
import farmisianImage from "../../Assets/Projects/Farmisian.png";
import fraudDetectionImage from "../../Assets/Projects/Fraud Detection.png";
import pneumoniaDetectionImage from "../../Assets/Projects/Pneumonia Detection.png";
import skillSwapImage from "../../Assets/Projects/Skill Swap.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pneumoniaDetectionImage}
              isBlog={false}
              title="Pneumonia Detection Using Federated Learning"
              description="A privacy-first, multi-institution AI system that uses Vision Transformer (ViT) models and federated learning to detect pneumonia from chest X-rays. It includes explainable attention heatmaps, a real-time dashboard, and production-ready APIs with React-frontend and Flask backend."
              ghLink="https://github.com/Naman477/Pneumonia-Detection-Using-Federated-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillSwapImage}
              isBlog={false}
              title="Skill Barter System"
              description="A platform for swapping skills: users list what they can teach and what they want to learn, then match based on mutual needs, enabling peer-to-peer barter without money."
              ghLink="https://github.com/Naman477/Skill-Barter-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudDetectionImage}
              isBlog={false}
              title="Fraud Detection System"
              description="A machine learning pipeline using XGBoost and advanced feature engineering to detect fraudulent financial transactions. It includes GPU-accelerated training, serialized models ready for deployment, and detailed analysis of false positives/negatives."
              ghLink="https://github.com/pulkitbose18/fraud-detection-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmisianImage}
              isBlog={false}
              title="Farmisian"
              description="A responsive, multilingual static website (HTML/CSS) focusing on farming content—available in English, Hindi, and Marathi—likely intended for reaching diverse rural audiences."
              ghLink="https://github.com/Prabhat993/farmisian"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lavaImage}
              isBlog={false}
              title="L.A.V.A"
              description="Built a desktop assistant to send emails, read news, and search Wikipedia via voice using speech recognition and text-to-speech libraries."
              ghLink="https://github.com/Naman477/L.A.V.A"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
