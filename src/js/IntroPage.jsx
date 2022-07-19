import React from "react"

const playFrameDuration = [5, 10];
const fadingDuration = 0.5;

export class IntroPage extends React.Component {
    constructor(props) {
        super(props);


        this.frameContainer = React.createRef();
        this.state = {
            frameIndex: 0
        }

        this.start = this.start.bind(this);


        this.frames = [
            (<div></div>),
            (<div className="frame">
                <p>
                    Imogen Liu 是 ... ...
                    <br/><br/><br/><br/><br/>
                    <br/><span className="large">一棵诚实的苹果树。</span>
                    <br/><br/><br/><br/><br/>
                    <br/>因为，
                </p>
            </div>),
            (<div className="frame">
                <p>
                    “一个彻底诚实的人是从不面对选择的，
                    <br/>那条路永远会清楚无二地呈现在你面前，
                    <br/>这和你的憧憬无关，
                    <br/>就像你是一颗苹果树，你憧憬结橘子，
                    <br/>但你还是诚实地结出苹果一样。
                    <br/>
                    <br/>-顾城                  
                </p>
                    

                
            </div>)
        ]
    }

    start() {

        this.frameContainer.current.style.transition = `opacity ${fadingDuration}s`;

        const play = () => {
            this.frameContainer.current.classList.remove('show');
            this.playTimeout = setTimeout(()=>{


                this.setState((state, props) => {
                    const oldFrameIndex = state.frameIndex;

                    if (oldFrameIndex < (this.frames.length - 1)) {
                        this.playTimeout = setTimeout(play, playFrameDuration[oldFrameIndex] * 1000);    
                        return {frameIndex: oldFrameIndex + 1};
                    } else {
                        this.props.callbackFinish();
                        return {frameIndex: 0};
                    }
                });   
            }, fadingDuration * 1000);    
        }

        this.playTimeout = setTimeout(play, 50);

        this.frameContainer.current.onclick = () => {
            clearTimeout(this.playTimeout);
            play();
        }

    }

    componentDidUpdate() {
        this.frameContainer.current.classList.add('show');
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        clearTimeout(this.playTimeout);
    }

    render() {
        return (
            <div id="component-intro">
                <div className="container" ref={this.frameContainer}>
                    {this.frames[this.state.frameIndex]}
                </div>
            </div>
        )
    }


}