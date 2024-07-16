
import React from 'react'

const ProductCard = ({showPrice, data}) => {
  return (
    <div className='flex flex-col gap-2 w-[200px] m-5'>
        <div className='h-[270px] w-[200px] bg-gray-100 flex justify-center items-center rounded border'>
            <img className="h-[200px] w-[160px] object-contain" src={data?.product_photo} alt="product photo" />
        </div>
        <p className='px-2 text-center font-sans font-semibold '>{data?.product_title.split(" ").slice(0,3).join(" ")}</p>
        {showPrice && <p className='text-[0.7rem] font-medium text-gray-600 flex gap-2 items-center justify-center'> <span className='line-through'>{data?.product_original_price}</span> <span>{data?.product_price}</span></p>}
    </div>
  )
}

export default ProductCard