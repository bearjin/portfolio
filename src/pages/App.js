import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/structure/header';
import Footer from '../components/structure/footer';
import Main from '../pages/main';
import AboutContent from '../components/contents/aboutContent';
import CareerContent from '../components/contents/careerContent';
import ProjectContent from '../components/contents/projectContent';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/portfolio" component={Main} />
                        <Route exact path="/about" component={AboutContent} />
                        <Route exact path="/career" component={CareerContent} />
                        <Route exact path="/project" component={ProjectContent} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;