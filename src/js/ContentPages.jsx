import React from "react";



class ContentPage extends React.Component {
    render() {
        <div className="page-content">
            <div className="header">
                <p className="title">{this.props.pageTitle}</p>
            </div>
            <div className="content"></div>
            <div className="control">
                <button className="return"></button>
            </div>
        </div>
    }
}