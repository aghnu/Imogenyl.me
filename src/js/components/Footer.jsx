import React from 'react';

export function Footer(props) {
    return (
        <footer id="site-footer">
            <p>{props.children}</p>
        </footer>
    );
}