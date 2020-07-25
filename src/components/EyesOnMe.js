import React from 'react'

export default  class EyesOnMe extends React.Component {
    

    focusHandlers = () => {

        console.log("Good!")
    }
     
    blurHandlers = () => {
        console.log ('Hey! Eyes on me!')
    }
    

    render() {
        return (
       <button onFocus={this.focusHandlers} onBlur={this.blurHandlers}> Eyes on me, Please!</button>
       
           
        )
    }
    
}