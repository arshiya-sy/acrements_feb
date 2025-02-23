import React from "react";
import Navbar from "./Navbar";
import Lander from "./Lander";
import AboutUs from "./AboutUs";
import ThirdSec from "./ThirdSec";
import VisionMission from "./VisionMission";
import WhyUs from "./WhyUs";
import GetInTouch from "./GetInTouch";
import ContactUs from "./ContactUs";

function HomePage() {
    return (
        <div>
            <Navbar />
            <Lander />
            <AboutUs />
            <ThirdSec />
            <VisionMission />
            <WhyUs />
            <GetInTouch />
            <ContactUs />
        </div>
    )
}

export default HomePage;