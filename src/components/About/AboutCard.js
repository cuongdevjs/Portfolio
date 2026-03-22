import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi, I'm <span className="purple">Cuong Manh Nguyen (Leo) </span>
						from <span className="purple"> Ha Noi, Viet Nam.</span>
						<br />
						I am a <span className="purple">Frontend Tech Lead</span> with nearly{" "}
						<span className="purple">6 years</span> of professional experience.
						<br />
						I specialize in building high-performance web and mobile
						applications using modern JavaScript frameworks. I have successfully
						led projects like <span className="purple">Panoee</span> (SaaS with
						80K+ users) and enterprise solutions for{" "}
						<span className="purple">MobiFone and Sun Group</span>.
						<br />
						<br />
						Beyond coding, here are some things I enjoy:
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Mastering new Tech Stacks
						</li>
						<li className="about-activity">
							<ImPointRight /> Reading Tech Blogs & Documentation
						</li>
						<li className="about-activity">
							<ImPointRight /> Football, Badminton, and Outdoor Running
						</li>
					</ul>

					<p style={{ color: "rgb(69, 79, 140)" }}>
						"Deliver high-quality products and grow as a leader every day!"{" "}
					</p>
					<footer className="blockquote-footer">Leo</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
