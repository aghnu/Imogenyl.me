import React from 'react';
import { IntroPage } from './IntroPage.jsx';
import { HomePage } from './HomePage.jsx';
import { ContentPage } from './ContentPage.jsx';

// const switchPadeAnimationDuration = 0.5;


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            siteReady: false
        }

        this.app = React.createRef();

        this.ready = this.ready.bind(this);
    }

    ready() {
        this.app.current.classList.remove('show');
        this.setState({siteReady: true});
    }

    componentDidMount() {
        // this.app.current.style.transition = `opacity ${switchPadeAnimationDuration}s`;
        // this.switchAnimationTimeout = setTimeout(() => {
        //     this.app.current.classList.add('show');
        // }, 250);

        this.app.current.classList.add('show');
    }

    componentWillUnmount() {
        clearTimeout(this.switchAnimationTimeout);
    }

    componentDidUpdate() {
        this.switchAnimationTimeout = setTimeout(() => {
            this.app.current.classList.add('show');
        }, 250);
    }

    render() {

        return (
            <div id="site-body" ref={this.app}>
                {
                    (this.state.siteReady) 
                    ? <HomePage><ContentPage /></HomePage>
                    : <IntroPage callbackFinish={() => {this.ready()}}/>
                }
            </div>
        );
    }

}