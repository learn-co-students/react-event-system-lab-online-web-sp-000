// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    pad = () => {
        console.log('Entering password...')
    }

    render() {
        return (<input onKeyUp={this.pad} type="password" />)
    }
}