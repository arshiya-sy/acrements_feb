import React, { useState, useEffect } from "react";
import { jobs } from './JobsData';
import "./Careers.css";
import darkLogo from "./dark-logo.png";
import blackLogo from "./black-logo.png";
import { Link } from "react-router-dom";

export default function Careers() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [openJob, setOpenJob] = useState(null);

    const openJobDescription = (job) => {
        setOpenJob(job);
    };

    const closeJobDescription = () => {
        setOpenJob(null);
    };
    return (
        <div>
            <nav className={`nav ${scrolling ? "nav-scrolled" : ""}`}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <a href="/">
                            <img src={scrolling? blackLogo : darkLogo} alt="logo" className="nav-logo" />
                        </a>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li>
                                <a href="#about">About</a>
                            </li> */}
                            <li>
                                <a href="#services">Career</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="career-section1">
                <div className="yellow-circle"></div>
                <div className="career-hero-text">
                    <h1 className="career-hero-title">Elevate your career, one property at a time.</h1>
                    <p className="career-hero-subtext">Join us in shaping the future of real estate with innovation, passion, and growth-driven opportunities.</p>
                </div>
            </div>

            <div className="career-section2">
                <div className="section2-heading">Be part of our mission</div>
                <div className="section2-subtext">We're looking for passionate people to join us on our mission. Together, let's build something impactful and extraordinary!</div>
            </div>

            <div className="job-container">
                {jobs.map((job, index) => (
                    <div key={index} className="job-header">
                        <span className="job-heading">{job.title}</span>
                        <button className="apply-btn" onClick={() => openJobDescription(job)}>Apply <i className="fas fa-arrow-right slanted-arrow"></i>
                        </button>
                    </div>
                ))}

                {openJob && (
                    <div className="job-description">
                        <button className="close-btn" onClick={closeJobDescription}>X</button>
                        <h2>{openJob.title}</h2>
                        <p><strong>Location:</strong> {openJob.location}</p>
                        {/* {openJob.ctc && <p><strong>CTC:</strong> {openJob.ctc}</p>} */}
                        <p><strong>About the Role:</strong> {openJob.about}</p>
                        <p><strong>Responsibilities:</strong></p>
                        <ul>
                            {openJob.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p><strong>Requirements:</strong></p>
                        <ul>
                            {openJob.requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        {openJob.whyJoin && <p><strong>Why Join Acrements?</strong> {openJob.whyJoin}</p>}
                        <p><strong>How to Apply:</strong> {openJob.applyInstructions}</p>
                    </div>
                )}
            </div>
        </div>
    )
}