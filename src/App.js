import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Profile/>
            <Portfolio/>
            <About/>
            <ContactUs/>
            <Footer/>
            <Copyright/>
        </div>

    );
}

export default App;