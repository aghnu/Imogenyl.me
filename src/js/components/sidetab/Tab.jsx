import React from "react";

export class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.tab=React.createRef();
        this.tabTitle = React.createRef();
        this.tabBackground = React.createRef();

        this.initTabBehavior = this.initTabBehavior.bind(this);
    }

    initTabBehavior() {
        this.open = false;
        this.tabTitle.current.onclick = () => {
            const children = this.tab.current.parentNode.children;
            if (!this.open) {
                this.open = true;
                for (let i = 0; i < children.length; i++) {
                    if (children[i] === this.tab.current) {
                        children[i].classList.add('open');
                    } else {
                        children[i].classList.add('hide');
                    }
                }      
            } else {
                this.open = false;
                for (let i = 0; i < children.length; i++) {
                        children[i].classList.remove('open');
                        children[i].classList.remove('hide');
                }  
            }            
        }

        this.tabBackground.current.onclick = () => {
            if (this.open) {
                this.open = false;
                const children = this.tab.current.parentNode.children;
                for (let i = 0; i < children.length; i++) {
                        children[i].classList.remove('open');
                        children[i].classList.remove('hide');
                }                  
            }
        }

    }

    componentDidMount() {
        this.initTabBehavior();
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div id="component-tab" className={this.props.tabOrder} ref={this.tab}>
                <div className={"background"} ref={this.tabBackground}></div>
                <div className={"tab"}>
                    <div className="title" ref={this.tabTitle}>
                        <p>{this.props.tabTitle}</p>
                    </div>
                    <div className="container">
                        {this.props.children}
                    </div>                    
                </div>                
            </div>
        );
    }
}