import React from "react";
import "../components/navbar.css";
import Navbar from '../components/Navbar';

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
