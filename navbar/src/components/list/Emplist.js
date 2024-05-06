import React, { useEffect, useState } from 'react'

export default function Emplist() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(val=>{
            setData(val);
            console.log(val)
            
        })
    },[])
  return (
    <div className='mt-64 md:mt-16 '>
        <h1 className='text-3xl'>User list from Api</h1>
        <div className='w-full h-full lg:h-96 border-2  border-lime-700 flex justify-around items-center gap-4 flex-wrap'>
           {
            data.map((emp)=>{
                // console.log(emp);
                return <div key={emp.id} className='w-64 h-20 border-2 border-red-800'>
                    <h1>Name:{emp.name}</h1>
                    <p>Email:{emp.email}</p>
                    <p>Address:{emp.address.city}</p>
                </div>
            })
           }

        </div>
      
    </div>
  )
}
