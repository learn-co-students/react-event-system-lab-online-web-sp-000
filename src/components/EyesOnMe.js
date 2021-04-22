// Code EyesOnMe Component Here
import React from 'react'


export default class EyesOnMe extends React.Component{

  //  constructor(props){
  //      super(props)
  //  }

  onBlurHandler = () => {
    console.log('Hey! Eyes on me!')
  }

  onFocusHandler = () =>{
      console.log('Good!')
  }


render(){
    return(
        <button className="EyesOnMe" onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>

        </button>
    )
}



}