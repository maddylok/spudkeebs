import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import keeb1 from './images/keeb1.jpg';
import keeb2 from './images/keeb2.jpg';
import keeb3 from './images/keeb3.jpg';
import totoro from './images/totoro.gif';
import me from './images/me.jpg';
import zoom75 from './images/zoom75.jpeg';
import "../components/navbar.css";

function Home() {
	document.body.style.backgroundColor = "#f5e8bc"
	return (
		<div>
			<Navbar />
			<CarouselPage />
			<div className="intro">
				<h1>about me</h1>
				<p className="about-me">hi, i'm maddy! also known as spud. welcome to my keyboard world!
					i began this hobby in 2019, with my first mechanical keyboard purchase: the keychron k6.
					i knew nothing about keyboards, aside from the simple keyboard on my macbook. and now, i have built/modded
					several keyboards, spent countless hours watching youtube videos, and researched even the minor aspects
					of keebs. i hope you enjoy looking at all my builds!
				</p>
				<img src={me} />
			</div>
			<div className="working-on">
				<h1>what i'm working on</h1>
				<div className="work-in-prog">
					<p>currently awaiting the arrival of my Zoom75 by Meletrix! can't wait to work on this.</p>
					<p>plans for my build:</p>
					<p>milky green with anonized gold external weight + LCD screen module</p>
					<p>-osume mochi keycaps with melon accent set </p>
					<p>-tape mod </p>
					<p>-all foams </p>
					<p>-melon milk linears</p>
					<img src={zoom75} />
					<div className="img-source">image from cannonkeys.com</div>
				</div>
			</div>
			<div className="recommendations">
				<h1>keeb brands i enjoy</h1>
				<div className="recs">
					<p>osume: my absolute favorite keycaps + deskmats</p>
					<p>cannonkeys: boards, keycaps, accessories</p>
					<p>dangkeebs: tools, switches, lube</p>
					<p>keychron: beginner prebuilts</p>
				</div>
			</div>

		</div>
	);
};

export const CarouselPage = () => {
	return (
		<div className="slider-container">
			<Carousel className="carousel-style" autoPlay interval="4000" transitionTime="500" infiniteLoop showThumbs={false}>
				<div className="slide">
					<a href="/boards">
						<img src={keeb1} />
						<p className="legend">my boards</p>
					</a>
				</div>
				<div className="slide">
					<a href="/home">
						<img src={keeb2} />
						<p className="legend">tofu60 acrylic</p>
					</a>
				</div>
				<div className="slide">
					<a href="/ep75">
						<img src={keeb3} />
						<p className="legend">epomaker ep75</p>
					</a>
				</div>
			</Carousel>
		</div>
	);
};

export function Navbar() {
	return (
		<nav className="navigation">
			<a href="/home" className="brand-name">
				spud keebs
				<img src={totoro} />
			</a>
			<button className="hamburger">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					viewBox="0 0 20 20"
					fill="white"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<div
				className="navigation-menu">
				<ul>
					<li>
						<a className="navigation-item" href="/boards">boards</a>
					</li>
					<li>
						<a className="navigation-item" href="/about">about</a>
					</li>
					<li>
						<a className="navigation-item" href="/contact">contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

{/* dropdown menu for boards? potentially? */ }


export default Home; 
