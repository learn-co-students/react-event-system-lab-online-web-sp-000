// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {
    //start here
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            //start here
            <div>
                <input type ="password" onKeyUp={this.handleKeyUp}></input>
            </div>
        )
    }
}
export default Keypad
