import React, {Component} from 'react'

export default class EyesOnMe extends Component {
    focusSpeak = (e) => {
        console.log("Good!")
    }

    blurSpeak = () => console.log("Hey! Eyes on me!")

    render() {
        return(
            <button onFocus={this.focusSpeak} onBlur={this.blurSpeak}></button>
        )
    }
}