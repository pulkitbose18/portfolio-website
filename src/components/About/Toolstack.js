import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
} from "react-icons/si";
import { FaGit, FaDocker } from "react-icons/fa";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <FaGit />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiSlack />, name: "Slack" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <div className="tech-icon-wrapper">
            {tool.icon}
            <span className="tool-name">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;