import React from 'react'

export default  class Keypad extends React.Component {
 
   passwordHandler = () => {
   this.props = 'Entering password...'

    }


    
    render() {
        return (
      
        <input  onKeyUp={this.passwordHandler} type="password"/>
        

        

    


                
          
        )
    }
}