import React from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends React.Component {

    render() {
        return (
            <button onFocus={(e) => {
                console.log('Good!');
              }}
              onBlur={(e) => {
                console.log('Hey! Eyes on me!');
              }}
              > Click Me!
              </button>
        )
    }
}