import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lavaImage from "../../Assets/Projects/LAVA.png";
import farmisianImage from "../../Assets/Projects/Farmisian.png";
import fraudDetectionImage from "../../Assets/Projects/Fraud Detection.png";
import pneumoniaDetectionImage from "../../Assets/Projects/Pneumonia Detection.png";


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
              imgPath={pneumoniaDetectionImage} // Placeholder
              isBlog={false}
              title="Hindi to hindi conversation AΙ"
              description="Finetuned a phi-3.5 mini model. Used a 4 billion parameter model. Library used unsloth. Technique used QLORA 4bit. Made for using offline purpose and can converse in hindi with understand hindi sentences."
              ghLink="https://github.com/pulkitbose18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pneumoniaDetectionImage} // Placeholder
              isBlog={false}
              title="ViTFedCXR: A Stacked CNN-ViT-XGBoost Model for Federated Learning in Chest X-Ray Disease Detection"
              description="Built a federated learning model with Vision Transformers for pneumonia detection on chest X-rays. Applied secure model aggregation and evaluated with accuracy, F1-score, precision, and recall. Implemented a federated learning system using Flower (flwr) to train the stacking model on decentralized data."
              ghLink="https://github.com/pulkitbose18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraudDetectionImage} // Placeholder
              isBlog={false}
              title="Online Medecine Shop"
              description="A foundational e-commerce platform built with the Django framework. Configured to handle media uploads. The website is built with a clean and modern user interface. Features a responsive design that adapts to various screen sizes."
              ghLink="https://github.com/pulkitbose18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmisianImage} // Placeholder
              isBlog={false}
              title="doctor Patient Portal"
              description="Full-featured Doctor-Patient portal with separate interfaces for administrators, doctors, and patients. Supports core functionalities like user authentication, appointment scheduling, and doctor management. Follows a standard Java web application structure, separating concerns into DAOs, Servlets, and JSP pages."
              ghLink="https://github.com/pulkitbose18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lavaImage}
              isBlog={false}
              title="LAVA Linguistic Autonomy Virtual Assistant"
              description="Built a desktop assistant. Used a 4 billion parameter model. to send emails, read news, and search Wikipedia via voice."
              ghLink="https://github.com/pulkitbose18"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;