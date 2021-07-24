import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/structure/Header';
import SubPage from './SubPage';
import Footer from './components/structure/Footer';
import ScrollToTop from './ScrollToTop';
import PageMotion from './PageMotion';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SubPage />
          <Footer />
          <ScrollToTop />
          <PageMotion />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;