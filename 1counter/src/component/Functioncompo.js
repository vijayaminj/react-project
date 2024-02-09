import React, { useState } from "react";

function Functioncompo(props){
    const[counter,setCounter]=useState(5);

    const increment=()=>{
        if(counter<25){
            setCounter(counter+1);
            console.log(counter);
        }
    }

    const decrement=()=>{
        if(counter>0){
            setCounter(counter-1);
            console.log(counter);

        }
    }







    return(
        <>
        <h3>functional compo </h3>
        <h4>welcome {props.name}</h4>
        <h3>counter value:{counter}</h3>
        <button onClick={increment}>Increase Value</button>
        <button onClick={decrement}>Decrement value</button>
        </>
    )
}
export default Functioncompo;