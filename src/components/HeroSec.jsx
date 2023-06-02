import React from 'react'

import nikeImg from "../assets/nike-shoes.jpg"


const HeroSec = () => {
    return (
        <section className=''>
            <div className='flex flex-row items-center justify-between'>
                <div className='mr-32'>
                    <h1
                        className='text-6xl font-extrabold mb-8'
                        style={{
                            textShadow: '0px 0px 100px red',
                        }}
                    >
                        Welcome to E-Com.</h1>

                    <p className='text-xl font-semibold text-zinc-500'>- your ultimate destination for online shopping! At E-Com, we believe that shopping should be an enjoyable and convenient experience. With our wide range of products, seamless user interface, and top-notch customer service, we strive to make your online shopping journey as effortless as possible.</p>
                </div>

                <img
                    src={nikeImg}
                    className='h-96'
                    alt='E-Com intro img'
                />
            </div>

            <p
                className='text-2xl text-center text-zinc-600 w-4/5 mx-auto font-bold my-16'
                // style={{textShadow: '0px 0px 150px grey'}}
            >
                Discover a vast collection of products carefully curated to cater to your diverse needs and preferences. Whether you're looking for fashion essentials to upgrade your wardrobe, electronics to enhance your digital lifestyle, home decor to transform your living space, or beauty and wellness products to pamper yourself, we have it all. Our extensive selection ensures that you can find exactly what you're searching for, all in one place.</p>
        </section>
    )
}

export default HeroSec