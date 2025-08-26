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
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Resume Content */}
        <Row className="resume">
          <Col md={12}>
            <h2>Career Objective</h2>
            <p>
            Motivated and detail-oriented final-year B.Tech student in Information Technology at PSIT Kanpur, with a strong foundation in programming, machine learning, and full-stack development. Eager to join a dynamic team where I can apply my skills in Java, Python, and problem-solving to real-world challenges. Looking for an entry-level role in software development or Machine Learning that offers continuous learning and growth opportunities.
            </p>

            <h2>Education</h2>
            <ul>
              <li><strong>Bachelor of Technology (B.Tech) in Information Technology</strong> - Pranveer Singh Institute Of Technology (PSIT), Kanpur, India (2022 - 2026)</li>
              <li><strong>12th Class (ICSE)</strong> - Mother Teresa Mission Higher Secondary School, Kanpur, India (2021 - 2022)</li>
              <li><strong>10th Class (ICSE)</strong> - Mother Teresa Mission Higher Secondary School, Kanpur, India (2019 - 2020)</li>
            </ul>

            <h2>Technical Skills</h2>
            <ul>
              <li><strong>Languages:</strong> Java, Python (ML), PHP, JavaScript</li>
              <li><strong>Web:</strong> React.js, Node.js, HTML, CSS, Apache</li>
              <li><strong>ML/AI:</strong> Federated Learning, LLMs (basic), TensorFlow</li>
              <li><strong>Tools:</strong> Git, GitHub, REST APIs, Netlify, MySQL</li>
              <li><strong>Platforms:</strong> LeetCode, HackerRank, GFG</li>
            </ul>

            <h2>Projects</h2>
            <ul>
              <li><strong>Pneumonia Detection with Federated Learning:</strong> Developed a CNN-based ML model to detect pneumonia from chest X-rays using Federated Averaging across 5 clients. Achieved 91% accuracy while preserving data privacy. (Tech Stack: Python, TensorFlow, PyTorch)</li>
              <li><strong>LAVA Voice Assistant:</strong> Built a desktop assistant to send emails, read news, and search Wikipedia via voice using speech recognition and text-to-speech libraries. (Tech Stack: Python, pyttsx3, smtplib, speech_recognition)</li>
              <li><strong>Generative AI-based Hindi Language Converter:</strong> Developed a web application leveraging a fine-tuned LLM to convert Hinglish text into formal Devanagari script, achieving high contextual accuracy. (Tech Stack: Python, Hugging Face Transformers, Flask, React.js)</li>
              <li><strong>Stenography Error Hunter:</strong> Created a grammar-checking tool using NLP to correct shorthand transcripts for training stenographers. (Tech Stack: Python, NLTK, language_tool_python)</li>
              <li><strong>Portfolio Website:</strong> Deployed a personal portfolio with animations and project highlights. (Live Link: namanchugh-portfolio.netlify.app) (Tech Stack: React.js, Netlify)</li>
            </ul>

            <h2>Certifications & Achievements</h2>
            <ul>
              <li>AWS Cloud Practitioner</li>
              <li>Salesforce Trailhead: 53 Badges</li>
              <li>Infosys - Bootstrap & Gen AI</li>
              <li>HackerRank Python Basic</li>
              <li>Agentblazer Innovator 2025</li>
              <li>ACM ICPC Participant</li>
              <li>TechExpo Winner 2024</li>
              <li>Head - Ignitia Tech Fest (2 Years)</li>
              <li>500+ DSA Problems Solved</li>
              <li>Zonal-Level Badminton Player</li>
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
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;