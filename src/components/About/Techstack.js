import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaGit } from "react-icons/fa";
import { DiJavascript1, DiMysql } from "react-icons/di";
import { SiApache, SiTensorflow } from "react-icons/si";

const technologies = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiApache />, name: "Apache" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <FaGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <div className="tech-icon-wrapper">
            {tech.icon}
            <span className="tool-name">{tech.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;