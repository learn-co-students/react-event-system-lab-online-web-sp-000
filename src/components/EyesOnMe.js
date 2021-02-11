import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    render() {
        return(
            <button onBlur={ () => console.log('Hey! Eyes on me!') } onFocus={ () => console.log('Good!') } />
        )
    }

}