import React, { useEffect } from 'react'
import '../animation/Animations.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animations = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="container">
                <h1 className='title'>Fade</h1>
                <div className="box" data-aos="fade-up">fade-up</div>
                <div className="box" data-aos="fade-down">fade-down</div>
                <div className="box" data-aos="fade-right">fade-right</div>
                <div className="box" data-aos="fade-left">fade-left</div>

                <h1 className='title'>flip</h1>
                <div className="box" data-aos="flip-left">flip-left</div>
                <div className="box" data-aos="flip-right">flip-right</div>
                <div className="box" data-aos="flip-up">flip-up</div>
                <div className="box" data-aos="flip-down">flip-down</div>

                <h1 className='title'>Zoom</h1>
                <div className="box" data-aos="zoom-in">zoom-in</div>
                <div className="box" data-aos="zoom-in-up">zoom-in-up</div>
                <div className="box" data-aos="zoom-in-down">zoom-in-down</div>
                <div className="box" data-aos="zoom-in-left">zoom-in-left</div>

                <h1 className='title'> DIFFERENT SETTINGS EXAMPLES</h1>
                <div >
                </div>
                <div className="box"data-aos="fade-up" data-aos-duration="11000">own</div>
                <div className="box" data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1500">own</div>
                <div className="box" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" >own</div>
                <div className="box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">own</div>
               

            </div>

        </>
    )
}

export default Animations