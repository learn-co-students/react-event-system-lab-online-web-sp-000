// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  scold = () => {
    console.log('Hey! Eyes on me!')
  }

  compliment = () => {
    console.log('Good!')
  }
    render() {
        return (
            <button onBlur={this.scold} onFocus={this.compliment}>

            </button>
        );
    }
}
