// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    logConsole = () => { console.log('Entering password...')}

    render() {
        return(
            <div>
                <input type="password" onKeyUp={this.logConsole}/>
            </div>
        )    
    }
}

export default Keypad;