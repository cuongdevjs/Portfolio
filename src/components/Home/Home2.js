import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
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
							I am a <b className="purple">Frontend Engineer & Tech Lead</b> with nearly <b className="purple">6 years</b> of experience in building and maintaining high-performance web and mobile applications.
							<br />
							<br />I am fluent in modern stacks like
							<i>
								<b className="purple"> JavaScript, TypeScript. </b>
							</i>
							<br />
							<br />
							My primary focus is developing scalable solutions for products like&nbsp;
							<i>
								<b className="purple">Panoee (SaaS platform with 80K+ users) </b>
							</i>
							and various enterprise applications for
							<i>
								<b className="purple"> MobiFone and Sun Group.</b>
							</i>
							<br />
							<br />
							I have a deep passion for building modern interfaces using
							<i>
								<b className="purple">
									{" "}
									ReactJS, NextJS, and React Native.
								</b>
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
						<h1>CONTACT ME</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/cuongdevjs"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://facebook.com/nguyenmanhcuong.stf"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillFacebook />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/cuongcoder/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/cuong_dev/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
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
