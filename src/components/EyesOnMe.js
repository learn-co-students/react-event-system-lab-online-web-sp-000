// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    onBlurLog = () => {console.log('Good!')}

    onFocusLog = () => {console.log('Hey! Eyes on me!')}

    render() {
        return(
            <div>
                <button onFocus={this.onBlurLog} onBlur={this.onFocusLog} />
            </div>
        )
    }
}

export default EyesOnMe;