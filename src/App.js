import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Main from './pages/main';
import About from './pages/about';
import Career from './pages/career';
import Project from './pages/project';
import OnlineShop from './pages/project/onlineShop';
import Hanwha from './pages/project/hanwha';
import OnlineSale from './pages/project/onlineSale';
import Kelim from './pages/project/kelim';
import Kyungnam from './pages/project/kyungnam';
import Jaseng from './pages/project/jaseng';
import Daewoo from './pages/project/daewoo';

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