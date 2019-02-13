// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusEvent = () => {
    console.log("Good!")
  }

  onblurevent = () => {
    console.log("Hey! Eyes on me!")
  }


  render() {
    return (
      <div>
        <button  onBlur ={this.onblurevent} onFocus={this.focusEvent}>Submit</button>
      </div>
    );
  }

}

export default EyesOnMe;
