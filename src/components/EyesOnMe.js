import React from 'react';

export default class EyesOnMe extends React.Component {

  constructor() {
      super();
      this.handleFocus = this.keyUpHandler.bind(this, 'Good!');
      this.handleBlur = this.keyUpHandler.bind(this, 'Hey! Eyes on me!');
    }

  keyUpHandler(refName, e) {
        console.log(refName);
    }

  render() {
     return (
       <div>
       <button onFocus={this.handleFocus} onBlur={this.handleBlur} >Button</button>
       </div>
     )
   }
}
