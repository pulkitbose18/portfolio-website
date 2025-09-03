import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pulkit Bose </span>
            from <span className="purple">Kanpur, India.</span>
            <br />
            I am a Python developer with a strong foundation in software development, algorithms, and data structures.
            <br />
            Passionate about financial technology and eager to apply Python programming skills in front-office trading.
            <br />
            <br />
            Apart from coding, here are some other activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, not perfection!"{" "}
          </p>
          <footer className="blockquote-footer">Pulkit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
