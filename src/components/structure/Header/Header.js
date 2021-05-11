import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header id="header" className="header">
                <div className="header_inner">
                    <h1 className="logo"><a href="index.html">logo</a></h1>
                    <button className="btn-gnb">MENU</button>
                    <nav id="gnb" className="gnb_wrap">
                        <ul className="gnb_inner">
                            <li className="home">HOME</li>
                            <li className="about">ABOUT ME</li>
                            <li className="career">CAREER</li>
                            <li className="portfolio">PORTFOLIO</li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;