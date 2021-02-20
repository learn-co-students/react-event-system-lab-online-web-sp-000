// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  constructor() {
    super()
  }

  handleButton = () => {
    console.log("Good!")
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <div>
        <button onFocus={this.handleButton} onBlur={this.handleBlur}></button>
      </div>
    )

  }

}
