import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  whenFocus = () => {
    console.log('Good!');
  }

  whenBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <button onFocus={this.whenFocus} onBlur={this.whenBlur}>This is a button</button>
      </div>
    )
  }

}
