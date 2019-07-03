import React from 'react';

export default class Keypad extends React.Component {

  constructor() {
      super();
      this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'Entering password...');
    }

  keyUpHandler(refName, e) {
        console.log(refName);
    }

  render() {
     return (
       <div>
       <input type="password" onKeyUp={this.handleLoginKeyUp} />
       </div>
     )
   }
}
