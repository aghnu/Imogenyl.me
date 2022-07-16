import React from "react";

const QNA_3 = (
        <div className="content content-qna-3">
            <div className="title">
                <p>Q&A 品牌是什么</p>
            </div>
            <div className="text">
                <p>在客观世界的叙事缝隙里，</p>
                <p>创造属于一种符号（品牌名）的共有的记忆，</p>
                <p>让一个词语包含色彩、声音、触感、气味、味道、情感……</p>
                <p>并让体会到这些情感的人，</p>
                <p>连结在一起。</p>
            </div>
            <div className="text">
                <p>写同人对我的启发：</p>
                <p>作品不属于作者。</p>
                <p>品牌不属于企业。</p>
                <p>作者创作出材料——感官、叙事、关系……</p>
                <p>就像企业给出产品、价值、承诺、体验……</p>
                <p>但这些材料催化的是一个对话的场域。</p>
                <p>读者赋予意义。</p>
                <p>每一次对话，都轻微地篡改了</p>
                <p>作品的含义。</p>
                <p>而每一次消费，都如同一场对话。</p>
                <p>我们互换了一些东西……没人准确地知道那是什么。</p>
                <p>但我们从此拥有了一些</p>
                <p>共同的记忆。</p>
                <p>当我们念起这个名字。</p>
                <p>当每个后来的人到来，</p>
                <p>又成为我们。</p>
            </div>
            
        </div>
    );

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
            '#qna_3': QNA_3,
            "#home" : <div></div>
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
                <div className="content-container">
                    <div className="wrapper">
                        <div className="text-container">
                            {this.pages[this.state.page]}
                        </div>
                    </div>
                    <div className="close-button" ref={this.closeButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 40 40"><g transform="translate(1.414 1.414)"><line x2="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line x1="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/></g></svg>
                    </div>
                </div>
            </div>            
        );
    }
}