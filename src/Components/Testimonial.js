import React from 'react'
import './Testimonial.scss'
import image1 from '../Images/pexels-jordan-bergen.png'
import image2 from '../Images/pexels-los-muertos-c.png'
import image3 from '../Images/bxs-quote-alt-left.png'
const Testimonial = () => {
    return (
        <>
            <div className='container-testimonial'>
                <div className='section-testimonial'>
                    <div className='box1-testimonial'>
                        <div className='image-testimonial' >
                            <img className='image1' src={image1}></img>
                            <img className='image2' src={image3}></img>
                        </div>
                        <div className='paragraf-testimonial' >
                            <p>LawKos is our trustworthy legal partner. Their team is professional, responsible and very supportive. The legal advices and services provided are always successful. We want to thank LawKos for being an important factor to the success of our company.</p>
                        </div>
                        <div className='autori-testimonial' >
                            <h2>Drilon Kraniqi</h2>
                            <p>Director, TravelKos</p>
                        </div>
                    </div>
                    <div className='box2-testimonial'>
                        <div className='image-testimonial' >
                            <img className='image1' src={image2}></img>
                            <img className='image2' src={image3}></img>
                        </div>
                        <div className='paragraf-testimonial' >
                            <p>Thank you LawKos for your amazing services. We want to express our gratitude for all the years we have been working together. Your team is very professional and talented. We would recommend LawKos to anyone who needs legal services and solutions.</p>

                        </div>
                        <div className='autori-testimonial' >
                            <h2>Blinera Morina</h2>
                            <p>CEO, Jackal Agency</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;