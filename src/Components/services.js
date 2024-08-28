import React from 'react'
import StandMan from '../Images/stand man.png'
import './services.scss'

export const services = () => {
    return (
        <>
            <div className='services-container'>
                <div className='services-content'>
                    <div className='content-1'>
                        <h2>
                            Services
                        </h2>
                    </div>
                    <div className='content-2'>
                        <div className='text-box' >
                            <h2>Personal</h2>
                            <p>From family law to personal injury, we treat your case with the care it deserves. Let's protect what matters most to you.
                            </p>
                        </div>
                        <div className='text-box'>
                            <h2>Business
                            </h2>
                            <p>Achieve your business goals with LawKos comprehensive legal solutions, designed to mitigate risks and fuel your growth.

                            </p>
                        </div>
                    </div>
                    <div className='content-3'>
                        <img src={StandMan} className='image-StandMan' alt="StandMan" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default services;
