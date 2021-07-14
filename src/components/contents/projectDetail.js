import React, { Component } from 'react';
import MenuIcon from '../../resources/images/project/detail/menu.png';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    makeTxt() {
        const txtList = this.state.data.txt.map((elm, idx) => {
            return (
                <p key={idx} className="txt">{elm}</p>
            );
        });

        return txtList;
    }

    makeRoleList() {
        const roleList = this.state.data.role.map((elm, idx) => {
            return (
                <li key={idx} className="list">{elm}</li>
            );
        });

        return roleList;
    }

    render() {
        return (
            <section className="sec project_detail">
                <div className="sec_inner">
                    <a className="project_detail_back" href="#/project" style={{ backgroundImage: `url(${MenuIcon})` }} title="목록으로">목록으로</a>
                    <h2 className="project_detail_tit">{this.state.data.subj}</h2>
                    <div className="project_detail_img">
                        <img src={require(`../../resources/images/project/detail/${this.state.data.img}.jpg`).default} alt="img"></img>
                    </div>
                    <div className="project_detail_txt">{this.makeTxt()}</div>
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
                                <ul className="role_list">{this.makeRoleList()}</ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProjectDetail;