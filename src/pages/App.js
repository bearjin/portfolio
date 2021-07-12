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
import OnlineShop from './project/detail/onlineShop';
import HanWha from './project/detail/hanWha';
import OnlineSale from './project/detail/onlineSale';
import Kelim from './project/detail/kelim';
import KyungNam from './project/detail/kyungNam';

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
                        <Route exact path="/project/onlineShop" component={OnlineShop} />
                        <Route exact path="/project/hanWha" component={HanWha} />
                        <Route exact path="/project/onlineSale" component={OnlineSale} />
                        <Route exact path="/project/kelim" component={Kelim} />
                        <Route exact path="/project/kyungnam" component={KyungNam} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;