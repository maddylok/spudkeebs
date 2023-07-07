import React from "react";
import "../gmmkpro.css";
import gmmkpro_1 from './images/gmmkpro_1.jpg';
import gmmkpro_2 from './images/gmmkpro_2.jpg';
import gmmkpro_3 from './images/gmmkpro_3.jpg';

const Gmmkpro = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>gmmk pro</h1>
      <div className="content">
        <div className="gmmk-intro">
          <img id="gmmk-header" src={gmmkpro_3} />
          <p>
            this was my first actual build. i made this one for my sister's boyfriend.
            the gmmk pro is a 75% aluminum board from glorious. i ordered the barebones set, but they also have a prebuilt option!
            the board has beautiful rgb light bars on the left and right sides, and the rgb is fully customizable.
          </p>
          <div className="stock-specs">
            <img id="gmmk-box" src={gmmkpro_1} />
            <div className="specs-container">
              <h2>gmmk pro specs:</h2>
              <p>-75% layout</p>
              <p>-hot swappable</p>
              <p>-fully customizable rgb</p>
              <p>-aluminum case</p>
              <p>-gasket mounted plate</p>
              <p>-rotary knob</p>
              <p>-pcb/plate foam</p>
              <p>-case foam</p>
              <p>-$169.99 (barebones)</p>
            </div>
          </div>
        </div>
        <div className="switches">
          <h2>switch specs</h2>
          <p>
            after searching extensively for a perfect linear switch, i finally settled on the lavender linear switches by durock.
            these are extremely smooth even with just the factory lube, and they produce a beautiful deep, thocky sound. the gmmk pro comes with pre-lubed 
            stabilizers, but i decided to change them out for durock plate mounted stabilizers. the stock stabs sounded a bit pingy and scratchy,
            especially for the spacebar. they also are pretty sticky, so if you do decide to use the stock stabs,
            i recommend wiping off the factory lube and relubing them yourself. i lubed and holee modded the stabilizers.
          </p>
          <div className="switch-specs">
            <div className="switch-specs-description">
              <h3>durock lavender switches:</h3>
              <p>-linears</p>
              <p>-nylon housing</p>
              <p>-POM stems</p>
              <p>-5 pin</p>
              <p>-65g gold plated spring</p>
              <p>-$23.40 for 36 switches</p>
              <p>-factory-lubed</p>
              <p>-sound profile: thocky</p>
            </div>
            <img id="gmmk-switch" src={gmmkpro_2} />
          </div>
        </div>
        <div className="final-build">
          <h2>final build</h2>
          <p>
            for one of my very first boards, i felt pretty accomplished with the completion of this one.
            and it felt even better being able to gift it to someone else for them to enjoy. i really like how solid 
            the board feels and the deep thockiness that aluminum case adds to the sound. for the price, i think this is a 
            great beginner board. i do have to say, be aware that for many of their boards, the pcb screws are stripped 
            and it is very difficult to remove the pcb from the plate. aside from that and the stock stabilizers not being the best, 
            i really think glorious made a fantastic keeb for beginners. 
          </p>
          <img id="final-build" src={gmmkpro_3} /> 
          {/*replace images with new images*/}
          <h3>mods:</h3>
          <p>-tape mod</p>
          <p>-bandaid mod for spacebar</p>
          <p>-shine-through pudding keycaps</p>
          <p>-durock plate mounted stabilizers (holee modded and lubed)</p>
          <p>-durock lavender linear switches</p>
        </div>
      </div>
    </div>

  );
};

export default Gmmkpro;


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
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/boards">boards</a>
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
