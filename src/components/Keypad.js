// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    render(){
        const handleKeyUp = () => {
            console.log('Entering password...')
        }

        return(
            <input onKeyUp={handleKeyUp} type="password" />
        )
    }
}