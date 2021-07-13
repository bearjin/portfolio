import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/structure/Header';
import Footer from '../components/structure/Footer';
import Main from './Main';
import About from './about/About';
import Career from './career/Career';
import Project from './project/Project';
import OnlineShop from './project/detail/OnlineShop';
import Hanwha from './project/detail/Hanwha';
import OnlineSale from './project/detail/OnlineSale';
import Kelim from './project/detail/Kelim';
import Kyungnam from './project/detail/Kyungnam';
import Jaseng from './project/detail/Jaseng';
import Daewoo from './project/detail/Daewoo';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/portfolio" component={Main} />
                        <Route exact path="/portfolio/about" component={About} />
                        <Route exact path="/portfolio/career" component={Career} />
                        <Route exact path="/portfolio/project" component={Project} />
                        <Route exact path="/portfolio/project/onlineShop" component={OnlineShop} />
                        <Route exact path="/portfolio/project/hanwha" component={Hanwha} />
                        <Route exact path="/portfolio/project/onlineSale" component={OnlineSale} />
                        <Route exact path="/portfolio/project/kelim" component={Kelim} />
                        <Route exact path="/portfolio/project/kyungnam" component={Kyungnam} />
                        <Route exact path="/portfolio/project/jaseng" component={Jaseng} />
                        <Route exact path="/portfolio/project/daewoo" component={Daewoo} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;