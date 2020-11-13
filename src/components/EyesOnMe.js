// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  // constructor() {
  //   super()
  //   this.state = {
  //     c\
  //   }
  // }

  focus = () => {
    console.log("Good!")
  }

  blur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>Test Me</button>
    )
  }
  
}