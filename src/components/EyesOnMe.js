import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    focus(event) {
        console.log('Good!')
    }

    blur(event) {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return <button onFocus={this.focus} onBlur={this.blur}>Log in</button>
    } 
}
