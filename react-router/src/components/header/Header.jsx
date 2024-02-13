import React from 'react';
import { Link,NavLink } from "react-router-dom";

function Header() {
  return (
    <header className='shadow sticky top-0 z-50'>
        <nav className='bg-white border-gray-200 px-4 '>
            <div className='flex flex-wrap justify-between items-center mx-auto'>
                <Link to='/' className='flex items-center'>
                    Logo
                </Link>
                <div className='flex items-center '>
                    <Link to="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                        Login
                    
                    </Link>
                    <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                        Get stated
                    
                    </Link>
                </div>
                <div className='justify-between items-center w-full'>
                    <ul className='flex flex-col mt-4 font-medium'>
                        <li>
                            <NavLink to='/'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                     ${isActive ? "text-orange-700": "text-gray-700"}
                                      border-b border-gray-100 hover:bg-gray-50  hover:text-orange-700 `
                                    }
                                >
                                    Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/about'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200
                                     ${isActive ? "text-orange-700": "text-gray-700"}
                                      border-b border-gray-100 hover:bg-gray-50  hover:text-orange-700 `
                                    }
                                >
                                    Home
                            </NavLink>
                        </li>
                    </ul>

                </div>


            </div>

        </nav>

    </header>
    
      
    
  )
}

export default Header
