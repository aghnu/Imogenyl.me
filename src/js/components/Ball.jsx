/*
Requirments: 
    > animation
        - breathing: 
            1. scale() up and down but animation is not well supported
            2. change fontsize em
        - wondering: random movements to all directions
            set up an origin point, setTimeInterval for a random point around the origin point, let css transition take care of the animation
    > 
*/

import React from "react";


export class Ball extends React.Component {
    render() {
        return (
            <button className={this.props.itemStyleClass} title={this.props.itemTitle} ></button>
        );
    }
}