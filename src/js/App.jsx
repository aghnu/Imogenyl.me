import React from 'react';
import { Navigation } from './components/navigation/Navigation.jsx';
import { Ball } from "./components/navigation/Ball.jsx";
import { Tab } from './components/sidetab/Tab.jsx';
import { Footer } from "./components/Footer.jsx";
import navs from '../json/navigations.json';
import timeline from '../json/timeline.json';
import about from '../json/about.json';

export function App() {
    return (
        <div id="site-body">
            <Navigation>
                {navs.items.map((item) => <Ball itemTitle={item.title} itemStyleClass={item.styleClass} key={item.title} />)}
            </Navigation>
            <div>
                <Tab tabTitle={timeline.title} tabOrder={timeline.order}/>
                <Tab tabTitle={about.title} tabOrder={about.order}/>                
            </div>

            <Footer>
                © 2022 Yu Liu
            </Footer>
        </div>
    )
}