import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header" className="header">
                <div className="header_inner">
                    <h1 className="logo"><a className="link" href="/portfolio">Home</a></h1>
                    <button className="btn-gnb">MENU</button>
                    <nav id="gnb" className="gnb_wrap">
                        <ul className="gnb_inner">
                            <li className="depth1"><a className="depth1_link" href="/portfolio/about">About</a></li>
                            <li className="depth1"><a className="depth1_link" href="/portfolio/project">Project</a></li>
                            <li className="depth1"><a className="depth1_link" href="/portfolio/career">Career</a></li>
                            <li className="depth1"><a className="depth1_link" href="https://bearjin.github.io/" target="_blank" rel="noreferrer" title="새 창 열림">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;