// Code KeyPad Component Here
import React, { Component } from "react";

class KeyPad extends Component {
	
	keyUpHandler = () => {
		console.log("Entering password...")
	}

	render() {
		return (
			<input onKeyUp={this.keyUpHandler} type="password"/>
		)
	}
}


export default KeyPad
