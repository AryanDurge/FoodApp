import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const[nav,setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
        <div className='py-3 px-5 sm:px-4 md:px-6 lg:px-10'>
            <div className='container flex items-center justify-evenly'>
                <img src={logo} alt="" className='h-14 cursor-pointer'/>
                <div className='lg:flex hidden gap-10 items-center justify-center'>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Today Special</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Why Food Hunt</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Our Menu</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Add Food</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Popular Food</a>
                    <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-ul font-medium text-white'>login</button>
                </div>
                <div className='lg:hidden z-40' onClick={handleNav}>
                    {
                        nav ? (<RxCross2 size={25} className='text-[#191919] cursor-pointer' />) :(<TiThMenu className='text-red-500 cursor-pointer' size={25} />)
                    }
                </div>
            </div>

            <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>
                <div className="flex flex-col gap-8 items-center">
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Toda Special</a>
                    <a href="" className="text-[#191919] text-x1 font-medium hover:text-red-500">foodHunt</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Our Menu</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Add Food</a>
                    <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Popular Food</a>
                    <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-ul font-medium text-white'>login</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar