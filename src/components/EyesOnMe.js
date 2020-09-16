import React, {Component} from 'react';
import { render } from 'enzyme';

export default class EyesOnMe extends Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }
    render () {
        const txt = this.blur ? 'Hey! Eyes on me!' : 'Good!'
return (
    <div>
<button onFocus={this.focus} onBlur = {this.blur}>{txt}</button>
</div>  
)
    }
}
