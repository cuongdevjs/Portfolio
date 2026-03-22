import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import eoffice from "../../Assets/Projects/eoffice.png";
import studio from "../../Assets/Projects/studio.png";
import Ipublic from "../../Assets/Projects/public.png";
import chatify from "../../Assets/Projects/chatify.png";
import smarttravel from "../../Assets/Projects/smarttravel.png";
import sunair from "../../Assets/Projects/sunair.png";
import sunproperty from "../../Assets/Projects/sunproperty.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import travelApp from "../../Assets/Projects/travel-app.png";

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
							description="A sophisticated SaaS platform for creating 360 virtual tours, serving 80,000+ users globally. Developed with ReactJS, Redux Toolkit, and Krpano to deliver a seamless design experience."
							demoLink="https://studio.panoee.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Ipublic}
							isBlog={false}
							title="Panoee Final Tour"
							description="The high-performance viewer for Panoee tours, optimized for 8K resolution and seamless VR experience across devices."
							demoLink="https://tour.panoee.com/674aa2e5c39834e73914050c"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={eoffice}
							isBlog={false}
							title="MobiFone Smart-Office"
							description="A comprehensive SaaS suite for MobiFone including eOffice, Smart-Travel, and eCabinet. Built with ReactJS and NextJS to unify corporate workflows for thousands of users."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={smarttravel}
							isBlog={false}
							title="MobiFone SmartTravel"
							description="Immersive 360-degree virtual tour platform for tourism, developed with ReactJS and NextJS to showcase Vietnam's beauty."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={travelApp}
							isBlog={false}
							title="Travel App"
							description="A modern mobile application for MobiFone travelers. Built with React Native, ExpressJS, and MongoDB to provide real-time tour booking and location services."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sunproperty}
							isBlog={false}
							title="Sun Property"
							description="Luxury real estate portal for Sun Group. Integrated immersive virtual tours and high-performance property filtering using ReactJS and NextJS."
							demoLink="https://sunpropertygroup.vn/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sunair}
							isBlog={false}
							title="Sun Air"
							description="Official landing page for Sun Air. Features premium design and smooth interactions to represent Sun Group's luxury aviation brand."
							demoLink="https://sunair.vn/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="Bao Viet Digital Museum"
							description="A 360 virtual museum for Bao Viet Holdings, preserving historical artifacts in a digital interactive environment."
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={codeEditor}
							isBlog={false}
							title="Pull to Refresh React"
							description="A flexible and performant pull-to-refresh component for React PWA, supporting custom loaders and smooth animations."
							ghLink="https://github.com/cuongdevjs/pull-to-refresh-react"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={chatify}
							isBlog={false}
							title="React Social Login"
							description="A high-performance React Hook for social authentication (~200 stars on GitHub). Provides a unified API for Google and Facebook login with minimal configuration."
							ghLink="https://github.com/cuongdevjs/react-social-login"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
