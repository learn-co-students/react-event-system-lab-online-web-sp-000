// Code Keypad Component Here
import React from 'react';
class Keypad extends React.Component {

    consoleMessage = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.consoleMessage}type="password" />
        )
    }
}

export default Keypad;