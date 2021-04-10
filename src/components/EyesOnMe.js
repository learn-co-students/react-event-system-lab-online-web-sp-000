// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    handleFocusEvent = () => {
        console.log('Good!')
    }

    handleBlurEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    render () {
        return (
            <button onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}/>
        )
    }

}

export default EyesOnMe