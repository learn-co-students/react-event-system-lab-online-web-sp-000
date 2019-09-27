// Code Keypad Component Here

import React from 'react';

class Keypad extends React.Component {
    
    handleInputPassword = () => {console.log('Entering password...')}

    render() {
        return (
            <div>
                <label for="pass">Password (8 characters minimum):</label>
                <input type="password" onKeyUp={this.handleInputPassword}  id="pass" name="password"></input>
            </div>
        )
    }

}// end 

export default Keypad;

