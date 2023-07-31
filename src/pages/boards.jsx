import React from "react";
import "../Boards.css";
import "../components/navbar.css";
import keeb3square from './images/keeb3square.jpg';
import rk from './images/rk.jpg';
import gmmk from './images/gmmk.jpg';
import keychron from './images/keychron.jpg';

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
            <a className="navigation-item" href="/boards">boards</a>
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


export default Boards;