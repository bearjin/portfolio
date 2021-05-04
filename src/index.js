import './resources/css/common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import AboutContent from './component/about/aboutContent';
import CareerContent from './component/career/careerContent';
import ProjectContent from './component/project/projectContent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutContent />
    <CareerContent />
    <ProjectContent />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
