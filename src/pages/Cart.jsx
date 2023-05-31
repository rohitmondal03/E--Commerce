import React, { useContext } from 'react'

// COMPONENTS
import { CartContext } from '../Context/Context'
import Navbar from '../components/Navbar';

const Cart = () => {

  const globalState = useContext(CartContext);
  const state = globalState.state
  const dispatch = globalState.dispatch

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)


  return (
    <>

      <Navbar />

      <div className='flex flex-col flex-wrap items-center justify-evenly'>
        {state.map((data, index) =>
          <div
            key={data.id}
            className='flex flex-col justify-center items-center basis-1/4 grow border-2 border-black rounded-xl my-5 mx-1 py-3 px-7 text-center'
          >
            <img
              src={data.image}
              alt={data.title}
              className='h-56 w-56 mx-auto'
            />

            <p className='font-bold text-2xl'>{data.title}</p>
            <p className='text-2xl my-5 font-semibold'>$ {data.quantity * data.price}</p>

            <div className='quantity'>
              <button
                className='border-2 border-black rounded-sm px-2 text-xl font-bold'
                onClick={() => { dispatch({ type: 'INCREASE', payload: data }) }}
              >
                +
              </button>

              <p className='font-bold text-xl'>{data.quantity}</p>

              <button
                className='border-2 border-black rounded-sm px-2 text-xl font-bold'
                onClick={() => {
                  if (data.quantity > 1) {
                    dispatch({ type: 'DECREASE', payload: data });
                  } else {
                    dispatch({ type: 'REMOVE', payload: data });
                  }
                }}
              >
                -
              </button>
            </div>

            <h2
              className='border-2 border-black rounded-sm px-2 text-xl font-bold mt-5 cursor-pointer'
              onClick={() => { dispatch({ type: 'REMOVE', payload: data }) }}
            >
              x
            </h2>
          </div>
        )}

        {state.length > 0
          &&
          (
            <>
              <div className='h-1 w-full bg-zinc-700 mb-5' />
              <div className='border-2 border-zinc-400 px-5 py-2 flex'>
                <h2>Total Amount: $<span className='text-xl font-bold'>{total}</span> </h2>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Cart