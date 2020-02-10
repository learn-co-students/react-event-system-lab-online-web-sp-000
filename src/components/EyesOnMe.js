// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    
    blurry = () => console.log('Hey! Eyes on me!')
    focusy = () => console.log('Good!')
    
    render() {
        return(
            <div>
                <button onBlur={this.blurry} onFocus={this.focusy}/>
            </div>
        )
    }
}