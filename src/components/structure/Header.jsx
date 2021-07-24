import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const onClickMenu = useCallback(() => {
    const $header = document.querySelector('.header');
    $header.classList.toggle('open');
  }, []);

  return (
    <header id="header" className="header">
      <div className="header_inner">
        <h1 className="logo"><Link className="link" to="/portfolio">Home</Link></h1>
        <button className="btn_menu" onClick={onClickMenu}>
          <span className="menu_bar"></span>
          <span className="menu_text">Menu</span>
        </button>
        <nav id="gnb" className="gnb_wrap">
          <ul className="gnb_inner">
            <li className="depth1"><Link className="depth1_link" to="/portfolio/about">About</Link></li>
            <li className="depth1"><Link className="depth1_link" to="/portfolio/project">Project</Link></li>
            <li className="depth1"><Link className="depth1_link" to="/portfolio/career">Career</Link></li>
            <li className="depth1"><a className="depth1_link" href="https://bearjin.github.io/" target="_blank" rel="noreferrer" title="새 창 열림">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header >
  );
}

export default Header;