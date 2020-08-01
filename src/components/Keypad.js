import React from 'react'

class Keypad extends React.Component {
    handlePassword = () => {
        console.log("Entering password...")
    }
    
    render() {
        return (
            <input onKeyUp={this.handlePassword} type="password" />
        )
    }
}

export default Keypad
