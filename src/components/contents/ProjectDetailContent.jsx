import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../../resources/images/project/detail/menu.png';

const ProjectDetailContent = (props) => {
  const data = props.data;

  const makeTxt = useCallback(() => {
    const txtList = data.txt.map((elm, idx) => {
      return (
        <p key={`detail_txt_${idx}`} className="txt">{elm}</p>
      );
    });

    return txtList;
  }, [data]);

  const makeRoleList = useCallback(() => {
    const roleList = data.role.map((elm, idx) => {
      return (
        <li key={`role_${idx}`} className="list">{elm}</li>
      );
    });

    return roleList;
  }, [data]);

  return (
    <section className="sec project_detail">
      <div className="sec_inner">
        <Link className="project_detail_back" to="/portfolio/project" style={{ backgroundImage: `url(${MenuIcon})` }} title="목록으로">목록으로</Link>
        <h2 className="project_detail_tit">{this.state.data.subj}</h2>
        <div className="project_detail_img">
          <img src={require(`../../resources/images/project/detail/${this.state.data.img}.jpg`).default} alt="img"></img>
        </div>
        <div className="project_detail_txt">{makeTxt()}</div>
        <div className="project_detail_list">
          <ul className="list">
            <li className="item">
              사용기술 : <span>{this.state.data.tech}</span>
            </li>
            <li className="item">
              링크 : <a className="link" href={this.state.data.link} target="_blank" rel="noreferrer" title="새 창 열림">{this.state.data.link}</a>
            </li>
            <li className="item">
              담당업무 :
              <ul className="role_list">{makeRoleList()}</ul>
            </li>
          </ul>
        </div>
      </div>
    </section >
  );
}

export default ProjectDetailContent;