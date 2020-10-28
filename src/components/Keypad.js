// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component{

    
    passwordHandler = (event) => {
        console.log("Entering password...");
    }

    render () {
        return (<form>
            <input type="password" id="password" onKeyUp={this.passwordHandler}></input>
        </form>)
    }
}