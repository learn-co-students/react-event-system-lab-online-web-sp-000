import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusmsg = () => {
    console.log('Good!')
 }

  blurmsg = () => {
   console.log('Hey! Eyes on me!')
}


  render() {
    return (
      <p>
      <button
        onFocus = {this.focusmsg}
        onBlur = {this.blurmsg}
      />
      </p>
    )
  }
}
