import React from "react";
import "../components/navbar.css";

const Rk68 = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>royal kludge rk68</h1>
      <div className="content">
        <div className="rk68-intro">
          {/* <img id="ep75-1" src={ep75_1} /> */}
          <p>
            this was my first mod. i built this one as a gift for my sister!
            i got the rk68 off amazon after watching several youtube videos that recommended this
            board for beginners. the rk68 is a 65% prebuilt keyboard with blue backlighting with
            hot-swappable switches. it has both wired and wireless connectivity, and is fully
            remappable.
          </p>
          <div className="stock">
            <h2>stock board</h2>
            {/* <img id="stock-board" src={ep75_3} /> */}
            <p>
              the rk68 comes with white shine-through keycaps that i ended up replacing with a corgi 
              keycap set i found on amazon. i replaced the stabilizers with durock plate mounted stabs (holee modded and lubed). 
              the stock stabilizers aren't great, i will say, but they are very easy to replace. there are 
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
              </div>
              {/* <img id="box" src={ep75_4} /> */}
            </div>
          </div>
          <div className="switches">
            <h2>switch specs</h2>
            <p>
              the board came prebuilt with tactile rk brown switches. although they are tactiles,
              they sounded and felt more on the clicky end. i replaced them with alpaca linears from prime keyboards.
              i lubed and filmed the switches.
            </p>
            <div className="switch-specs">
              {/* <img id="switches" src={ep75_2} /> */}
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
            {/* <img id="final-board" src={ep75_6} /> */}
            <p>

            </p>
            {/* <img id="final-board2" src={ep75_7} /> */}
          </div>
          <h3>mods:</h3>
          <p>-tape mod</p>
          <p>-alpaca linears (lubed and filmed)</p>
          <p>-corgi keycaps from amazon</p>
          <p>-durock plate mount stabilizers (lubed and holee modded)</p>
          <p>-case foam</p>
        </div>
      </div>
    </div>
  );
};

export default Rk68;


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
            <a className="navigation-item" href="/home">home</a>
          </li>
          <li>
            <a className="navigation-item" href="/boards">builds</a>
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
