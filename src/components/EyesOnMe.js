import React from 'react';

class EyesOnMe extends React.Component {

    handleButtonFocus = () => {console.log('Good!')}

    handleButtonBlur = () => {console.log('Hey! Eyes on me!')}

    render() {
        return (
            <button 
                id="focus-on"
                onFocus={this.handleButtonFocus}
                onBlur={this.handleButtonBlur}>
                Eyes on me, please!
            </button>
        )
    }
}//end 

export default EyesOnMe;