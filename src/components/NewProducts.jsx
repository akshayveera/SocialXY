
import React from 'react'
import { PRODUCTS_URL, data } from './constants';
import ProductCard from './ProductCard';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import dynamic from 'next/dynamic';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

const NewProducts = () => {

    // const item = data?.data?.products[0];
    // console.log("info", item);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (  
    <section className='flex flex-col items-center p-20'>
        <h1 className='flex gap-2'><span className='text-2xl font-bold text-red-600'>NEW</span><span className='text-2xl font-bold text-blue-900'>PRODUCTS</span></h1>

        <ul className='flex flex-wrap '>
            {
                data?.data?.products?.map((item)=>(<ProductCard key={item?.asin} data={item} showPrice={true}/>))
            }
        </ul>

        {/* <Carousel responsive={responsive}>
            {
                data?.data?.products?.map((item)=>(<ProductCard data={item} showPrice={false}/>))
            }            
        </Carousel> */}
    </section>
  )
}

export default NewProducts