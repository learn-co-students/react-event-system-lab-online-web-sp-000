// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  handleFocus = () => console.log('Good!')

  handleOnBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleOnBlur} ></button>
    )
  }
}