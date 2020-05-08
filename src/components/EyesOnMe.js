// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    writeGood = () => {
        console.log('Good!')
    }

    writeEyes = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render(){
        return(
            <div>
                <button onFocus={this.writeGood} onBlur={this.writeEyes}></button>
            </div>
        )
    }
}

export default EyesOnMe 