import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function Header() {
  const[toggle,setToggle]=useState(false);
  return (
    <header className='w-full'>
        <nav className='flex  md:justify-evenly justify-between items-center text-lg w-full 
        h-16 bg-yellow-500 shadow-lg fixed top-0 z-50'>
            <div className='w-72 h-12 justify-center md:flex hidden items-center  bg-teal-600'>
                <Link to=''>
                    <img src='logo.png' className='h-10 w-32 '/>
                </Link>
 
            </div>
           
            <div className='w-12 md:w-[37rem]  h-12   bg-orange-500'>
              {
                toggle ?
                <IoCloseCircle onClick={()=>setToggle(!toggle)} className='text-5xl md:hidden block' />
                :
                <FaBars onClick={()=>setToggle(!toggle)} className='text-5xl md:hidden block'/>
              }
              <ul className=' hidden md:flex justify-evenly items-center h-12 text-lg'>
                <li >
                  <NavLink to='' className={({isActive})=>
                  `${isActive ? 'text-blue-700':'text-gray-300'}
                 hover:bg-yellow-300 p-1  `}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={({isActive})=>
                  `${isActive ? 'text-blue-600':'text-gray-300'}
                 hover:bg-yellow-300 p-1 `}
                  >About</NavLink>
                </li>
                <li>
                  <NavLink to='/service' className={({isActive})=>
                 `${isActive ? 'text-blue-600':'text-gray-300'}
                 hover:bg-yellow-300 p-1 `}
                  >Service</NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className={({isActive})=>
                 `${isActive ? 'text-blue-600':'text-gray-300'}
                 hover:bg-yellow-300 p-1 `}>Contact</NavLink>  
                </li>
                <li>
                  <NavLink to='/emplist' className={({isActive})=>
                 `${isActive ? 'text-blue-600':'text-gray-300'}
                 hover:bg-yellow-300 p-1 `}>Emplist</NavLink>  
                </li>
              </ul>    

               {/*responsive  */}

               <ul className={` duration-300 md:hidden gap-4 h-40 w-full fixed top-16 ${toggle ? 'left-[0]' : 'left-[-100%]'} bg-red-300`}>
                <li >
                  <NavLink to='' className={({isActive})=>
                  `${isActive ? 'text-pink-600':'text-green-300'}
                 hover:bg-yellow-300  `}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={({isActive})=>
                  `${isActive ? 'text-pink-600':'text-green-300'}
                 hover:bg-yellow-300  `}
                  >About</NavLink>
                </li>
                <li>
                  <NavLink to='/service' className={({isActive})=>
                 `${isActive ? 'text-pink-600':'text-green-300'}
                 hover:bg-yellow-300 `}
                  >Service</NavLink>
                </li>
                <li>
                  <NavLink to='/contact' className={({isActive})=>
                 `${isActive ? 'text-pink-600':'text-green-300'}
                 hover:bg-yellow-300 `}>Contact</NavLink>  
                </li>
                <li>
                  <NavLink to='/emplist' className={({isActive})=>
                 `${isActive ? 'text-pink-600':'text-green-300'}
                 hover:bg-yellow-300 p-1 `}>Emplist</NavLink>  
                </li>
              </ul>    

            </div>
            <div className='w-72 md:w-96 h-12 flex bg-red-500 p-2'>
              <input type='text' placeholder='enter' className={`w-64 md:w-80 h-8 rounded-2xl pl-4`}/>
              <button className='w-8 h-8  border-solid border-2 border-indigo-600 rounded-full text-[25px] ml-2'><FaSearch /></button>
                


            </div>
        </nav>
    </header>
  )
}

export default Header
