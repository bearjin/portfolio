import React, { useMemo } from 'react';
import { AboutIntroData, AboutSkillData } from '../../data/AboutData';

const makeIntroLink = (data) => {
  const links = data.links.map((elm, idx) => {
    return (
      <a key={idx} className="link" href={elm.link} target="_blank" rel="noreferrer" title="새 창 열림">{elm.name}</a>
    );
  });
  return links;
};

const makeRankMeter = (rankNum) => {
  let ranks = [];
  for (let index = 0; index < 10; index++) {
    if (index < rankNum) {
      ranks.push(<span key={index} className="rank_meter active"></span>);
    } else {
      ranks.push(<span key={index} className="rank_meter"></span>);
    }
  }
  return ranks;
};

const makeSkillList = (data) => {
  const lists = data.skills.map((elm, idx) => {
    return (
      <li key={idx} className="item" data-item={elm.data}>
        <p className="name">{elm.name}</p>
        <div className="info">
          <div className="img"><img src={require(`../../resources/images/about/${elm.img}.png`).default} alt="img" /></div>
          <div className="rank">{makeRankMeter(elm.rank)}</div>
        </div>
      </li>
    );
  });
  return lists;
};

const makeSkillArea = (data) => {
  const skills = data.map((elm, idx) => {
    return (
      <div key={idx} className="skills">
        <h3 className="subj">{elm.subj}</h3>
        <ul className="skill_list">
          {makeSkillList(elm)}
        </ul>
      </div>
    );
  });
  return skills;
};

const AboutContent = () => {
  const introData = AboutIntroData;
  const skillData = AboutSkillData;
  const links = useMemo(() => makeIntroLink(introData), [introData]);
  const skillArea = useMemo(() => makeSkillArea(skillData), [skillData]);

  return (
    <section id="aboutCont" className="sec about">
      <div className="sec_inner">
        <h2 className="sec_subj">ABOUT</h2>
        <div className="about_intro">
          <p className="name">{introData.name}</p>
          <p className="txt">{introData.txt}</p>
          <a className="email" href={`mailto:${introData.email}`} target="_blank" rel="noreferrer" title="새 창 열림">{introData.email}</a>
          <ul className="links">
            {links}
          </ul>
        </div>
        <div className="about_skill">
          {skillArea}
        </div>
      </div>
    </section>
  );
}

export default AboutContent;