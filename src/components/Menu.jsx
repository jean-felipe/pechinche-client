import React from 'react';

import '../styles/vendor/bootstrap.min.css';
import '../styles/vendor/bootstrap-grid.min.css';
import '../styles/vendor/bootstrap-reboot.css';

export default class Menu extends React.Component{
    render() {
        return(
            <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="">Pechinche</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="">Home</a></li>
                        <li><a href="">Page 1</a></li>
                        <li><a href="">Page 2</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href=""><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href=""><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}