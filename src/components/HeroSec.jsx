import React from 'react'


// ASSETS
import nikeImg from "../assets/nike-shoes.jpg"


// ANT DESIGN
import { Carousel } from 'antd';



const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const HeroSec = () => {
    return (
        <section className=''>
            <div className=''>
                <div className='text-center'>
                    <h1
                        className='text-6xl font-extrabold mb-8'
                        style={{
                            textShadow: '0px 0px 100px red',
                        }}
                    >
                        Welcome to E-Com.</h1>

                    <p className='text-xl font-semibold text-zinc-500'>- your ultimate destination for online shopping! At E-Com, we believe that shopping should be an enjoyable and convenient experience. With our wide range of products, seamless user interface, and top-notch customer service, we strive to make your online shopping journey as effortless as possible.</p>
                </div>

                {/* <img
                    src={nikeImg}
                    className='h-96'
                    alt='E-Com intro img'
                /> */}

                <div className='mx-auto w-1/2'>
                    <Carousel autoplay className=''>
                        <div className='mx-auto'>
                            <img
                                src={nikeImg}
                                className='mx-auto h-96'
                            />
                        </div>
                        <div>
                            <img
                                src={nikeImg}
                            />
                        </div>
                        <div>
                            <img
                                src={nikeImg}
                            />
                        </div>
                        <div>
                            <img
                                src={nikeImg}
                            />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default HeroSec