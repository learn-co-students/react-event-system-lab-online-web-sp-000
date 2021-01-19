// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

	callback() {
		console.log('Entering password...')
	}

	render() {
		return (<input onKeyUp={this.callback} type="password" name="" id="" />)
	}
}

export default Keypad;