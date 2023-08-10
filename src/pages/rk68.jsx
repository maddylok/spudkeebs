import React from "react";
import "../components/navbar.css";
import Navbar from '../components/Navbar';
import "../rk68.css";
import rk_1 from './images/rk/rk_1.JPG';
import rk_2 from './images/rk/rk_2.JPG';
import rk_3 from './images/rk/rk_3.JPG';
import rk_4 from './images/rk/rk_4.JPG';
import rk_5 from './images/rk/rk_5.JPG';
import rk_6 from './images/rk/rk_6.JPG';
import rk_7 from './images/rk/rk_7.JPG';
import rk_8 from './images/rk/rk_8.jpg';
import alpaca from './images/rk/alpacaswitch.JPG';

const Rk68 = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>royal kludge rk68</h1>
      <div className="content">
        <div className="rk68-intro">
          <img id="rk-3" src={rk_3} />
          <p>
            this was my first mod. i built this one as a gift for my sister!
            i got the rk68 off amazon after watching several youtube videos that recommended this
            board for beginners. the rk68 is a 65% prebuilt keyboard with blue backlighting with
            hot-swappable switches. it has both wired and wireless connectivity, and is fully
            remappable.
          </p>
          <div className="stock">
            <h2>stock board</h2>
            <img id="rk-8" src={rk_8} />
            <p>
              the rk68 comes with white shine-through keycaps that i ended up replacing with a cute corgi 
              keycap set i found on amazon. i replaced the stabilizers with durock plate mounted stabs (holee modded and lubed). 
              the stock stabilizers aren't great, but they are very easy to replace. there are 
              no foams in this board, so i did end up adding a thin layer of foam in the case. i also
              double layer tape modded the pcb and band-aid modded the spacebar.
            </p>
            <div className="stock-specs">
              <div className="specs-description">
                <h3>rk68 specs:</h3>
                <p>-blue backlighting</p>
                <p>-hot swappable</p>
                <p>-65% layout</p>
                <p>-$52.99 on amazon</p>
                <img id="rk-5" src={rk_5} />
              </div>
            </div>
          </div>
          <div className="switches">
            <h2>switch specs</h2>
            <p>
              the board came prebuilt with tactile rk brown switches. although they are tactiles,
              they sounded and felt more on the clicky end. i replaced them with alpaca linears from prime keyboards.
              i lubed and filmed the switches.
            </p>
            <img id="alpaca" src={alpaca} />
            <div className="switch-specs">
              <div className="alpaca-linears">
                <h3>alpaca linears:</h3>
                <p>-linear</p>
                <p>-$0.55 per switch</p>
                <p>-gold plated spring</p>
                <p>-5 pin</p>
                <p>-actuation force: ~50-55gf</p>
                <p>-sound profile: thocky</p>
              </div>
              <div className="rk-browns">
                <h3>rk browns:</h3>
                <p>-tactile</p>
                <p>-3 pin</p>
                <p>-sound profile: almost clicky, very loud</p>
              </div>
            </div>
          </div>
        </div>
        <div className="final-build">
          <h2>final build</h2>
          <p>
            for my first mod, i was very happy with the way it turned out.
            it sounds great and looks so cute with the corgi keycaps. if you're looking
            for a beginner board, i will say that there are much better pre-builts or diy kits
            on the market, but for the price, this board is pretty great and very easy to customize. 
          </p>
          <div className="final-img">
            <img id="rk-2" src={rk_2} />
          </div>
          <h3>mods</h3>
          <p>-tape mod</p>
          <p>-alpaca linears (lubed and filmed)</p>
          <p>-corgi keycaps from amazon</p>
          <p>-durock plate mount stabilizers (lubed and holee modded)</p>
          <p>-case foam</p>
        </div>
        <h2>gallery</h2>
        <div className="rk-gallery">
          <img id="rk-4" src={rk_4} />
          <img id="rk-1" src={rk_1} />
          <img id="rk-6" src={rk_6} />
          <img id="rk-7" src={rk_7} />
        </div>
      </div>
    </div>
  );
};

export default Rk68;
