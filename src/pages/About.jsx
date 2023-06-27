import React from "react";
import "../About.css";

const About = () => {
  document.body.style.backgroundColor = "#f5e8bc"
    return (
      <div className="container">
        <Navbar />
        <div className="about">
          <h1>hi, i'm spud!</h1>
          {/* add spud gif  */}
          <p>i'm a 24 year old software developer based in california.
            i picked up this hobby in 2019 after i saw a picture of a cute lil mechanical keyboard
            on my instagram "for you" page. i never knew keyboards could be a hobby. i purchased my first mechanical keyboard from keychron. 
            the keychron k6 will always be my first love. in 2020, i bought a keycap set off amazon, 
            and that purchase changed the game for me. in 2021, i fully modded my first keyboard: 
            an rk kludge rk68 for my sister. my love and knowledge for this world has only grown ever since. 
            i hope you enjoy my portfolio of keebs as much as i do. (also i am thinking of doing custom builds, so if you're interested, pls fill out the survey below!)
          </p>
          <p>thank you all for your support!</p>
          <p>socials:</p>
          <p>instagram: spudkeebs</p>
          {/* add icons for socials  */}
          <p>twitch: tamagospud</p>
        </div>
      </div>
    );
  };
    
export default About;

export function Navbar() {
  return (
    <nav className="navigation">
      <a href="/home" className="brand-name">
          spud keebs
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
            <a href="/boards">builds</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}