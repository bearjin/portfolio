import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

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