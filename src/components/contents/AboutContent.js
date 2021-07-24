import React, { Component } from 'react';
import { AboutIntroData, AboutSkillData } from '../../data/AboutData';

class AboutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IntroData: AboutIntroData,
      SkillData: AboutSkillData
    }
  }

  makeIntroLink() {
    const links = this.state.IntroData.links.map((elm, idx) => {
      return (
        <a key={idx} className="link" href={elm.link} target="_blank" rel="noreferrer" title="새 창 열림">{elm.name}</a>
      );
    });
    return links;
  }

  makeSkillArea() {
    const skills = this.state.SkillData.map((elm, idx) => {
      return (
        <div key={idx} className="skills">
          <h3 className="subj">{elm.subj}</h3>
          <ul className="skill_list">
            {this.makeSkillList(idx)}
          </ul>
        </div>
      );
    });
    return skills;
  }

  makeSkillList(areaIdx) {
    const lists = this.state.SkillData[areaIdx].skills.map((elm, idx) => {
      return (
        <li key={idx} className="item" data-item={elm.data}>
          <p className="name">{elm.name}</p>
          <div className="info">
            <div className="img"><img src={require(`../../resources/images/about/${elm.img}.png`).default} alt="img" /></div>
            <div className="rank">{this.makeRankMeter(elm.rank)}</div>
          </div>
        </li>
      );
    });
    return lists;
  }

  makeRankMeter(rankNum) {
    let ranks = [];
    for (let index = 0; index < 10; index++) {
      if (index < rankNum) {
        ranks.push(<span key={index} className="rank_meter active"></span>);
      } else {
        ranks.push(<span key={index} className="rank_meter"></span>);
      }
    }
    return ranks;
  }

  render() {
    return (
      <section id="aboutCont" className="sec about">
        <div className="sec_inner">
          <h2 className="sec_subj">ABOUT</h2>
          <div className="about_intro">
            <p className="name">{this.state.IntroData.name}</p>
            <p className="txt">{this.state.IntroData.txt}</p>
            <a className="email" href={`mailto:${this.state.IntroData.email}`} target="_blank" rel="noreferrer" title="새 창 열림">{this.state.IntroData.email}</a>
            <ul className="links">
              {this.makeIntroLink()}
            </ul>
          </div>
          <div className="about_skill">
            {this.makeSkillArea()}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;