import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    render() {
        const currentSlide = this.state.currentSlideIndex
        return (
            <div>
                <p>I am on slide {currentSlide}</p>
            </div>
        )
    }
}
