import React from 'react'
import './years.scss'
import Images1 from '../Images/15.png'
import Images2 from '../Images/businessman years.png'
import Images3 from '../Images/jean-philippe-delber years.png'


function years() {
    return (
        <>
            <div className='container-years'>
                <div className='years-content'>
                    <div className='years-box1'>
                        <img alt='' src={Images1}></img>
                        <h2>Years of experience
                        </h2>
                        <p>Founded in 2008, LawKos is committed to the pursuit of justice in our country and more. Our team of dedicated professionals works tirelessly to serve our community. We offer legal services and consultancy in different areas.
                        </p>
                    </div>
                    <div className='years-box2'>

                        <img alt='' src={Images2}></img>
                        <img alt='' src={Images3}></img>
                    </div>

                </div>

            </div>
        </>
    )
}

export default years;
