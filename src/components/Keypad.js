import React from 'react'

export default class Keypad extends React.Component{
    constructor() {
        super()
    }

    handleInputPassword = () => console.log('Entering password...')


    render() {
        return (
            <input onKeyUp={this.handleInputPassword} type="password"></input>
        )
    }
}
