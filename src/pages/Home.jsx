import React from "react";
import logo from './logo.GIF';
// import About from './pages/About';

function Home() {
	return (
		<div>
			<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href='/About'>
            spud keebs
          </a>
        </header>
		</div>
	);
};

export default Home;
