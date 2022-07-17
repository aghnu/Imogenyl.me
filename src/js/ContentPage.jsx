import React from "react";
import { 
    PageQNA0, 
    PageQNA1, 
    PageQNA2, 
    PageQNA3,

    PageFY0,

    PageWA0,
    PageWA1,
    PageWA2,
    PageWA3,
    PageWA4,

    PagePW0,
    PagePW1,
    PagePW2,
    PagePW3,
} from "./Pages.jsx";


export class ContentPage extends React.Component {
    constructor(props) {
        super(props);

        this.page = React.createRef();
        this.closeButton = React.createRef();
        this.background = React.createRef();

        this.initRouteChangeListner = this.initRouteChangeListner.bind(this);
        this.getCurrentPage = this.getCurrentPage.bind(this);
        this.changePage = this.changePage.bind(this);

        this.pages = {
            '#qna_0': () => <PageQNA0 />,
            '#qna_1': () => <PageQNA1 />,
            '#qna_2': () => <PageQNA2 />,
            '#qna_3': () => <PageQNA3 />,
            
            '#fy_0': () => <PageFY0 />,

            
            '#wa_0': () => <PageWA0 />,
            '#wa_1': () => <PageWA1 />,
            '#wa_2': () => <PageWA2 />,
            '#wa_3': () => <PageWA3 />,
            '#wa_4': () => <PageWA4 />,

            '#pw_0': () => <PagePW0 />,
            '#pw_1': () => <PagePW1 />,
            '#pw_2': () => <PagePW2 />,
            '#pw_3': () => <PagePW3 />,

            "#home" : () => null,
        }

        this.state = {
            page: '#home'
        }

    }


    initRouteChangeListner() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            const page = this.getCurrentPage();
            if (hash === page) {
                this.changePage(page);
            } else {
                window.location.hash = page;
            }
            
        });
    }

    getCurrentPage() {
        const hash = window.location.hash;
        if (Object.getOwnPropertyNames(this.pages).indexOf(hash) >= 0) {
            return hash;
        } else {
            return "#home";
        }
    }

    changePage(page) {
        clearTimeout(this.animationTimeout);
        window.location.hash = page;
        this.page.current.classList.remove('show');
        this.animationTimeout = setTimeout(() => {
            this.setState({page: page});              
        }, 50);
        
    }

    componentDidUpdate() {
        this.animationTimeout = setTimeout(() => {
            if (window.location.hash !== '#home' && window.location.hash !== '') {
                this.page.current.classList.add('show');
            }
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.animationTimeout);


    }

    componentDidMount() {
        this.initRouteChangeListner();

        this.closeButton.current.onclick = () => {
            window.location.hash = '#home';
        }

        this.background.current.onclick = () => {
            window.location.hash = '#home';
        }

        const page = this.getCurrentPage();
        this.changePage(page);

    }

    render() {
        return (
            <div className="page-content" ref={this.page}>
                <div className="background" ref={this.background}></div>
                <div className="content-container-border">
                    <div className="content-container">
                        <div className="wrapper">
                            <div className="text-container">
                                {this.pages[this.state.page]()}
                            </div>
                        </div>
                        <div className="close-button" ref={this.closeButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 40 40"><g transform="translate(1.414 1.414)"><line x2="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line x1="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/></g></svg>
                        </div>
                    </div>

                </div>

            </div>            
        );
    }
}