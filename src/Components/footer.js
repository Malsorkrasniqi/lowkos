import React from 'react'
import './footer.scss'
import { HiPhoneArrowDownLeft } from "react-icons/hi2";

import { SlSocialLinkedin, SlSocialTwitter, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import logo from '../Images/Group 36.png'

export const footer = () => {
    return (<>
        <div className='container-footer'>
            <div className='setion-footer-all'>

                <div className='setion-footer-1'>
                    <div className='footer-logo-p'>
                        <img src={logo}></img>
                        <p>Legal Excellence</p>
                    </div>
                    <div className="subscription-input">
                        <div className="input-container">
                            <i className="icon-envelope"></i>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                    <div className='footer-call-icone'>
                        <div className='footer-call'>
                            <div className='icone-call'><HiPhoneArrowDownLeft /></div>
                            <div className='number-p'>
                                <h4>+383 123 456 789 </h4>
                                <p>Call our office</p>
                            </div>
                        </div>

                        <div className='footer-connent-iconeSocial'>
                            <div    >

                                <h3>Connect with us:</h3>
                            </div>
                            <div className='footer-all-icones'>

                                <a className='icone-footer-all' > <SlSocialLinkedin /></a>
                                <a className='icone-footer-all' > <SlSocialTwitter /></a>
                                <a className='icone-footer-all' > <SlSocialFacebook /></a>
                                <a className='icone-footer-all' > <SlSocialInstagram /></a>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='setion-footer-2'>
                    <div className="footer-column">
                        <h4>About</h4>

                        <a>Our Story</a>
                        <a>Our Team</a>
                        <a>Careers</a>
                        <a>Clients & Partners</a>
                    </div>
                    <div className="footer-column">
                        <h4>Services</h4>
                        <a>Practice Area</a>
                        <a>Solutions</a>
                        <a>Legal Tech</a>
                        <a>Case Studies</a>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <a>Contact Us</a>
                        <a>Latest News</a>
                        <a>Insights</a>
                        <a>Legal Notices</a>
                    </div>
                </div>


            </div>
            <div className='setion-footer-3'></div>
        </div>
    </>
    )
}

export default footer;