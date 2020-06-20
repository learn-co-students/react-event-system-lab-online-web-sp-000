// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {

    handleOnFocus = (event) => {
        console.log("Good!")
    }

    handleOnBlur = (event) => {
        console.log("Hey! Eyes on me!")
    }

    render () {
        return (
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
        )
    }
}