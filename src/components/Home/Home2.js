import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Update with your avatar image path
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Python developer with a strong foundation in software development, algorithms, and data structures. Passionate about financial technology and eager to apply Python programming skills in front-office trading. a quick learner with strong analytical skills and excellent communication skills.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> C, Python, HTML, CSS, and Javascript. </b>
              </i>
              <br />
              <br />
              My field of interests are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              and also in areas related to{" "}
              <b className="purple">
                AI and Machine Learning.
              </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Python</b> and{" "}
              <i>
                <b className="purple">
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>{" "}
              like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pulkitbose18" // Your GitHub URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pulkit-bose/" // Your LinkedIn URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
