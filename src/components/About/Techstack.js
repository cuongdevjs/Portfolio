import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiGit,
	DiAws,
} from "react-icons/di";
import {
	SiNextdotjs,
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiFirebase,
	SiDocker,
	SiAntdesign,
	SiExpress,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTailwindcss />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAntdesign />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<TbBrandReactNative />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDocker />
			</Col>
		</Row>
	);
}

export default Techstack;
