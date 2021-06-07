// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    constructor(props) {
        super()
        this.state = {
          
        } 
      }
      onKeyUp(event) {
          console.log('Entering password...')
        // if (event.charCode === 13) {
        //   this.setState({ inputValue: event.target.value });
        // }
      }


      render() {
        return (
          <div>
             <input onKeyUp={this.onKeyUp} type="password" />
          </div>
        )
      }
      

  
}