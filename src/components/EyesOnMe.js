import React, {Component} from 'react';

class EyesOnMe extends Component {
    focusHandler = () => {
        console.log('Good!')
    }

    blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return(
            <div>
                <br />
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}>EyesOnMe</button>
            </div>
        )
    }

}

export default EyesOnMe