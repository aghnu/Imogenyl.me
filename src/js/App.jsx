import React from 'react';
import { Navigation } from './components/Navigation.jsx';
import { Ball } from "./components/Ball.jsx";
import { Footer } from "./components/Footer.jsx";
import navs from '../json/navigations.json';

export function App() {
    return (
        <div id="site-body">
            <Navigation>
                {navs.items.map((item) => <Ball itemTitle={item.title} itemStyleClass={item.styleClass} key={item.title} />)}
            </Navigation>
            <Footer>
                © 2022 Yu Liu
            </Footer>
        </div>
    )
}