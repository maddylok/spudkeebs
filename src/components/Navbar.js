import React, { useState } from "react";
import "../components/navbar.css";
import totoro from '../pages/images/totoro.gif';


const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<nav className="navigation">
			<a href="/home" className="brand-name">
				spud keebs
				<img src={totoro} />
			</a>
			<button 
        className="hamburger"
        onClick={() => {
					setIsNavExpanded(!isNavExpanded);
				}}>
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
			<div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
				<ul>
          <li>
						<a className="navigation-item" href="/home" onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
              home
            </a>
					</li>
					<li>
						<a className="navigation-item" href="/boards" onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
              boards
            </a>
					</li>
					<li>
						<a className="navigation-item" href="/about" onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
              about
            </a>
					</li>
					<li>
						<a className="navigation-item" href="/contact" onClick={() => {
							setIsNavExpanded(!isNavExpanded);
						}}>
              contact
            </a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;