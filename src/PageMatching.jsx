import React from 'react';
import Main from './pages/Main';
import About from './pages/About';
import Career from './pages/Career';
import Project from './pages/Project';

const PageMatching = ({ history, match, loaction }) => {
  console.log(match.params.name)
  if (match.params.name === 'about') {
    return <About />;
  } else if (match.params.name === 'career') {
    return <Career />;
  } else if (match.params.name === 'project') {
    return <Project />;
  }

  return (
    <Main />
  );
}

export default PageMatching;