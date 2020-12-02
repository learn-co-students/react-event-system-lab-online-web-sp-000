import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    looking = () => (console.log('Good!'))
    notLooking = () => (console.log('Hey! Eyes on me!'))

    render() {
        return (
            <div>
                <button onFocus={this.looking} onBlur={this.notLooking} ></button>
            </div>
        )
    }
}

