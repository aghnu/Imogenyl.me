import React from 'react';
import { IntroPage } from './IntroPage.jsx';
import { HomePage } from './HomePage.jsx';

const switchPadeAnimationDuration = 0.5;


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
        this.startURLListener = this.startURLListener.bind(this);

        this.pages = [
            'home'
        ]
    }

    startURLListener() {

        this.urlChangeFunc = () => {
            const page = this.getCurrentPage();
            this.switchPage(page);
        }

        window.addEventListener('hashchange', this.urlChangeFunc);
    }

    componentDidMount() {
        this.startURLListener();
        this.app.current.style.transition = `opacity ${switchPadeAnimationDuration}s`;
        this.switchAnimationTimeout = setTimeout(() => {
            this.app.current.classList.add('show');
        }, 100);
    }

    componentWillUnmount() {
        clearTimeout(this.switchAnimationTimeout);
        if (this.urlChangeFunc) {
            window.removeEventListener('hashchang', this.urlChangeFunc);
        }
    }

    componentDidUpdate() {
        this.switchAnimationTimeout = setTimeout(() => {
            this.app.current.classList.add('show');
        }, 500);
    }

    switchPage(page) {
        this.app.current.classList.remove('show');
        this.switchAnimationTimeout = setTimeout(() => {
            this.setState((state,props) => {
                if (state.page !== page) {
                    // will update
                    
                    return {page: page};
                } else {
                    // willnot update
                    return {};
                }
    
                
            });
        }, switchPadeAnimationDuration * 1000);
        


    }

    getCurrentPage() {
        const page = window.location.hash;
        if (page === "") {
            return "home";
        } else {
            if (this.pages.indexOf(page) >= 0) {
                return page;
            } else {
                return "home";
            }
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
    }

}