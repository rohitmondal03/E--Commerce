import React, { useEffect, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';

// COMPONENTS
import Navbar from '../components/Navbar'
import { CartContext } from '../Context/Context';


// MATERIAL UI 
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Home = () => {

    const navigate = useNavigate();

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

            <div className='flex flex-row grow flex-wrap'>
                {data.map(productData => {

                    productData.quantity = 1;

                    return (
                        <div
                            key={productData.id}
                            className='products_card border-2 border-zinc-500 rounded-2xl my-5 py-5 px-7 mx-1 flex flex-col grow basis-1/4 justify-evenly cursor-pointer'
                        >
                            <div className='products_img'>
                                <img
                                    src={productData.image}
                                    alt={productData.category}
                                    className='h-56 mx-auto'
                                />
                            </div>

                            <div className='products_text text-center mt-10'>
                                <p className='text-3xl font-bold'>{productData.title}</p>

                                <p className='text-xl'>
                                    <span className='border py-1 px-3 rounded-xl bg-green-500 mr-5'>{productData.rating.rate} <StarIcon fontSize='medium' className='mb-1' /></span>

                                    <span>({productData.rating.count})</span>
                                </p>

                                <p className='text-2xl flex flex-row justify-between items-center'>
                                    <span className='font-bold'>${productData.price}</span>
                                    <span
                                        className='cart_img relative bg-zinc-200 py-2 px-4 rounded-xl cursor-pointer'
                                        onClick={() => {
                                            dispatch({ type: 'ADD', payload: productData });
                                        }}
                                    >
                                        <ShoppingCartIcon fontSize='large' />
                                    </span>
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