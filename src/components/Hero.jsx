
import React from 'react'

const Hero = () => {
  return (
    <article className='bg-gray-100 flex justify-evenly items-center p-20'>
        <section className='w-[40%] flex flex-col gap-5 items-start'>
            <h1 className='text-blue-900 text-5xl font-semibold'>PROVIDING SERVICES AT YOUR DOOR STEP</h1>

            <p className='font-light text-gray-500'> <span className='font-semibold '>MACC Essentials</span> has an important role in making supplies and servies availabe to cosumer and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much as we can.</p>

            <button className='bg-red-600 text-white font-bold text-sm px-10 py-2 shadow-md'>LEARN MORE</button>
        </section>

        <section className='w-[50%] h-[400px]' >
            <img className="w-full h-full rounded-lg object-cover object-left" src="https://static.vecteezy.com/system/resources/previews/005/131/334/non_2x/an-asian-delivery-man-is-wearing-face-mask-holding-grocery-bag-safety-home-delivery-concept-free-photo.jpg" alt="img" />
        </section>
    </article>
  )
}

export default Hero