import React, { useEffect, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';

// COMPONENTS
import Navbar from '../components/Navbar'
import HeroSec from '../components/HeroSec';
import { CartContext } from '../Context/Context';
import ScrollToTop from '../components/BacktoTop';


// MATERIAL UI 
import StarIcon from '@mui/icons-material/Star';


// FRAMER MOTION 
import { motion } from "framer-motion";



const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const jsonData = await data.json();
            setData(jsonData);
        }
        console.log(data);

        fetchDataFromApi();
    }, [])



    const globalState = useContext(CartContext)
    // console.log(globalState)
    const dispatch = globalState.dispatch


    return (
        <>
            <Navbar />

            <HeroSec />



            {/* Shopping Items */}

            <section className='my-12'>
                <h1 className='text-center text-zinc-900 text-5xl font-bold underline'>Shopping Items</h1>

                <div className='flex flex-row grow flex-wrap'>
                    {data.map(productData => {
                        productData.quantity = 1;

                        return (
                            <motion.div
                                key={productData.id}
                                className='products_card border-2 rounded-2xl my-10 py-5 px-3 mx-5 flex flex-col grow basis-1/4 justify-evenly shadow-xl'
                                initial={{ opacity: 0 }}
                                transition={{duration: 1, ease: 'easeIn'}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                            >
                                <div className='products_img'>
                                    <img
                                        src={productData.image}
                                        alt={productData.category}
                                        loading='lazy'
                                        className='h-48 mx-auto transition duration-300 hover:scale-110'
                                    />
                                </div>

                                <div className='products_text text-center mt-5'>
                                    <p className='text-2xl'>{productData.title}</p>

                                    <p className='text-xl'>
                                        <span className='border-2 border-emerald-600 font-bold py-2 px-4 rounded-xl mr-5'>{productData.rating.rate} <StarIcon fontSize='small' className='mb-1 ml-1' /></span>

                                        <span className='italic font-semibold'>({productData.rating.count} reviews)</span>
                                    </p>

                                    <p className='text-xl flex flex-row justify-between items-center'>
                                        <span className='text-2x font-extrabold'>$. {productData.price}</span>

                                        <motion.span
                                            className='relative text-sm text-white bg-red-600 py-2 px-4 rounded-xl cursor-pointer'
                                            onClick={() => {
                                                dispatch({ type: 'ADD', payload: productData });
                                            }}
                                            whileHover={{
                                                scale: 1.15,
                                                transition: { duration: 0.2, ease: 'easeOut' }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Add to cart
                                        </motion.span>
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home