import React from 'react';
import './GridLayout.scss';
import { FaArrowRight } from 'react-icons/fa';
import image1 from '../Images/13337.png';
import image2 from '../Images/nuno-marques-0GbrjL3.png';
import image3 from '../Images/ruthson-zimmerman-Ws@2x.png';

const GridLayout = () => {
    return (
        <div className="container-GridLayout">

            <div className='shiriti-GridLayout'>
                <div className='hedear-GridLayout'>
                    <h1>News & Events</h1>
                    <div className='vija-GridLayout'></div>
                </div>
                <div className='button-content-GridLayout'>
                    <a href="#" className='view-all-button'>
                        <p>VIEW ALL</p>
                        <FaArrowRight className="icon-GridLayout" />
                    </a>
                </div>
            </div>
            <div className='section-GridLayout'>

                <div className="item large-item">
                    <img src={image1} alt="Environmental Impact" />
                    <div className="overlay">
                        <p>November 3, 2023</p>
                        <h2>New law on Environmental Impact Assessment</h2>
                    </div>
                </div>
                <div className="item small-item">
                    <img src={image2} alt="Solar Energy Park" />
                    <div className="overlay">
                        <p>October 22, 2023</p>
                        <h2>Kosovo's first auction for solar energy park</h2>
                    </div>
                </div>
                <div className="item small-item">
                    <img src={image3} alt="Labor Law" />
                    <div className="overlay">
                        <p>August 15, 2023</p>
                        <h2>Labor Law in Kosovo: Explained in details</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridLayout;
