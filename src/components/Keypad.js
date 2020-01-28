import React, { Component } from "react";

// Code Keypad Component Here
export default class Keypad extends Component {


    handleKeyUp = () =>{
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.handleKeyUp}></input>
            </div>
        )
    }
}
