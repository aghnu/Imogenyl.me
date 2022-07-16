import React from "react";

function PageQNA0(props) {
    const title = '为什么哲学是一种实践';
    const content = (
        <div className="content">
            <p>
                因为最无聊的事就是记住谁说了什么，
                <br/>以证明自己读过。
                <br/>或错以为出了名的人说说话就能指导人生。
            </p>
            <br />
            <p>
                哲学家又怎样，
                <br/>你瞧他生活里，是一个笨蛋。
                <br/>有讨人喜欢的笨蛋，有道德败坏的笨蛋，
                <br/>如果苏格拉底还活着，
                <br/>你多半会觉得，
                <br/>这真是个气人的笨蛋。
            </p>
            <br />
            <p>
                别误会，没有说笨蛋不好的意思。
            </p>
            <br />
            <p>
                因为观点没那么重要。
                <br/>我曾经以为它很重要，
                <br/>后来发现，如果世界是由观点改变的，
                <br/>那一定是哪里出了差错。
            </p>
            <br />
            <p>
                因为哲学不是智商的竞赛
            </p>
            <br />
            <p>
                因为being smart没能帮我们得到答案。
            </p>
            <br />
            <p>
                像抛球的小孩——
                <br/>一遍又一遍，把问题抛向空中，
                <br/>被另一个同伴接住。
            </p>
            <br />
            <p>
                因为你总会选择一条路走下去。
                <br/>走下去，你就是
                <br/>道路的化身。
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
} 


function PageQNA2(props) {
    const title = '对广告的热爱是什么';
    const content = (
        <div className="content">
            <p>
                ……反正不是对光辉岁月的追忆吧！
                <br/>如果是热爱，那应当是向前的。
                <br/>向前，一些人觉得那是往低处的溪流，
                <br/>我却想看看，它要到哪去——
                <br/>有没有良田美池，在柳暗花明后的，
                <br/>又一个村落……
            </p>
        </div>
    );

    return (
        <SingleContentContainer content={content} title={title} />
    );
} 

function PageQNA3(props) {
    const titles = ['Q&A 品牌是什么', '写同人对我的启发'];
    const content = [
        <div className="content">
            <p>
                在客观世界的叙事缝隙里，
                <br/>创造属于一种符号（品牌名）的共有的记忆，
                <br/>让一个词语包含色彩、声音、触感、气味、味道、情感……
                <br/>并让体会到这些情感的人，
                <br/>连结在一起。
            </p>
        </div>,
        <div className="content">
            <p>
                作品不属于作者。
                <br/>品牌不属于企业。
                <br/>作者创作出材料——感官、叙事、关系……
                <br/>就像企业给出产品、价值、承诺、体验……
                <br/>但这些材料催化的是一个对话的场域。
                <br/>读者赋予意义。
                <br/>每一次对话，都轻微地篡改了
                <br/>作品的含义。
                <br/>而每一次消费，都如同一场对话。
                <br/>我们互换了一些东西……没人准确地知道那是什么。
                <br/>但我们从此拥有了一些
                <br/>共同的记忆。
                <br/>当我们念起这个名字。
                <br/>当每个后来的人到来，
                <br/>又成为我们。
            </p>
        </div>,
    ]

    return (
        <MultiContentContainer titles={titles} content={content}></MultiContentContainer>
    );
}

class SingleContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-single-content-container">
                <p className="title">{this.props.title}</p>
                {this.props.content}
            </div>
        );
    }
}

class MultiContentContainer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            pageNum: 0
        }

    }
    
    render() {
        const tabClickHandler = (page) => {
            this.setState({pageNum: page});
        }
        const titles = this.props.titles.map((t,i)=>{
            return (<div className="tab" key={i} onClick={()=>{tabClickHandler(i)}}><p>{t}</p></div>);
        });

        return (
            <div className="page-multi-content-container">
                <div className="tab-content">
                    <p className="title">{this.props.titles[this.state.pageNum]}</p>
                    {this.props.content[this.state.pageNum]}
                </div>
                <div className="tabs-container">
                    <div className="tabs">{titles}</div>
                </div>
                
            </div>
        );
    }
}

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
            '#qna_3': () => <PageQNA3 />,
            '#qna_0': () => <PageQNA0 />,
            '#qna_2': () => <PageQNA2 />,
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
                <div className="content-container">
                    <div className="wrapper">
                        <div className="text-container">
                            {this.pages[this.state.page]()}
                        </div>
                    </div>
                    <div className="close-button" ref={this.closeButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40"><g transform="translate(1.414 1.414)"><line x2="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line x1="37" y2="37" fill="none" stroke="#7ea6e8" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/></g></svg>
                    </div>
                </div>
            </div>            
        );
    }
}