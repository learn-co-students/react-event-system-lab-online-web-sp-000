// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    constructor(props) {
        super()
        this.state = {
          
        } 
      }

     onFocus(event) {
      console.log('Good!')
    }
    onBlur(event){
      console.log('Hey! Eyes on me!')
    }


      render() {
        return (
          <div>
             <button onFocus={this.onFocus} onBlur={this.onBlur}>Enter</button>
          </div>
        )
      }
      

  
}
