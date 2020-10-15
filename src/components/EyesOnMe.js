import React, { Component } from 'react';
export default class EyesOnMe extends Component {
    constructor(props) {
        super();
    }

    onFocus() {
        console.log('Good!');
    }

    onBlur() {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
    }
}
