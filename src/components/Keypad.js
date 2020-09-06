// Code Keypad Component Here
import React, { Component }from 'react';

class Keypad extends Component {
    render = () => <input onKeyUp={() =>{ console.log('Entering password...')}} type="password"></input >
}

export default Keypad;