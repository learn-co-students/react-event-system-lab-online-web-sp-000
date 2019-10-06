// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  focusEvent = (e) => {
    console.log("Good!")
  }

  blurEvent = (e) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Hi</button>
    )
  }

}
