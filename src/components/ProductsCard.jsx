import React from 'react'

// MATERIAL UI 
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductsCard = (props) => {
  return (
    <div key={props.id} className='products_card border-2 border-zinc-500 rounded-2xl my-5 mx-auto py-5 px-7 flex flex-col basis-1/3 justify-evenly'>
      <div className='products_img'>
        <img
          src={props.imgSrc}
          alt={props.category}
          className='h-56 mx-auto'
        />
      </div>

      <div className='products_text text-center mt-10'>
        <p className='text-3xl font-bold'>{props.title}</p>

        {/* <p className='italic'>"{props.desc}"</p> */}

        <p className='text-xl'>
          <span className='border py-1 px-3 rounded-xl bg-green-500 mr-5'>{props.rate} <StarIcon fontSize='medium' className='mb-1' /></span>

          <span>({props.count})</span>
        </p>

        <p className='text-2xl flex flex-row justify-between items-center'>
          <span className='font-bold'>${props.price}</span>
          <span className='cart_img relative bg-zinc-200 py-2 px-4 rounded-xl cursor-pointer'><ShoppingCartIcon fontSize='large' /></span>
        </p>
      </div>
    </div>
  )
}

export default ProductsCard