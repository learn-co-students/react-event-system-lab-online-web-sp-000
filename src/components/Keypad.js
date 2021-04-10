import React from 'react';

class Keypad extends React.Component {

    handleClickEvent = () => {
        console.log('Entering password...')
    }

    render () {
        return (
            <input type="password" onKeyUp={this.handleClickEvent}/>
        )
    }
}

export default Keypad