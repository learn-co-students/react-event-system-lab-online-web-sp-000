import React from 'react';

class EyesOnMe extends React.Component {

    handleOnFocus(){
        return console.log('Good!')
    }

    handleOnBlur(){
        return console.log('Hey! Eyes on me!')
    }



  render() {
    return (
      <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>
        
      </button>
    )
  }
}

export default EyesOnMe;