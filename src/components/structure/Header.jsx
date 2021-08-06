import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const onClickMenu = useCallback(() => {
    const $header = document.querySelector('.header');
    $header.classList.toggle('open');
  }, []);

  return (
    <header id="header" className="header">
      <div className="header-inner">
        <h1 className="header-logo"><Link className="header-logo__link" to="/portfolio">Home</Link></h1>
        <button className="header-menu" onClick={onClickMenu}>
          <span className="header-menu__bar"></span>
          <span className="header-menu__text">Menu</span>
        </button>
        <nav id="gnb" className="gnb">
          <ul className="gnb-inner">
            <li className="gnb-inner__item"><Link className="gnb-inner__link" to="/portfolio/about">About</Link></li>
            <li className="gnb-inner__item"><Link className="gnb-inner__link" to="/portfolio/project">Project</Link></li>
            <li className="gnb-inner__item"><Link className="gnb-inner__link" to="/portfolio/career">Career</Link></li>
            <li className="gnb-inner__item"><a className="gnb-inner__link" href="https://bearjin.github.io/" target="_blank" rel="noreferrer" title="새 창 열림">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header >
  );
}

export default Header;