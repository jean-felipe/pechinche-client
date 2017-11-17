import React from 'react';

import logo from '../logo.svg';
import '../styles/App.css';
import ProductList from './products/Products-list';

export default class Main extends React.Component {
    render() {
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ProductList />
            </div>
        )
    }
}