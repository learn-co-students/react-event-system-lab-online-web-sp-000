import React, { Component } from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {

  focus = () => (console.log('Good!'))
  blur = () => (console.log('Hey! Eyes on me!'))

  render() {
    return(
      <button onFocus={this.focus} onBlur={this.blur} type="button" name="button"></button>
    )
  }
}