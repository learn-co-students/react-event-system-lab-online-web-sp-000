import React,  { Component } from 'react';

export default class EyesOnMe extends React.Component {


    good = () => {console.log('Good!')}

    lookAtMe = () => {console.log('Hey! Eyes on me!')}

    render () {
        return (
            <button onFocus={this.good} onBlur={this.lookAtMe}></button>
        )
    }
}