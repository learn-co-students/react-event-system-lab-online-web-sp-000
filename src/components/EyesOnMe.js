// Code EyesOnMe Component Here
import React, { Component } from 'react'

 class EyesOnMeComponent extends Component {

     goodPrinter = () => {
        console.log('Good!')
      }

       eyesPrinter = () => {
        console.log('Hey! Eyes on me!')
      }
    render() {
      return (
        <button onFocus={this.goodPrinter} onBlur={this.eyesPrinter}>
        Button
      </button>
      );
    }
  }

   export default EyesOnMeComponent; 
