import React, { useContext } from 'react'

// COMPONENTS
import { CartContext } from '../Context/Context'
import Navbar from '../components/Navbar';

const Cart = () => {

  const globalState = useContext(CartContext);
  const state = globalState.state
  const dispatch = globalState.dispatch
  console.log(state);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)



  return (
    <>

      <Navbar />

      {state.length > 0
        ?
        (
          <div className='flex flex-col flex-wrap items-center justify-evenly'>
            {state.map((data, index) =>
              <div
                key={data.id}
                className='flex flex-row justify-between items-center basis-1/4 grow rounded-xl my-12 mx-1 py-3 px-7 text-center w-4/5'
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className='h-44 w-44'
                />

                <p className='text-xl w-96'>{data.title}</p>
                <p className='text-2xl px-2 py-1 font-semibold border-2 border-zinc-400 rounded-lg'>$ {data.quantity * data.price}</p>

                <div className='quantity flex flex-col items-center justify-between'>
                  <button
                    className='border-2 border-black px-2 text-xl font-bold rounded-full'
                    onClick={() => { dispatch({ type: 'INCREASE', payload: data }) }}
                  >
                    +
                  </button>

                  <p className='font-bold text-xl my-2'>{data.quantity}</p>

                  <button
                    className='border-2 border-black px-2 text-xl font-bold rounded-full'
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
                  className='bg-gradient-to-r from-red-600 to-orange-400 text-white border border-black rounded-xl px-3 py-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gradient-to-t hover:shadow-xl hover:shadow-zinc-400'
                  onClick={() => { dispatch({ type: 'REMOVE', payload: data }) }}
                >
                  Remove from cart
                </h2>
              </div>
            )}

            {state.length > 0
              &&
              (
                <>
                  <div className='h-1 w-full bg-zinc-700 mb-5' />

                  <div className='border-2 border-zinc-400 px-5 py-2 mb-8 flex'>
                    <h2 className='text-xl'>Total Amount: <span className='text-2xl font-bold underline'>$ {total}</span> </h2>
                  </div>
                </>
              )
            }
          </div>
        )
        :
        (
          <div className='flex flex-col justify-center items-center'>
            <div className="loader"></div>

            <div className='text-center font-bold text-6xl m-auto'>No items in cart ...</div>
          </div>
        )
      }

    </>
  )
}

export default Cart