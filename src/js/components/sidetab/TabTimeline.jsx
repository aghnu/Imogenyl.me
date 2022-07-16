import React from "react";

export class TabTimeline extends React.Component {
    render() {
        const titles = this.props.content.items.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <div className="mark"><div className="bg"></div></div>
                    <div className="text">
                        <p className="year">{item.year}</p>
                        <div className="desc">{item.desc.map((item, index) => <div key={index}>{item}</div>)}</div>
                    </div>
                </div>
                
            )
        })

        return (
            <div className="component-tab-timeline">
                <div className="tab-title"></div>
                <div className="tab-items">
                    {titles}
                </div>
                    
            </div>
        );
    }
}