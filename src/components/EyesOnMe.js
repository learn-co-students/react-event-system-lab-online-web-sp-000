// Code EyesOnMe Component Here
import React, { Component } from 'react'

  class EyesOnMe extends Component {

    pleaseFocus = () => console.log('Good!')

    pleaseBlur = () => console.log('Hey! Eyes on me!')

    render () {
      return (
          <button onFocus={this.pleaseFocus} onBlur={this.pleaseBlur}>
          </button>
      )
    }
  }

export default EyesOnMe