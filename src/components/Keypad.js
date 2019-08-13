import React, {Component} from 'react';

export default class Keypad extends Component {
  constructor(props){
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e){
    console.log("Entering password...")
  }

  render(){
    return(
      <div>
        <label>
          Enter Password:
          <input type="password" onKeyUp={this.handleKeyUp}/>
        </label>
      </div>
    )
  }

}
