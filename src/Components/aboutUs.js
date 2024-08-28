import React from 'react';
import { HiArrowRight } from "react-icons/hi2";
import './aboutUs.scss';

export const AboutUs = () => {
    return (
        <div className='container-aboutUs'>
            <div className='aboutUS-content'>
                <div className='text-aboutUS-1'>
                    <h2>about us</h2>
                </div>
                <div className='text-aboutUS-2'>
                    <h2>
                        Our team consists of well-coordinated lawyers that are able to solve the most difficult tasks and cases.
                        <button href='#'>About us <HiArrowRight /></button>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
