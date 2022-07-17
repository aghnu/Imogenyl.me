import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { preLoadingImages } from './HomePage.jsx';

import "../styles/styles.scss";


// pre loading
function loadingReady(callback) {
    preLoadingImages(()=>{
        document.fonts.ready.then(()=>{
            callback();
        });
    });
}

window.addEventListener('load', ()=>{
    const loadingPage = document.createElement('div');
    const loadingPagePrompt = document.createElement('p');

    const loadingPagePromptText = ['·', '··', '···'];
    const loadingPagePromptInterval = setInterval(() => {
        const text = loadingPagePromptText.shift();
        loadingPagePrompt.innerHTML = text;
        loadingPagePromptText.push(text);
    }, 1000);

    loadingPage.setAttribute('id', 'site-loading');
    loadingPage.appendChild(loadingPagePrompt);

    document.body.appendChild(loadingPage);

    // wait ready
    loadingReady(()=>{
        // load app
        const root = createRoot(document.getElementById('root'));
        root.render(<App />);
        
        // remove loading
        document.body.removeChild(loadingPage);
        clearInterval(loadingPagePromptInterval);        
    });
});




