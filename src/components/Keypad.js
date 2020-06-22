import React, { Component } from 'react';

export default class KeyPad extends Component {

    handlePassword() {
        console.log("Entering password...")
    }

    render() {
        return (
        <div>
            <input onKeyUp={this.handlePassword} type="password" />
        </div>
        )
    }
}