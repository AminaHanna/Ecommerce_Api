import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDetails() {
    const {id} = useParams();
    const {state} = useLocation();

    const item = state;
  return (
    <>
    <div className="flex justify-center">
     <div className="m-5 w-[400px] text-center p-5">
        <img src={item.images} alt="" className='bg-slate-100 w-[400px] h-[400px]' />
        <p className='text-xl'>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <div className="m-3">
          <button type='button' className='py-1 bg-slate-400 px-4 rounded'> ADD TO CART</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductDetails
