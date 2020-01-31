// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleKeyUp() {
        console.log("Entering Password...")
    }

    render() {
        return (
            <input
                type="password"
                onKeyUp={() => console.log("Entering password...")} />
        )
    }
}

// why doesn't this work?
// onKeyUp={this.handleKeyUp} />
