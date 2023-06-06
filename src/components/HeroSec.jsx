import React from 'react'


// ASSETS
import carouselImg1 from "../assets/carouselImg-1.jpg"
import carouselImg2 from "../assets/carouselImg-2.jpg"
import carouselImg3 from "../assets/carouselImg-3.jpg"
import carouselImg4 from "../assets/carouselImg-4.jpg"


// ANT DESIGN
import { Carousel } from 'antd';



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const carouselImg = [
    {
        id: 1,
        src: carouselImg1
    },
    {
        id: 2,
        src: carouselImg2
    },
    {
        id: 3,
        src: carouselImg3
    },
    {
        id: 4,
        src: carouselImg4
    }
]


const HeroSec = () => {
    return (
        <section className=''>
            <div className=''>
                <div className='text-center'>
                    <h1
                        className='text-6xl text-zinc-700 font-extrabold mb-12'
                        style={{
                            textShadow: '2px 4px 2px #ff8e8e',
                        }}
                    >
                        Welcome to E-Com
                    </h1>

                    <p className='text-2xl font-semibold text-zinc-500'>- your ultimate destination for online shopping! At E-Com, we believe that shopping should be an enjoyable and convenient experience. With our wide range of products, seamless user interface, and top-notch customer service, we strive to make your online shopping journey as effortless as possible.</p>
                </div>


                <div className='mx-auto mt-28 w-2/4'>
                    <Carousel autoplay className='h-1/2'>
                        {carouselImg.map((data, index) => (
                            <div key={index} className='rounded'>
                                <img
                                    {...data}
                                    alt='E-Com shopping images'
                                    className='h-96 w-full'
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default HeroSec