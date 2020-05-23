// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    this.name = 'name';
  }

  handleOnFocus = () => console.log('Good!')
  
  handleOnBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (<div><button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button></div>)
  }
}

export default EyesOnMe;