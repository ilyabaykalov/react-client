import * as React from 'react';

import './style.scss';

type AppProps = {
    name: string
}

export const App = (name: AppProps) => {
        return (
            <div className='container'>
                <h1>Pure react client, hello { name }</h1>
                <img className='logo'
                     src='/public/logo.svg'
                     alt='React.js'/>
            </div>
        );
    }
;
