import React from "react"

const playFrameDuration = 3.5;
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
            (<div className="frame frame_0">
                <p className="t0">Imogen Liu 是 ... ...</p>
                <p className="t1">一颗诚实的苹果树。</p>
                <p className="t0">因为，</p>
            </div>),
            (<div className="frame frame_1">
                <div>
                    <p className="p0">“一个彻底诚实的人是从不面对选择的，</p>
                    <p className="p0">那条路永远会清楚无二地呈现在你面前，</p>
                    <p className="p0">这和你的憧憬无关，</p>
                    <p className="p0">就像你是一颗苹果树，你憧憬结橘子，</p>
                    <p className="p0">但你还是诚实地结出苹果一样。</p>                    
                </div>
                <div>
                    <p className="p0">-顾城</p>
                </div>

                
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
                        this.playTimeout = setTimeout(play, playFrameDuration * 1000);    
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