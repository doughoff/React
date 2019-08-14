import React from 'react';
import ReactDOM from 'react-dom';
// import './original/index.css';
import App from './experiments/FilterElementsApp';
import * as serviceWorker from './original/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
