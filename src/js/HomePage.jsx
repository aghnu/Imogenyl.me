import React from "react";
import { Navigation } from './components/navigation/Navigation.jsx';
import { Ball } from "./components/navigation/Ball.jsx";
import { Tab } from './components/sidetab/Tab.jsx';
import { Footer } from "./components/Footer.jsx";
import { TabAbout } from "./components/sidetab/TabAbout.jsx";
import { TabTimeline } from "./components/sidetab/TabTimeline.jsx";

import navs from '../json/navigations.json';
import timeline from '../json/timeline.json';
import about from '../json/about.json';

import fy_0 from '../img/navigation_balls/fy/fy_0.webp';

import gzh_0 from '../img/navigation_balls/gzh/gzh_0.webp';
import gzh_1 from '../img/navigation_balls/gzh/gzh_1.webp';
import gzh_2 from '../img/navigation_balls/gzh/gzh_2.webp';

import pw_0 from '../img/navigation_balls/pw/pw_0.webp';
import pw_1 from '../img/navigation_balls/pw/pw_1.webp';
import pw_2 from '../img/navigation_balls/pw/pw_2.webp';
import pw_3 from '../img/navigation_balls/pw/pw_3.webp';

import qna_0 from '../img/navigation_balls/qna/qna_0.webp';
import qna_1 from '../img/navigation_balls/qna/qna_1.webp';
import qna_2 from '../img/navigation_balls/qna/qna_2.webp';
import qna_3 from '../img/navigation_balls/qna/qna_3.webp';

import wa_0 from '../img/navigation_balls/wa/wa_0.webp';
import wa_1 from '../img/navigation_balls/wa/wa_1.webp';
import wa_2 from '../img/navigation_balls/wa/wa_2.webp';
import wa_3 from '../img/navigation_balls/wa/wa_3.webp';
import wa_4 from '../img/navigation_balls/wa/wa_4.webp';

import backgroundImg from '../img/shape_apple.webp';

const pathSrcLookup = {
    'fy_0': fy_0,

    'gzh_0': gzh_0,
    'gzh_1': gzh_1,
    'gzh_2': gzh_2,

    'pw_0': pw_0,
    'pw_1': pw_1,
    'pw_2': pw_2,
    'pw_3': pw_3,
    
    'qna_0': qna_0,
    'qna_1': qna_1,
    'qna_2': qna_2,
    'qna_3': qna_3,

    'wa_0': wa_0,
    'wa_1': wa_1,
    'wa_2': wa_2,
    'wa_3': wa_3,
    'wa_4': wa_4,
}

export class HomePage extends React.Component {
    render() {
        const Balls = navs.items.map((item) => {
            return <Ball itemTitle={item.title} itemStyleClass={item.styleClass} key={item.title} imgSrc={pathSrcLookup[item.styleClass]}/>
        });
        return (
            <div>
                <Navigation backgroundImgSrc={backgroundImg}>
                    {Balls}
                </Navigation>
                <div>
                    <Tab tabTitle={timeline.title} tabOrder={timeline.order}>
                        <TabTimeline content={timeline}/>
                    </Tab>
                    <Tab tabTitle={about.title} tabOrder={about.order}>
                        <TabAbout content={about}/>
                    </Tab>                
                </div>
                {this.props.children}
                <Footer>
                    © 2022 Yu Liu
                </Footer>
            </div>
        )     
    }
}

