import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app'

function Index() {
    return(
        <App/>
    )
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);