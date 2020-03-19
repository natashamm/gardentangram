import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './enter_address';
import EnterAddress from "./EnterAddress";
import * as serviceWorker from './serviceWorker';

var destination = document.getElementById('container')

//document.QuerySelector('#container');
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<EnterAddress/>, document.getElementById('container'));

/*
ReactDOM.render(
    <div>
        <p>Hello!</p>
    </div>,
    destination
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
