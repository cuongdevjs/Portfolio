import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eoffice from "../../Assets/Projects/eoffice.png";
import studio from "../../Assets/Projects/studio.png";
import Ipublic from "../../Assets/Projects/public.png";
import smarttravel from "../../Assets/Projects/smarttravel.png";
import sunair from "../../Assets/Projects/sunair.png";
import sunproperty from "../../Assets/Projects/sunproperty.png";

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
							imgPath={studio}
							isBlog={false}
							title="Panoee Editor"
							description="Built three years ago with my core involvement, our company's software simplifies the creation of 360 virtual tours with its intuitive UI and comprehensive features across multiple sites."
							demoLink="https://studio.panoee.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Ipublic}
							isBlog={false}
							title="Panoee Final Tour"
							description="Built three years ago with my core involvement, our company's software simplifies the creation of 360 virtual tours with its intuitive UI and comprehensive features across multiple sites."
							demoLink="https://tour.panoee.com/674aa2e5c39834e73914050c"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sunproperty}
							isBlog={false}
							title="Sun Property - Sun Group"
							description="Welcome to the landing page specifically designed for SunAir. This is the main entry point, the initial page you will see, for all things related to SunAir. We've created this page to introduce you to SunAir and provide easy access to everything you need to know. This is your starting point for exploring SunAir and discovering its features."
							demoLink="https://sunpropertygroup.vn/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sunair}
							isBlog={false}
							title="Sun Air - Sun Group"
							description="Welcome to the landing page specifically designed for SunAir. This is the main entry point, the initial page you will see, for all things related to SunAir. We've created this page to introduce you to SunAir and provide easy access to everything you need to know. This is your starting point for exploring SunAir and discovering its features."
							demoLink="https://sunair.vn/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={smarttravel}
							isBlog={false}
							title="MobiFone SmartTravel"
							description="MobiFone SmartTravel develops and produces immersive 360-degree virtual tours. These virtual tours offer users the ability to explore and experience a location remotely, providing a comprehensive and interactive view. This service from MobiFone SmartTravel includes the creation of these 360 virtual tours for use in showcasing a diverse range of multiple places and points of interest."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={eoffice}
							isBlog={false}
							title="MobiFone eOffice"
							description="MobiFone eOffice là giải pháp văn phòng điện tử, hợp nhất các công tác quản lý văn bản, quản lý công việc và các nghiệp vụ hành chính trong doanh nghiệp, ..."
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
