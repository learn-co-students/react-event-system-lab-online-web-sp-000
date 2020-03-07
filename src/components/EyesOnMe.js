import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    focusF = () => {
        console.log('Good!')
    }

    BlurF = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusF} onBlur={this.BlurF}></button>
        )
    }
}
