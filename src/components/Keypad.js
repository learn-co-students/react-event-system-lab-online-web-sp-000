import React, { Component } from 'react';

class Keypad extends Component {
    handleInput = (event) => {
        console.log("Entering password...");
     }
  
     render() { 
        return (
           <div>
              <input type="password" onKeyUp={this.handleInput} name="pwd" id="pwd" />
           </div> 
        );
     }

}
 
export default Keypad;