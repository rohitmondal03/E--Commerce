import React from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <nav className='nav bg-amber-100 flex flex-row items-center justify-between px-56 py-8'>
            <div className='logo_name'>
                <h1 className='text-5xl font-bold'>E-Com.</h1>
            </div>

            <div className='nav_links text-2xl w-80 flex flex-row justify-around'>
                <Link className='transition duration-300 hover:scale-110 hover:font-bold' to='/'>
                    <h4 className=''>home</h4>
                </Link>

                <Link className='transition duration-300 hover:scale-110 hover:font-bold' to='/cart'>
                    <h4 className=''>cart</h4>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar