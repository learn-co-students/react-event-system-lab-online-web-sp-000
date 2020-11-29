// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
    focusButtonHandler = () => console.log("Good!")
    blurButtonHandler = () => console.log("Hey! Eyes on me!")

    render() {
        return(
            <button onFocus={this.focusButtonHandler} onBlur={this.blurButtonHandler}>
            </button>
        )
    }

}
export default EyesOnMe

