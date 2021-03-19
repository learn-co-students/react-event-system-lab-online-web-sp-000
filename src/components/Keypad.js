// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    render(){
        pwUpdate = () => {
            console.log('Entering password...')
        }

        return(
            <input onKeyUp={this.pwUpdate} type="password" />
        )
    }
}