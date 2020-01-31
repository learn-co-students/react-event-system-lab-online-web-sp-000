// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {
    //start here
    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            //start here
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }
}
export default EyesOnMe