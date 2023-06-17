import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import ghiblifill from './images/ghiblifill.jpeg';
import ponyofill from './images/ponyofill.jpeg';
import spiritedaway from './images/spiritedaway.jpeg';

function Home() {
	return (
		<div>
			<header className="Home-header">
				spud keebs
			</header>
			<CarouselPage />
		</div>
	);
};

export const CarouselPage = () => {
	return (
		<div className="slider-container">
			<Carousel className="carousel-style" autoPlay interval="5000" transitionTime="500" infiniteLoop showThumbs={false}>
				<div className="slide">
					<img src={ghiblifill} />
					<p className="legend">ghibli</p>
					{/* <div className="overlay-text">
						ghibli
					</div> */}
				</div>
				<div className="slide">
					<img src={ponyofill} />
					<p className="legend">ponyo</p>
					{/* <div className="overlay-text">
						ponyo
					</div> */}
				</div>
				<div className="slide">
					<img src={spiritedaway} />
					<p className="legend">spirited away</p>
					{/* <div className="overlay-text">
						spirited away
					</div> */}
				</div>
			</Carousel>
		</div>
	);
};

export default Home; 
