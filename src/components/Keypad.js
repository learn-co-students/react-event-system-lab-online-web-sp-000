import React, {Component} from 'react';

export default class Keypad extends Component {
    
    
    handleKeyEvent = () => {
        console.log("Entering password...")

    }

    render() {
        return <input onKeyUp={this.handleKeyEvent} type="password"></input>
    }
}