import React, { useState } from 'react'

function Map() {
    const[count,setCount]=useState([]);

    const handler=()=>{
        setCount([...count,{
            id:count.length,
            value:Math.floor(Math.random()*10)
        }])
    }
  return (
    <div>
        <button onClick={handler}>click</button>
      <ul>
        {count.map((item)=>{
            return <li key={item.value}>{item.value}</li>
        })}
        
      </ul>  
      
    </div>
  )
}

export default Map
