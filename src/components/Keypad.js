import React, { Component } from 'react';

class Keypad extends React.Component {
    
    keyUpEvent = () => {
        console.log("Entering password...")
    }


    render() {
        return (
            <div>
                <input onKeyUp={this.keyUpEvent} type="password">Password:</input>
            </div>
        )
    }
}

export default Keypad;