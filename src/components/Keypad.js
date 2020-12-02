import React, { Component } from 'react'

export default class Keypad extends Component {
    cOutput = () => {
        console.log('Entering password...')
    }
    
    render() {

        return (
            <div>
                <input onKeyUp={this.cOutput} type="password"></input>
            </div>
        )
    }
}

