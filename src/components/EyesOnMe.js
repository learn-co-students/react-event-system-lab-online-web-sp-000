// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    render(){
        const handleBlur = () => {
            console.log('Hey! Eyes on me!')
        }

        const handleFocus = () => {
            console.log('Good!')
        }

        return(
            <button onFocus={handleFocus} onBlur={handleBlur}></button>
        )
    }
}
