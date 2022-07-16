import React from 'react';
import { IntroPage } from './IntroPage.jsx';
import { HomePage } from './HomePage.jsx';

const switchPadeAnimationDuration = 0.65;

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "intro"
        }

        this.app = React.createRef();

        this.generatePage = this.generatePage.bind(this);
        this.getCurrentPage = this.getCurrentPage.bind(this);
        this.switchPage = this.switchPage.bind(this);
    }

    componentDidMount() {
        this.app.current.style.transition = `opacity ${switchPadeAnimationDuration}s`;
        this.switchAnimationTimeout = setTimeout(() => {
            this.app.current.classList.add('show');
        }, 100);
    }

    componentWillUnmount() {
        clearTimeout(this.switchAnimationTimeout);
    }

    componentDidUpdate() {
        this.switchAnimationTimeout = setTimeout(() => {
            this.app.current.classList.add('show');
        }, 100);
    }

    switchPage(page) {

        this.app.current.classList.remove('show');

        this.switchAnimationTimeout = setTimeout(() => {
            this.setState((state,props) => {
                if (state.page !== page) {
                    // will update
    
                    
                } else {
                    // willnot update
                }
    
                return {page: page};
            });
        }, switchPadeAnimationDuration * 1000);
        


    }

    getCurrentPage() {
        const page = window.location.hash;
        switch (page) {
            case "#home":
                return "home"
            default:
                return "home"
        }
    }

    generatePage(page) {
        switch(page) {
            case 'home':
                return <HomePage />;

            case 'intro':
                return <IntroPage callbackFinish={() => {
                    this.switchPage(this.getCurrentPage());
                }}/>;
        }            
    }

    render() {

        return (
            <div id="site-body" ref={this.app}>
                    {this.generatePage(this.state.page)}
            </div>
        );

        // return(
        //     <div id="site-body">
        //         <HomePage></HomePage>
        //     </div>
        // )
    }

}