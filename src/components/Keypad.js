// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    entering = () => {
        console.log('Entering password...')
    }
    render() {
        return (
            <input onKeyUp={this.entering} type="password" />
        )
    }
}

export default Keypad
