import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav flex flex-row items-center justify-between px-56 py-10'>
            <div className='logo_name'>
                <h1 className='text-4xl font-bold'>E-Commerce</h1>
            </div>

            <div className='cart_link'>
                <Link to='/cart'>
                    <h4 className='text-2xl'>Cart</h4>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar