// Code Keypad Component Here
import React from 'react'


export default class Keypad extends React.Component{
//    constructor(props){
//        super(props)
//    }

    keyUpHandler = () =>{
        console.log("Entering password...")
    }


    render(){
        return(
       <input className="keypad" type="password" onKeyUp={this.keyUpHandler}></input>
        )
    }

}