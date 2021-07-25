import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import PageMotion from './PageMotion';
import Header from './components/structure/Header';
import SubPage from './SubPage';
import Footer from './components/structure/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <ScrollToTop />
        <PageMotion />
        <Header />
        <SubPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;