import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const _prevScrTop = useRef(0);
  const _currentScrTop = useRef();
  const _prevDir = useRef();
  const _currentDir = useRef();

  const headerShowHidden = useCallback((_current) => {
    const $body = document.querySelector('body');

    if (_current === 0) { $body.classList.remove('scrUp'); }

    _currentScrTop.current = _current || 0;

    if (_prevScrTop.current === _currentScrTop.current) { return; }

    _currentDir.current = _currentScrTop.current > _prevScrTop.current ? 'scrDown' : 'scrUp';
    _prevScrTop.current = _currentScrTop.current;

    if (_prevDir.current === _currentDir.current) { return; }

    _prevDir.current = _currentDir.current;

    $body.classList.remove(_currentDir.current === 'scrUp' ? 'scrDown' : 'scrUp');
    $body.classList.add(_currentDir.current);
  }, []);

  document.addEventListener('scroll', () => {
    const _scrollTop = window.scrollY;
    headerShowHidden(_scrollTop);
  });

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