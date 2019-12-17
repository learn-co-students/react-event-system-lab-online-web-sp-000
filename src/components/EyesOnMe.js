import React from 'react';

class EyesOnMe extends React.Component {

handleInputBlur = () => console.log('Hey! Eyes on me!')

handleInputFocus = () => console.log('Good!')

render() {

    return(
        <div>
            <button
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            ></button>
        </div>




    )


}

}

export default EyesOnMe;