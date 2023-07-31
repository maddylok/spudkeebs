import React from "react";
import "../components/navbar.css";

function Contact() {
    document.body.style.backgroundColor = "#f5e8bc"
    return (
        <div>
            <Navbar />
            <h2>hi! pls fill out the survey below if youre interested in a custom build by me!</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfF60PSIzDlTkV-KOl9DGjY3QLWhMZFY6SiwqeOa1rLLckvZw/viewform?embedded=true" width="640" height="977" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
            </iframe>
        </div>
    )
}

export default Contact;

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
