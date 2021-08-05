import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../resources/images/project/detail/menu.png';

const ProjectDetailContent = (props) => {
  const data = props.data;

  const makeTxt = useCallback(() => {
    const txtList = data.txt.map((elm, idx) => {
      return (
        <p key={`detail_txt_${idx}`} className="project-detail__txt">{elm}</p>
      );
    });

    return txtList;
  }, [data]);

  const makeRoleList = useCallback(() => {
    const roleList = data.role.map((elm, idx) => {
      return (
        <li key={`role_${idx}`} className="project-detail__role">{elm}</li>
      );
    });

    return roleList;
  }, [data]);

  return (
    <section className="sec project-detail">
      <div className="sec__inner">
        <Link className="project-detail__back" to="/portfolio/project" style={{ backgroundImage: `url(${MenuIcon})` }} title="목록으로">목록으로</Link>
        <h2 className="project-detail__tit">{data.subj}</h2>
        <div className="project-detail__img">
          <img src={require(`../../resources/images/project/detail/${data.img}.jpg`).default} alt={data.img}></img>
        </div>
        <div className="project-detail__info">{makeTxt()}</div>
        <div className="project-detail__area">
          <ul className="project-detail__list">
            <li className="project-detail__item">
              사용기술 : <span>{data.tech}</span>
            </li>
            <li className="project-detail__item">
              링크 : <a className="project-detail__link" href={data.link} target="_blank" rel="noreferrer" title="새 창 열림">{data.link}</a>
            </li>
            <li className="project-detail__item">
              담당업무 :
              <ul className="project-detail__roles">{makeRoleList()}</ul>
            </li>
          </ul>
        </div>
      </div>
    </section >
  );
}

export default ProjectDetailContent;