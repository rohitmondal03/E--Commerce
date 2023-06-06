import React, { useEffect, useState } from 'react'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


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



    return (
        <>
            {scrollToTop
                && (
                    <KeyboardArrowUpIcon
                        onClick={scrollUp}
                        className='fixed bottom-4 right-8 h-24 w-24 text-3xl text-white py-3 px-1 border-2 border-black'
                    />
                )
            }
        </>
    )
}

export default ScrolltopBtn