// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  
  //constructor(props) {
  //  super()
  //  this.state = {
  //    color: this.props.color
  //  }
  //}
  
  handleClick = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.handleClick} type='password'></input>
        //<div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      //</div>
    )
  }
  
}