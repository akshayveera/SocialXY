
import React from 'react'

const Navbar = () => {

    const icons = ["https://cdn-icons-png.flaticon.com/128/15678/15678795.png","https://cdn-icons-png.flaticon.com/128/3602/3602145.png", "https://cdn-icons-png.flaticon.com/128/4308/4308487.png"];

  return (
    <nav className='flex justify-between items-center py-10 px-20'>
        <img className='h-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KFlumAEA8MB1s-6eQlXRZArJ89f9LMQ5-Q&s" alt="search logo" />

        <ul className='font-light flex gap-5 items-center '>
            <li>SHOP </li>
            <li>ESSENTIALS </li>
            <li><div className='flex flex-col text-red-600 font-bold'><p>Macc</p><p>Essentials</p></div></li>
            <li>BEST SELLER </li>
            <li>ABOUT US</li>
        </ul>

        <ul className='flex gap-7'>
            {icons.map((item, idx)=>(
                <li key={idx}><img className='h-5' src={item} alt="" /></li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar