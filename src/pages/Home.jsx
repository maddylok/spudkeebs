import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import keeb1 from './images/home/keeb1.jpg';
import keeb2 from './images/home/keeb2.jpg';
import keeb3 from './images/home/keeb3.jpg';
import me from './images/home/me.jpg';
import zoom75 from './images/home/zoom75.jpeg';
import "../components/navbar.css";
import Navbar from '../components/Navbar';

function Home() {
	document.body.style.backgroundColor = "#f5e8bc"
	return (
		<div>
			<Navbar />
			<CarouselPage />
			<div className="intro">
				<h1>about me</h1>
				<p className="about-me">hi, i'm maddy! also known as spud. welcome to my keyboard world!
					i began this hobby in 2019 with my first mechanical keyboard purchase: the keychron k6.
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
					<a href="/gmmkpro">
						<img src={keeb2} />
						<p className="legend">gmmk pro</p>
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


export default Home; 
