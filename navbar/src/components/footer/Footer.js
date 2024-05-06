import React from 'react';
import { FaInstagramSquare,FaLinkedin,FaGithub,FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-blue-300 h-10 fixed bottom-0 w-full flex justify-between'>
      <div className='w-48 ' >
        
      
      </div>
      <div className='w-72 flex justify-evenly items-center text-2xl'>
        <NavLink to="" className={`text-purple-700 `}>
          <FaInstagramSquare />
        </NavLink>
        <NavLink>
          <FaLinkedin  className={`text-blue-700`}/>
        </NavLink>
        <NavLink>
          <FaGithub className={`text-black`}/>
        </NavLink>
        <NavLink>
          <FaFacebook className={`text-blue-800`}/>
        </NavLink>
        <NavLink>
          <FaSquareTwitter className={`text-blue-800`} />
        </NavLink>
     
      </div>      
    </footer>
  )
}

export default Footer;
