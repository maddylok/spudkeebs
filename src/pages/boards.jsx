import React from "react";
import "../Boards.css";
import keeb3square from './images/keeb3square.jpg';
import rk from './images/rk.jpg';
import gmmk from './images/gmmk/gmmk.jpg';
import keychron from './images/keychron.jpg';
import "../components/navbar.css";
import Navbar from '../components/Navbar';

const Boards = () => {
  document.body.style.backgroundColor = "#f5e8bc"
  return (
    <div className="container">
      <Navbar />
      <h1>my boards</h1>
      <div className="builds">
        <div className="epomaker">
          <a href="/ep75">
            <img id="ep75" src={keeb3square} />
            <p>epomaker ep75</p>
          </a>
        </div>
        <div className="rk68">
          <a href="/rk68">
            <img id="rk" src={rk} />
            <p>rk kludge rk68</p>
          </a>
        </div>
        <div className="gmmk-pro">
          <a href="/gmmkpro">
            <img id="gmmk" src={gmmk} />
            <p>gmmk pro</p>
          </a>
        </div>
        <div className="k6">
          <a href="/k6">
            <img id="keychron" src={keychron} />
            <p>keychron k6</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Boards;