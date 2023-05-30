import React, { useEffect, useState } from 'react'

// COMPONENTS
import Navbar from '../components/Navbar'
import Card from '../components/ProductsCard'


const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getProductsData() {
            const getData = await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setData(json))
        }

        getProductsData();
    })


    return (
        <>
            <Navbar />

            <div className='px-2 flex flex-row flex-wrap'>
                {data.map(productData => (
                    <Card
                        id={productData.id}
                        imgSrc={productData.image}
                        category={productData.category}
                        title={productData.title}
                        desc={productData.description}
                        rate={productData.rating.rate}
                        count={productData.rating.count}
                        price={productData.price}
                    />
                ))}
            </div>
        </>
    )
}

export default Home