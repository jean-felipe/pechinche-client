import React from 'react';

import '../styles/App.css'
import '../styles/vendor/bootstrap.min.css';
import '../styles/vendor/bootstrap-grid.min.css';
import '../styles/vendor/bootstrap-reboot.css';

import Menu from './Menu';
import ProductList from './products/Products-list';

export default class Main extends React.Component {
    render() {
        return(
           <div>
                <div>
                    <Menu />
                </div>
                <div className="container">
                    <div className="jumbotron">
                        <h1>Welcome to React</h1>
                    </div>
                    <ProductList />
                </div>
           </div>
        )
    }
}