// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  HandlerFocus = () => console.log('Good!')

  HandlerBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.HandlerFocus} onBlur={this.HandlerBlur}>Eyes on me, please!</button>
    )
  }
}
