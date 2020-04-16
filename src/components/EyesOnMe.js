// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  //constructor(props) {
  //  super()
  //  this.state = {
  //    color: this.props.color
  //  }
  //}
  
  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
        //<div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      //</div>
    )
  }
  
}