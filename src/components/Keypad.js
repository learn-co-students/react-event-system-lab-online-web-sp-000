import React, {Component} from 'react';

export default class Keypad extends Component {

    Keypad = () => {
        console.log('Entering password...')
    }
    render () {
return (
    <div>
    <input type ='password' ref = 'login' onKeyUp={this.Keypad}/>
    </div>
)
    }
}
