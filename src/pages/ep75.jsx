import React from "react";
import "../ep75.css";
import "../components/navbar.css";
import Navbar from '../components/Navbar';
import ep75_1 from './images/ep75/ep75_1.jpg';
import ep75_2 from './images/ep75/ep75_2.jpg';
import ep75_3 from './images/ep75/ep75_3.jpg';
import ep75_4 from './images/ep75/ep75_4.jpg';
import ep75_6 from './images/ep75/ep75_6.JPG';
import ep75_7 from './images/ep75/ep75_7.jpg';
import ep75_8 from './images/ep75/ep75_8.JPG';
import ep75_9 from './images/ep75/ep75_9.JPG';
import ep75_10 from './images/ep75/ep75_10.JPG';
import ep75_11 from './images/ep75/ep75_11.JPG';
import ep75full from './images/ep75/ep75full.JPG';

const Ep75 = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>epomaker ep75</h1>
      <div className="content">
        <div className="ep75-intro">
          <img id="ep75-1" src={ep75_1} />
          <p>
            this is my most recent board! i didn't think a prebuilt
            could turn out THIS WELL. the epomaker ep75 is a 75% hot-swappable with rgb
            and both bluetooth and wired connectivity. the rgb light strip along all sides of the
            board adds so much more to its aesthetic without being too dramatic.
          </p>
          <div className="stock">
            <h2>stock board</h2>
            <img id="stock-board" src={ep75_3} />
            <p>
              the ep75 came with their pampas keycap set, which are beautiful blue and white
              ESA profile keycaps. although i loved the look, i didn't love the feel of these keycaps, as i'm more of
              a cherry profile enjoyer. i decided to switch to the osume dalgona set (which i pre-ordered in august of 2022 and waited 9 months for,
              but it was so worth it). i also switched out the stock stabilizers with
              durock plate mount stabilizers i purchased from dangkeebs. i holee modded and lubed the new stabilizers.
            </p>
            <div className="stock-specs">
              <div className="specs-description">
                <h3>ep75 specs:</h3>
                <p>-rgb lighting</p>
                <p>-hot swappable</p>
                <p>-75% layout</p>
                <p>-pcb foam</p>
                <p>-$99.99 on epomaker</p>
              </div>
              <img id="box" src={ep75_4} />
            </div>
          </div>
          <div className="switches">
            <h2>switch specs</h2>
            <p>
              the board came with epomaker flamingo switches, which sound pretty great
              stock. they have a very deep, thocky sound and i was impressed how nice they were.
              i switched them out for the akko cream yellows v3. i lubed the switches,
              and i didn't need to film them because the ep75 case is pretty tight.
            </p>
            <div className="switch-specs">
              <img id="switches" src={ep75_2} />
              <div className="switch-descriptions">
                <div className="akko-yellow-specs">
                  <h3>akko cream yellows v3:</h3>
                  <p>-linear</p>
                  <p>-$0.31 per switch (on amazon) & $0.20 per switch (on akko)</p>
                  <p>-18mm extension spring</p>
                  <p>-3 pin</p>
                  <p>-actuation force: 50 ± 5gf</p>
                  <p>-sound profile: creamy, softer sound</p>
                </div>
                <div className="epo-flamingo-specs">
                  <h3>epomaker flamingos:</h3>
                  <p>-linear</p>
                  <p>-$0.43 per switch (on epomaker and amazon)</p>
                  <p>-double spring</p>
                  <p>-5 pin</p>
                  <p>-actuation force: 47 ± 5gf</p>
                  <p>-sound profile: thocky, deeper sound</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="final-build">
          <h2>final build</h2>
          <p>i'm so incredibly happy with the way this build turned out. even though i chose a prebuilt keyboard,
            i was able to mod it just the way i wanted it. the stock board is incredible as well if you're not interested
            in modding it. i highly recommend the ep75!
          </p>
          <div className="final-img">
            <img id="final-board" src={ep75_10} />
            <p>

            </p>
            <img id="final-board2" src={ep75full} />
          </div>
          <h3>mods:</h3>
          <p>-tape mod</p>
          <p>-akko cream yellow switches (lubed)</p>
          <p>-osume dalgona keycaps</p>
          <p>-durock plate mount stabilizers (lubed and holee modded)</p>
        </div>
        <div className="ep75-gallery">
          <h2>gallery</h2>
          <img id="ep75-gallery-1" src={ep75_11} />
          <img id="ep75-gallery-2" src={ep75_9} />
          <img id="ep75-gallery-3" src={ep75_8} />
          <img id="ep75-gallery-4" src={ep75_7} />
        </div>
      </div>

    </div>

  );
};

export default Ep75;