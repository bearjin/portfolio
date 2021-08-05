import React, { useMemo } from 'react';
import { AboutIntroData, AboutSkillData } from '../../data/AboutData';

const makeIntroLink = (data) => {
  const links = data.links.map((elm, idx) => {
    return (
      <a key={idx} className="about-intro__link" href={elm.link} target="_blank" rel="noreferrer" title="새 창 열림">{elm.name}</a>
    );
  });
  return links;
};

const makeRankMeter = (rankNum) => {
  let ranks = [];
  for (let index = 0; index < 10; index++) {
    if (index < rankNum) {
      ranks.push(<span key={index} className="about-skills__meter about-skills__meter--active"></span>);
    } else {
      ranks.push(<span key={index} className="about-skills__meter"></span>);
    }
  }
  return ranks;
};

const makeSkillList = (data) => {
  const lists = data.skills.map((elm, idx) => {
    return (
      <li key={idx} className="about-skills__item" data-item={elm.data}>
        <p className="about-skills__name">{elm.name}</p>
        <div className="about-skills__info">
          <div className="about-skills__img"><img src={require(`../../resources/images/about/${elm.img}.png`).default} alt={elm.img} /></div>
          <div className="about-skills__rank">{makeRankMeter(elm.rank)}</div>
        </div>
      </li>
    );
  });
  return lists;
};

const makeSkillArea = (data) => {
  const skills = data.map((elm, idx) => {
    return (
      <div key={idx} className="about-skills">
        <h3 className="about-skills__subj">{elm.subj}</h3>
        <ul className="about-skills__list">
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
      <div className="sec__inner">
        <h2 className="sec__subj">ABOUT</h2>
        <div className="about-intro">
          <p className="about-intro__name">{introData.name}</p>
          <p className="about-intro__txt">{introData.txt}</p>
          <a className="about-intro__email" href={`mailto:${introData.email}`} target="_blank" rel="noreferrer" title="새 창 열림">{introData.email}</a>
          <ul className="about-intro__links">
            {links}
          </ul>
        </div>
        <div className="about-skill">
          {skillArea}
        </div>
      </div>
    </section>
  );
}

export default AboutContent;