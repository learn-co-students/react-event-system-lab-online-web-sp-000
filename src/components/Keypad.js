// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    handleTyping = () => {
        console.log("Entering password...")
    }

    render() {
        return <input onKeyUp={this.handleTyping} type="password"></input>
    }
}

export default Keypad