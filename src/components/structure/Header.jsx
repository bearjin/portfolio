import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const headerShowHidden = () => {
  let _prevScrTop = 0, _currentScrTop, _prevDir, _currentDir;
  const $body = document.querySelector('body');

  return (current) => {
    if (current === 0) { $body.classList.remove('scrUp'); }

    _currentScrTop = current || 0;

    if (_prevScrTop === _currentScrTop) { return; }

    _currentDir = _currentScrTop > _prevScrTop ? 'scrDown' : 'scrUp';
    _prevScrTop = _currentScrTop;

    if (_prevDir === _currentDir) { return; }

    _prevDir = _currentDir;

    $body.classList.remove(_currentDir === 'scrUp' ? 'scrDown' : 'scrUp');
    $body.classList.add(_currentDir);
  };
}

const globalScroll = headerShowHidden();

document.addEventListener('scroll', () => {
  const _scrollTop = window.scrollY;
  globalScroll(_scrollTop);
});

const Header = () => {
  const onClickMenu = useCallback(() => {
    const $header = document.querySelector('.header');
    $header.classList.toggle('open');
  }, []);

  return (
    <header id="header" className="header">
      <div className="header__inner">
        <h1 className="header__logo"><Link className="header__logo-link" to="/portfolio">Home</Link></h1>
        <button className="header__menu" onClick={onClickMenu}>
          <span className="header__menu-bar"></span>
          <span className="header__menu-text">Menu</span>
        </button>
        <nav id="gnb" className="gnb">
          <ul className="gnb__inner">
            <li className="gnb__inner-item"><Link className="gnb__inner-link" to="/portfolio/about">About</Link></li>
            <li className="gnb__inner-item"><Link className="gnb__inner-link" to="/portfolio/project">Project</Link></li>
            <li className="gnb__inner-item"><Link className="gnb__inner-link" to="/portfolio/career">Career</Link></li>
            <li className="gnb__inner-item"><a className="gnb__inner-link" href="https://bearjin.github.io/" target="_blank" rel="noreferrer" title="새 창 열림">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header >
  );
}

export default Header;