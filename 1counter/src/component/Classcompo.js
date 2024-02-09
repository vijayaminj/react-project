import React from "react";

class Classcompo extends React.Component{
    constructor(){
        super();
        this.state={count:5}
    }

    increment=()=>{
        if(this.state.count<25){
            this.setState({
                count:this.state.count+1
            })
        }
        
    }

    decrement=()=>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })
        }
        
    }
    render(){
        return(
            <div className="fun">
            <h3>This is Class component </h3>
            <h4>welcome {this.props.name}</h4>
            <h3 className="inner">counter value:<span>{this.state.count}</span></h3>
            <button onClick={this.increment} className="incre">Increase Value</button>
            <button onClick={this.decrement} className="decre">Decrement value</button>
            </div>
        )
    }
}
export default Classcompo;