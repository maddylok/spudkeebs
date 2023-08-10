import React from "react";
import "../gmmkpro.css";
import "../components/navbar.css";
import Navbar from '../components/Navbar';
import gmmkpro_1 from './images/gmmk/gmmkpro_1.jpg';
import gmmkpro_2 from './images/gmmk/gmmkpro_2.jpg';
import gmmkpro_3 from './images/gmmk/gmmkpro_3.jpg';
import gmmk_1 from './images/gmmk/gmmk_1.JPG';
import gmmk_2 from './images/gmmk/gmmk_2.JPG';
import gmmk_3 from './images/gmmk/gmmk_3.JPG';
import gmmk_4 from './images/gmmk/gmmk_4.JPG';
import gmmk_5 from './images/gmmk/gmmk_5.JPG';
import gmmk_6 from './images/gmmk/gmmk_6.JPG';
import gmmk_7 from './images/gmmk/gmmk_7.JPG';
import gmmk_8 from './images/gmmk/gmmk_8.JPG';
import gmmk_9 from './images/gmmk/gmmk_9.JPG';
import durock from './images/gmmk/durockswitch.JPG';


const Gmmkpro = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>gmmk pro</h1>
      <div className="content">
        <div className="gmmk-intro">
          <img id="gmmk-header" src={gmmk_1} />
          <p>
            this was my first actual build. i made this one for my sister's boyfriend.
            the gmmk pro is a 75% aluminum board from glorious. i ordered the barebones set, but they also have a prebuilt option!
            the board has beautiful rgb light bars on the left and right sides, and the rgb is fully customizable.
          </p>
          <div className="stock-specs">
            <img id="gmmk-box" src={gmmk_8} />
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
          <img id="final-build" src={gmmk_4} /> 
          {/*replace images with new images*/}
          <h3>mods:</h3>
          <p>-tape mod</p>
          <p>-bandaid mod for spacebar</p>
          <p>-shine-through pudding keycaps</p>
          <p>-durock plate mounted stabilizers (holee modded and lubed)</p>
          <p>-durock lavender linear switches</p> 
        </div>
        <div className="gmmk-gallery">
          <h2>gallery</h2>
          <img id="gmmk-2" src={gmmk_2} />
          <img id="gmmk-3" src={gmmk_3} />
          <img id="gmmk-5" src={gmmk_5} />
          <img id="gmmk-6" src={gmmk_6} />
          <img id="gmmk-7" src={gmmk_7} />
          <img id="gmmk-9" src={gmmk_9} />
        </div>
      </div>
    </div>

  );
};

export default Gmmkpro;

