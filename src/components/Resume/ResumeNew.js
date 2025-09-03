import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import myResumePdf from "../../Assets/resume.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myResumePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Resume Content */}
        <Row className="resume">
          <Col md={12}>
            <h2>Summary</h2>
            <p>
            Python developer with a strong foundation in software development, algorithms, and data structures. Passionate about financial technology and eager to apply Python programming skills in front-office trading. a quick learner with strong analytical skills and excellent communication skills.
            </p>

            <h2>Education</h2>
            <ul>
              <li><strong>B.Tech in Information Technology</strong> - Pranveer Singh Institute of Technology, Kanpur (2022-2026)</li>
              <li><strong>12th in Indian School Certificate</strong> - Sheiling House School 2021</li>
              <li><strong>10th in Indian Certificate of Secondary Education</strong> - Sheiling House School 2019</li>
            </ul>

            <h2>Skills & Technologies</h2>
            <ul>
              <li><strong>Programming:</strong> C, Python, HTML, CSS, JavaScript</li>
              <li><strong>Databases:</strong> MySQL, MongoDB</li>
              <li><strong>Softwares:</strong> Git, Docker, VS Code, Jupyter Notebook, Anaconda, TrueNAS, Transformer, Google Colab, Ollama, Hugging Face, LM Studio</li>
              <li><strong>technologies:</strong> Nas, linux, LLM</li>
            </ul>

            <h2>Projects & Experience</h2>
            <ul>
              <li><strong>Hindi to hindi conversation AΙ:</strong> Finetuned a phi-3.5 mini model. Used a 4 billion parameter model.</li>
              <li><strong>ViTFedCXR: A Stacked CNN-ViT-XGBoost Model for Federated Learning in Chest X-Ray Disease Detection:</strong> Built a federated learning model with Vision Transformers for pneumonia detection on chest X-rays.</li>
              <li><strong>Online Medecine Shop:</strong> A foundational e-commerce platform built with the Django framework.</li>
              <li><strong>doctor Patient Portal:</strong> Full-featured Doctor-Patient portal with separate interfaces for administrators, doctors, and patients.</li>
              <li><strong>LAVA Linguistic Autonomy Virtual Assistant:</strong> Built a desktop assistant to send emails, read news, and search Wikipedia via voice.</li>
              <li><strong>Codex console based Library Management System built in C:</strong> End-to-End C Application Development.</li>
              <li><strong>FDS Fraud Detection System:</strong> Advanced Feature Engineering including the breakthrough is exact drain feature.</li>
              <li><strong>Farmisian – Agriculture Platform:</strong> Developed an web platform for crop management and market trends.</li>
            </ul>

            <h2>Certifications</h2>
            <ul>
              <li>Introduction to Generative AI - Google</li>
              <li>Introduction to Responsible AI - Google</li>
              <li>Introduction to Large Language Models - Google</li>
              <li>Introduction to Image Generation - Google</li>
            </ul>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={myResumePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;