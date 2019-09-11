import React from 'react'

class Keypad extends React.Component {

  handleClicked = () => {
    console.log("Entering password...")
  }
  render(){
    return (
      <input type="password" onKeyUp={this.handleClicked}/>
    )
  }

}
export default Keypad
