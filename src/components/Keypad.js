// Code Keypad Component Here
import React, {Component} from "react";

export default class Keypad extends Component{ 

    handleKeys = () => {
        console.log("Entering password...")
    }

    
    render(){
        return(
            <input onKeyUp={this.handleKeys} type="password"></input>
        )
    }

}
