// Code EyesOnMe Component Here
import React, { Component }from 'react';

class EyesOnMe extends Component {
    render = () => <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}>EyesOnMe</button>
}

export default EyesOnMe;