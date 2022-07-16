import React from "react";

export class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};

        this.backgroundImg = React.createRef();
    }

    componentDidMount() {

        this.backgroundImg.current.onload = () => {
            this.loadedAnimationTimeout = setTimeout(() => {
                this.backgroundImg.current.classList.add('show');
            }, 250);
        }

        this.backgroundImg.current.src = this.props.backgroundImgSrc;
    }

    componentWillUnmount() {
        clearTimeout(this.loadedAnimationTimeout);
    }

    render() {
        return (
            <nav id='component-navigation'>
                <img className="background" ref={this.backgroundImg}/>
                <div className="container">
                    {this.props.children}
                </div>
            </nav>
        );
    }
}