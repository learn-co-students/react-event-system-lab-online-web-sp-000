import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  constructor(props) {
      super()
  }

  onFocus = (event) => {
    console.log('Good!');
  }

  onBlur = (event) => {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>Focus</button>
    )
  }


}
