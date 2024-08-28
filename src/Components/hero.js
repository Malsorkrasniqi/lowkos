// HeroSection.jsx
import React from 'react';
import { HiArrowRight } from "react-icons/hi2";
import './hero.scss';
import Heroimage from '../Images/hero image.png'
const HeroSection = () => {
    return (
        <div className="container-hero ">

            <div className="hero-content">
                <div className="heder-text">

                    <h1>Legal solutions to solve complex problems</h1>
                </div>
                <div className="hero-text-button">
                    <p>We offer legal and consultancy services tailored to our clients needs. Wherever business takes you, we are here to help.</p>
                    <button className="cta-button">Get a free consultation <HiArrowRight /></button>
                </div>
            </div>


            <div className="hero-image">
                <div className="image-grid">
                    <img src={Heroimage} className='image' alt="Legal statue 3" />
                </div>

            </div>
        </div>
    );
}

export default HeroSection;
