
import React, { Component } from 'react';

export default class Keypad extends Component {

    keyhandler = () => console.log("Entering password...")
 
    render(){
        return(
            <input onKeyUp={this.keyhandler} type="password" ></input>
        )
    }
}