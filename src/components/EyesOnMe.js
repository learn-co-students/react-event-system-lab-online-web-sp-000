// Code EyesOnMe Component Here

import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    constructor() {
        super()
    }

    handleOnFocus = (event) => {
        console.log("Good!")
    }

    handleOnBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button 
                onFocus={this.handleOnFocus}
                onBlur={this.handleOnBlur}></button>
            </div>
        )
    }

}