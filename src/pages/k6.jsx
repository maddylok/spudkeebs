import React from "react";
import "../k6.css";
import "../components/navbar.css";
import Navbar from '../components/Navbar';
import k6_1 from './images/k6/k6_1.JPG';
import k6_2 from './images/k6/k6_2.JPG';
import k6_3 from './images/k6/k6_3.JPG';
import k6_4 from './images/k6/k6_4.JPG';
import k6_5 from './images/k6/k6_5.JPG';
import k6_6 from './images/k6/k6_6.JPG';
import k6_7 from './images/k6/k6_7.JPG';
import k6_8 from './images/k6/k6_8.JPG';
import k6_9 from './images/k6/k6_9.JPG';

const K6 = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>keychron k6</h1>
      <div className="content">
        <div className="k6-intro">
          <img id="k6-2" src={k6_2} />
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
          <img id="k6-9" src={k6_9} />
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
            <img id="k6-4" src={k6_4} />
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
            <img id="k6-3" src={k6_3} />
          </div>
        </div>
        <div className="k6-gallery">
          <h2>gallery</h2>
          <img id="k6-1" src={k6_1} />
          <img id="k6-5" src={k6_5} />
          <img id="k6-6" src={k6_6} />
          <img id="k6-7" src={k6_7} />
          <img id="k6-8" src={k6_8} />
        </div>
      </div>
    </div>
  );
};

export default K6;
