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

const animationBreathingDurationMin = 4;
const animationBreathingDurationMax = 12;

const animationWonderingDurationMin = 2;
const animationWonderingDurationMax = 12;

export class Ball extends React.Component {

    constructor(props) {
        super(props)

        this.animationWonderingEl = React.createRef();
        this.animationBreathingEL = React.createRef();
        this.button = React.createRef();
        this.item = React.createRef();

        this.animationBreathing = this.animationBreathing.bind(this);
        this.animationWondering = this.animationWondering.bind(this);
        this.initButtonBehavior = this.initButtonBehavior.bind(this);
    }

    initButtonBehavior() {


        this.button.current.onmouseenter = () => {
            const children = this.item.current.parentNode.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i] === this.item.current) {
                    children[i].classList.add('focus');
                } else {
                    children[i].classList.add('hide');
                }
            }
        }

        this.button.current.onmouseleave = () => {
            const children = this.item.current.parentNode.children;
            for (let i = 0; i < children.length; i++) {
                    children[i].classList.remove('focus');
                    children[i].classList.remove('hide');
            }
        }
    }

    animationBreathing() {
        const animationDuration = Math.random() * (animationBreathingDurationMax - animationBreathingDurationMin) + animationBreathingDurationMin;
        this.animationBreathingEL.current.style.width = `100%`;
        this.animationBreathingEL.current.style.height = `100%`;
        this.animationBreathingEL.current.style.animation = (Math.floor(Math.random() * 2) === 0) ? `breathing ${animationDuration}s infinite` : `breathing ${animationDuration}s reverse infinite`;
    }

    animationWondering() {

        console.log("Yes");

        const animationDuration = Math.random() * (animationWonderingDurationMax - animationWonderingDurationMin) + animationWonderingDurationMin;
        this.animationWonderingEl.current.style.width = `100%`;
        this.animationWonderingEl.current.style.height = `100%`;
        this.animationWonderingEl.current.style.transition = `transform ${animationDuration}s linear`;

        const play = () => {
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 20 - 10;
            this.animationWonderingEl.current.style.transform = `translate(${x}%, ${y}%)`;       
            
            this.animationWonderingTimout = setTimeout(play, animationDuration * 1000 * 0.75);     
        }
        this.animationWonderingTimout = setTimeout(play, 250);

    }
    
    clearAnimation() {
        clearTimeout(this.animationWonderingTimout);
    }

    componentDidMount() {
        this.animationBreathing();
        this.animationWondering();
        this.initButtonBehavior();
    }

    componentWillUnmount() {
         this.clearAnimation();
    }

    render() {
        return (
            <div className={this.props.itemStyleClass + ' item'} title={this.props.itemTitle} ref={this.item}>
                <div ref={this.animationWonderingEl}>
                    <div ref={this.animationBreathingEL}>
                        <button className="button" ref={this.button}></button>
                    </div>
                </div>
                
            </div>
        );
    }
}