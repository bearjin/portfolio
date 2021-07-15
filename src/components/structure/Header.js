import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header id="header" className="header">
                <div className="header_inner">
                    <h1 className="logo"><a className="link" href="#/">Home</a></h1>
                    <button className="btn_menu" onClick={() => {
                        const $header = document.querySelector('.header');
                        $header.classList.toggle('open');
                    }}>
                        <span className="menu_bar"></span>
                        <span className="menu_text">Menu</span>
                    </button>
                    <nav id="gnb" className="gnb_wrap">
                        <ul className="gnb_inner">
                            <li className="depth1"><a className="depth1_link" href="#/about">About</a></li>
                            <li className="depth1"><a className="depth1_link" href="#/project">Project</a></li>
                            <li className="depth1"><a className="depth1_link" href="#/career">Career</a></li>
                            <li className="depth1"><a className="depth1_link" href="https://bearjin.github.io/" target="_blank" rel="noreferrer" title="새 창 열림">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </header >
        );
    }
}

export default Header;