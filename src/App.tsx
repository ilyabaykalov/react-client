import * as React from 'react';

import './style.scss';

type AppProps = {
    name?: string
}

export const App = (props: AppProps) =>
    <div className='container'>
        <h1>Pure react client, hello { props.name || 'dude' }</h1>
        <img className='logo'
             src='/public/logo.svg'
             alt='React.js'/>
    </div>;
