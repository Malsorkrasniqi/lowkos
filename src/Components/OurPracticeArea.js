import React from 'react'
import { HiBriefcase, HiPresentationChartBar, HiBuildingLibrary, HiMiniComputerDesktop, HiIdentification, HiHome, } from "react-icons/hi2";
import './OurPracticeArea.scss'
import { FaArrowRight } from 'react-icons/fa';

function OurPracticeArea() {
    return (
        <>
            <div className='container-OurPracticeArea'>
                <div className='OurPracticeArea-Part1'>
                    <div className='hedear'>
                        <h1>Our practice area</h1>
                        <div className='vija'></div>
                    </div>
                    <div className='button-content'>
                        <a href="#" className='view-all-button'>
                            <p>VIEW ALL</p>
                            <FaArrowRight className="icon" />
                        </a>
                    </div>
                </div>
                <div className='OurPracticeArea-Part2'>
                    <div className='box1'>
                        <HiBriefcase className='icone' />

                        <h2>Corporate Law</h2>
                        <p>Focusing on advising and representing corporations, their executives, and shareholders on various legal matters. This includes mergers and acquisitions, intellectual property rights, corporate governance, and securities law.</p>
                    </div>
                    <div className='box2'>
                        <HiBuildingLibrary className='icone' />
                        <h2>Banking & Finance</h2>
                        <p>We are specialized in legal issues concerning the transaction and regulation of financial instruments and institutions. This involve issues like lending agreements, regulatory compliance, securitization, and capital markets.</p>
                    </div>
                    <div className='box3'>
                        <HiMiniComputerDesktop className='icone' />
                        <h2>ICT Sector</h2>
                        <p>We help clients navigate through regulatory compliance, data protection, intellectual property issues, and e-commerce law. We also work on contracts involving software licenses, cloud computing agreements, and technology transfers.</p>
                    </div>
                    <div className='box4'>
                        <HiHome className='icone' />
                        <h2>Real Estate</h2>
                        <p>We guide our clients through property transactions, ensuring that all regulations are met and that contracts are legally sound. This can include zoning issues, title searches, and financing.</p>
                    </div>
                    <div className='box5'>
                        <HiIdentification className='icone' />
                        <h2>Insurance</h2>
                        <p>We help our clients with legal issues concerning insurance policies and claims like policy interpretation, insurance fraud investigations, and litigation over denied claims.</p>
                    </div>
                    <div className='box6'>
                        <HiPresentationChartBar className='icone' />
                        <h2>Labor & Employment</h2>
                        <p>We can help on matt ers involving employer-employee relationships. Including employment contracts, workplace discrimination, employee benefits, and collective bargaining agreements.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurPracticeArea