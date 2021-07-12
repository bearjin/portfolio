import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';
import Main from './main';
import About from './about/about';
import Career from './career/career';
import Project from './project/project';
import onlineShop from './project/detail/onlineShop';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/portfolio" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/career" component={Career} />
                        <Route exact path="/project" component={Project} />
                        <Route exact path="/project/onlineShop" component={onlineShop} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;