import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Career from './pages/Career';
import Project from './pages/Project';
import OnlineShop from './pages/project/OnlineShop';
import Hanwha from './pages/project/Hanwha';
import OnlineSale from './pages/project/OnlineSale';
import Kelim from './pages/project/Kelim';
import Kyungnam from './pages/project/Kyungnam';
import Jaseng from './pages/project/Jaseng';
import Daewoo from './pages/project/Daewoo';

import ScrollToTop from './ScrollToTop';
import PageMotion from './PageMotion';
class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop />
                <PageMotion />
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/career" component={Career} />
                        <Route exact path="/project" component={Project} />
                        <Route exact path="/project/onlineShop" component={OnlineShop} />
                        <Route exact path="/project/hanwha" component={Hanwha} />
                        <Route exact path="/project/onlineSale" component={OnlineSale} />
                        <Route exact path="/project/kelim" component={Kelim} />
                        <Route exact path="/project/kyungnam" component={Kyungnam} />
                        <Route exact path="/project/jaseng" component={Jaseng} />
                        <Route exact path="/project/daewoo" component={Daewoo} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;