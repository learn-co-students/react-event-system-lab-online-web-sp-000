// Code EyesOnMe Component Here
// Code Keypad Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

     focus = () => {
       console.log('Good!');
     }

     onBlur = () => {
       console.log('Hey! Eyes on me!')
     }

      render () {

          return (
            <div>
              <button onFocus={this.focus} onBlur={this.onBlur}/>
            </div>
          );
       }

}
