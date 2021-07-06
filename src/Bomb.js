import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props){
        super()
        console.log(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ? "Boom!" : 
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
            </div>
        )
    }
}
