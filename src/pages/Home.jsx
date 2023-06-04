import React, { useEffect, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';

// COMPONENTS
import Navbar from '../components/Navbar'
import HeroSec from '../components/HeroSec';
import { CartContext } from '../Context/Context';


// MATERIAL UI 
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// FRAMER MOTION 
import { motion } from "framer-motion";

import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

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
    console.log(globalState)
    const dispatch = globalState.dispatch


    return (
        <>
            <Navbar />

            <HeroSec />



            {/* Shopping Items */}


            <div className='flex flex-row grow flex-wrap'>
                {data.map(productData => {
                    productData.quantity = 1;

                    return (
                        <div
                            key={productData.id}
                            className='products_card border-2 rounded-2xl my-10 py-5 px-3 mx-5 flex flex-col grow basis-1/4 justify-evenly shadow-xl'
                        >
                            <div className='products_img'>
                                <img
                                    src={productData.image}
                                    alt={productData.category}
                                    className='h-48 mx-auto'
                                />
                            </div>

                            <div className='products_text text-center mt-5'>
                                <p className='text-2xl'>{productData.title}</p>

                                <p className='text-xl'>
                                    <span className='border-2 border-green-600 font-bold py-1 px-3 rounded-xl mr-5'>{productData.rating.rate} <StarIcon fontSize='small' className='mb-1 ml-1' /></span>

                                    <span className='italic font-semibold'>({productData.rating.count} reviews)</span>
                                </p>

                                <p className='text-xl flex flex-row justify-between items-center'>
                                    <span className='text-2xl font-extrabold'>$. {productData.price}</span>

                                    <motion.span
                                        className='relative text-sm text-white bg-red-600 py-2 px-4 rounded-xl cursor-pointer'
                                        onClick={() => {
                                            dispatch({ type: 'ADD', payload: productData });
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.3, ease: 'easeOut' }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Add to cart
                                    </motion.span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home