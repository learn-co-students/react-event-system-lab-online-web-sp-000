// Code EyesOnMe Component Here

import React, { Component } from 'react'

class EyesOnMe extends Component{

   handleBlur = () =>{
       console.log("Hey! Eyes on me!")
   }

   handleFocus = () =>{
       console.log("Good!")
   }


    render(){
        return(
            <button onBlur={this.handleBlur} onFocus = {this.handleFocus}>I am a button</button>
        )
    }

}
export default EyesOnMe;