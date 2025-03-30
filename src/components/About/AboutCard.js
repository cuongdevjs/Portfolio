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
						I am currently employed as a JavaScript developer at Starfruit, a
						startup company.
						<br />
						I have a Bachelor's degree in Information Technology at University
						of Transport and Communication.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Watching Movies
						</li>
						<li className="about-activity">
							<ImPointRight /> Read Newspapers, Books
						</li>
						<li className="about-activity">
							<ImPointRight /> Play Badminton, Football or Running outside
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Happy building something helpful and learning everyday!"{" "}
					</p>
					<footer className="blockquote-footer">Leo</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
