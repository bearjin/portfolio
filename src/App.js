import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        );
    }
}

export default App;