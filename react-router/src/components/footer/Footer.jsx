import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-pink-500'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6'>
            <span className='text-sm text-white '> © 2023
            <Link to="https://www.google.com">Google
            </Link>
            . All Rights Reserved.
            </span>
            <div className='className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"'>
                <Link to="">

                </Link>
            </div>

        </div>
    </footer>
  )
}

export default Footer
