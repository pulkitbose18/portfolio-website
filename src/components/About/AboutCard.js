import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Chugh </span>
            from <span className="purple">Kanpur, India.</span>
            <br />
            I am a motivated and detail-oriented final-year B.Tech student with a strong foundation in programming, machine learning, and full-stack development.
            <br />
            I am eager to apply my skills in Java, Python, and problem-solving to real-world challenges.
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
          <footer className="blockquote-footer">Naman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
