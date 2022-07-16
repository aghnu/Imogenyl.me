import React from "react";

export class TabAbout extends React.Component {
    render() {
        const titles = this.props.content.items.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <div className="mark"><div className="bg"></div></div>
                    <p className="text">{item.title}</p>
                </div>
                
            )
        })

        return (
            <div className="component-tab-about">
                <div className="tab-title"><p>她由这些<br/>元素构成<br />...</p></div>
                <div className="tab-items">
                    {titles}
                </div>
               
            </div>
        );
    }
}