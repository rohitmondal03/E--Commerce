import React, { useEffect, useState } from 'react'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { North } from '@mui/icons-material';


const ScrolltopBtn = () => {
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 300
                ? setScrollToTop(true)
                : setScrollToTop(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }


    const buttonStyle = {
        position: 'fixed',
        bottom: '1rem',
        right: '2rem',
        height: '40px',
        width: '40px',
        color: 'white',
        padding: '.2rem .5rem',
        border: '1px solid black',
        borderRadius: '10px',
    }


    return (
        <>
            {scrollToTop
                && (
                    <North
                        onClick={scrollUp}
                        style={buttonStyle}
                        className='bg-zinc-800'
                    />
                )
            }
        </>
    )
}

export default ScrolltopBtn