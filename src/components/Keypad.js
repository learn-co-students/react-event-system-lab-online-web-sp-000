import React, { Component } from 'react';
export default class Keypad extends Component {
    constructor(props) {
        super();
    }

    onKeyUp(e) {
        console.log('Entering password...')
    }

    render() {
        return <input onKeyUp={this.onKeyUp} type='password' />
    }
}
