import React from "react";
import "../About.css";
import "../components/navbar.css";
import Navbar from '../components/Navbar';
import self from './images/self.JPG';
import wiggle from './images/wiggle.gif';
import instagram from './images/instagram.png';
import twitch from './images/twitch.png';

const About = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <div className="about">
        <h1>hi, i'm spud!</h1>
        {/* add spud gif  */}
        <img id="me" src={self} />
        <p>i'm a 24 year old software developer based in california.
          i picked up this hobby in 2019 after i saw a picture of a cute lil mechanical keyboard
          on my instagram "for you" page. i never knew keyboards could be a hobby. i purchased my first mechanical keyboard from keychron.
          the keychron k6 will always be my first love. in 2020, i bought a keycap set off amazon,
          and that purchase changed the game for me. in 2021, i fully modded my first keyboard:
          an rk kludge rk68 for my sister. my love and knowledge for this world has only grown ever since.
          i hope you enjoy my portfolio of keebs as much as i do. (also i am thinking of doing custom builds, so if you're interested,
          pls fill out the survey in the contact tab!)
        </p>
        <p>
          thank you all for your support!
          <img id="wiggle" src={wiggle} />
        </p>
        <p>socials:</p>
        <p>
          <img id="insta-logo" src={instagram} />
          instagram: spudkeebs
        </p>
        {/* add icons for socials  */}
        <p>
          <img id="twitch-logo" src={twitch} />
          twitch: tamagospud
        </p>
      </div>
    </div>
  );
};

export default About;