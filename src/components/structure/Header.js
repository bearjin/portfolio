import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from '../../pages/Main';
import About from '../../pages/About';
import Career from '../../pages/Career';
import Project from '../../pages/Project';

class Header extends Component {
    render () {
        return (
            <Router>
                <header id="header" className="header">
                    <div className="header_inner">
                        <h1 className="logo">logo</h1>
                        <button className="btn-gnb">MENU</button>
                        <nav id="gnb" className="gnb_wrap">
                            <ul className="gnb_inner">
                                <li className="depth1"><Link className="depth1_link" to="/">Home</Link></li>
                                <li className="depth1"><Link className="depth1_link" to="/about">About</Link></li>
                                <li className="depth1"><Link className="depth1_link" to="/career">Career</Link></li>
                                <li className="depth1"><Link className="depth1_link" to="/project">Project</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/career">
                        <Career />
                    </Route>
                    <Route path="/project">
                        <Project />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Header;