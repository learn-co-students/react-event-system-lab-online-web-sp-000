import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  myBlurFunction = () => {
    console.log('Hey! Eyes on me!')
  }

  myFocusFunction = () => {
    console.log('Good!')
  }

  render() {
    return (
      <button onBlur={this.myBlurFunction} onFocus={this.myFocusFunction}>My Button</button>
    )
  }

}
