import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineStar, AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    {
      icon: <AiOutlineUser size={40} />,
      title: "Experience",
      value: "6+ Years",
      description: "Frontend & Tech Lead",
    },
    {
      icon: <BiTask size={40} />,
      title: "Users Served",
      value: "80K+",
      description: "Global Panoee Users",
    },
    {
      icon: <AiOutlineStar size={40} />,
      title: "Github Stars",
      value: "220+",
      description: "Open Source Projects",
    },
    {
      icon: <AiOutlineTrophy size={40} />,
      title: "Awards",
      value: "3x",
      description: "Best Dedication",
    },
  ];

  const tools = [
    "ReactJS",
    "NextJS",
    "React Native",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "Ant Design",
    "NodeJS",
    "Express",
    "MongoDB",
    "Firebase",
    "AWS / Docker",
  ];

  return (
    <section>
      <Container fluid className="dashboard-section">
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Dashboard</strong>
          </h1>
          <p style={{ color: "white" }}>
            A snapshot of my professional journey and key metrics.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {stats.map((stat, index) => (
              <Col key={index} md={3} sm={6} className="dashboard-card-wrapper">
                <div className="dashboard-card">
                  <div className="dashboard-icon">{stat.icon}</div>
                  <h3 className="dashboard-value">{stat.value}</h3>
                  <p className="dashboard-title">{stat.title}</p>
                  <p className="dashboard-desc">{stat.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col md={6}>
              <h2 className="dashboard-subheading">Technical <strong className="purple">Proficiency</strong></h2>
              <div className="skills-list">
                {tools.map((tool, index) => (
                  <span key={index} className="skill-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <h2 className="dashboard-subheading">Career <strong className="purple">Milestones</strong></h2>
              <div className="milestone-table-wrapper">
                <table className="milestone-table">
                  <tbody>
                    <tr>
                      <td className="m-year">2020 - Pres.</td>
                      <td className="m-desc">Co-founded Panoee project as Frontend Tech Lead, scale Panoee to 80K+ global users, $100k revenue a year and managed major feature releases</td>
                    </tr>
                    <tr>
                      <td className="m-year">2018 - Pres.</td>
                      <td className="m-desc">Successfully delivered outsourcing projects for MobiFone and SunGroup.</td>
                    </tr>
                    <tr>
                      <td className="m-year">2021</td>
                      <td className="m-desc">Graduated with IT Engineering degree from Univ. of Transport and Communication.</td>
                    </tr>
                    <tr>
                      <td className="m-year">2018</td>
                      <td className="m-desc">Joined Starfruit JSC as Frontend Developer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Dashboard;
