import React, { Component } from "react";

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        onFocus={() => console.log("Good!")}
        onBlur={() => console.log("Hey! Eyes on me!")}
      />
    );
  }
}
