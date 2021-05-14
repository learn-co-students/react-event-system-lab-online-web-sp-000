import React, {Component} from 'react' 

export default class EyesOnMe extends Component{
    handleFocus = () => {console.log("Good!")}
    handleBlur = () => {console.log("Hey! Eyes on me!")}
    render(){
        return(
            <div>
                <button onFocus= {this.handleFocus} onBlur= {this.handleBlur} style={{height: "50px", width: "50px"}}></button>
            </div>
        )
    }
}