import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  printFocus = () => (
    console.log('Good!')
  )

  printBlur = () => (
    console.log('Hey! Eyes on me!')
  )

  render() {
    return(
      <button onFocus={this.printFocus} onBlur={this.printBlur}></button>
    )
  }

}
