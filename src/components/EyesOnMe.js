// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

divaBlur = () => {
  console.log('Hey! Eyes on me!')
}

divaFocus = () => {
  console.log('Good!')
}

  render() {
    return (
      <button onBlur={this.divaBlur} onFocus={this.divaFocus} />
    )
  }
}
