import React from "react";

export class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <nav id='component-navigation'>
                <div className="background"></div>
                <div className="container">
                    {this.props.children}
                </div>
            </nav>
        );
    }
}