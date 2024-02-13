import React, { useState } from "react";
import "../App.css"

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
        <div className="functioncompo">
        <h3 className="head">functional compo </h3>
        <h4>welcome {props.name}</h4>
        <h3 className="inner">counter value:<span>{counter}</span></h3>
        <button onClick={increment} className="incre">Increase Value</button>
        <button onClick={decrement} className="decre">Decrement value</button>
        </div>
    )
}
export default Functioncompo;