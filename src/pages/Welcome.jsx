import React from "react";
import logo from './logo.GIF';
// import About from './pages/About';

function Welcome() {
	return (
		<div>
			<header className="App-header">
        spud keebs
        <a href='/Home'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>click to enter</p>
        </a>
        </header>
		</div>
	);
};

export default Welcome;
