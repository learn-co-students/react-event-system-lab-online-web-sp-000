// Code EyesOnMe Component Here
import React, { Component } from './react'

export default class EyesOnMe extends React.Component {
    render (){
        <button onFocus={console.log("Good!")} onBlur={console.log("Hey! Eyes on me!")}></button>
    }
}