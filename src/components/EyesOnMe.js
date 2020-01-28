
//other way:
// import React from 'react';

// class EyesOnMe extends React.Component {
//with export default EyesOnMe at the bottom

import React, { Component } from "react";

// Code EyesOnMe Component Here

export default class EyesOnMe extends Component{


    handleFocus = () =>{
        console.log("Good!")
    }

    handleBlur = () =>{
        console.log("Hey! Eyes on me!")

    }

    render(){
        return(
            
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on me, please!</button>
            
        )
    }
}