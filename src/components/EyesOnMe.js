// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  constructor () {
    super ()
    this.focusHandler = this.focusHandler.bind(this)
    // binding at its finest!
  }

  focusHandler() {
    console.log('Good!')
    console.log(this)
  }

  blurHandler = () => {
    return console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}>I am the button!</button>
    )
  }
}
