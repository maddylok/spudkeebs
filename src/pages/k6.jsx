import React from "react";
import keychron from './images/keychron.jpg';
import "../k6.css";
import "../components/navbar.css";

const K6 = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>keychron k6</h1>
      <div className="content">
        <div className="k6-intro">
          <img id="k6intro" src={keychron} />
          <p>
            my very first mechanical keyboard. when i was a mere newbie in the hobby. i made the mistake of not ordering it hot-swappable,
            purely because i didn't do enough research to understand what hot-swappable meant and went with the cheaper option.
            nevertheless, i still love this board in all its stock-ness. i did replace the keychron keycaps with
            a botanical keycap set i found on amazon, as i don't love the grey/orange colorway of the
            stock keychron keycap sets.
          </p>
        </div>
        <div className="stock">
          <h2>stock board</h2>
          {/* <img id="stock-board" src={ep75_3} /> */}
          <p>
            my k6 only has the white backlight which i really like,
            though keychron does offer the option for full rgb. there are so many different modes for the backlight as well. i don't love
            65% keyboards anymore, as i really enjoy having function keys, but in college i didn't have a real desk, so the smaller size was perfect.

          </p>
          <div className="stock-specs">
            <div className="specs-description">
              <h3>ep75 specs:</h3>
              <p>-white backlighting</p>
              <p>-65% layout</p>
              <p>-bluetooth/wired connectivity</p>
              <p>-$79.00 on keychron</p>
              <p>-mac and windows compatibility</p>
              <p>-pre-lubed</p>
            </div>
            {/* <img id="box" src={ep75_4} /> */}
          </div>
        </div>
        <div className="switches">
          <h2>switch specs</h2>
          <p>
            i've found that the gateron brown switches are not the best after trying plenty of other
            more expensive and "nicer" switches, but if you just want a good keyboard for typing, this will do fine.
            keychron also offers gateron reds (linears) or gateron blue (clicky), all for the
            same pricepoint.
          </p>
          <div className="switch-specs">
            {/* <img id="switches" src={ep75_2} /> */}
            <div className="gateron-brown">
              <h3>gateron brown:</h3>
              <p>-tactile</p>
              <p>-pre-lubed</p>
              <p>-3 pin</p>
              <p>-actuation force: 55 ± 15gf</p>
              <p>-sound profile: pretty quiet</p>
            </div>
          </div>
        </div>
        <div className="final-thoughts">
          <h2>final thoughts</h2>
          <p>
            for beginner keyboards, or for those who don't really care too much about keebs, i would highly recommend keychron. they are very
            customizable (as long as you get the hot-swappable version or you have the patience for soldering). keychron boards have both mac and windows
            compatibility as well! keychron also offers many different layouts. if you want a recommendation for a good keychron board,
            i suggest the keychron Q1.
          </p>
          <div className="final-img">
            {/* <img id="final-board" src={ep75_6} /> */}
            <p>

            </p>
            {/* <img id="final-board2" src={ep75_7} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default K6;


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
