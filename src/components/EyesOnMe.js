import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  handleOnBlur = event => console.log('Hey! Eyes on me!');

  handleOnFocus = event => console.log('Good!');

  render() {
    return(
      <button onBlur={this.handleOnBlur} onFocus={this.handleOnFocus} />
    )
  }
}