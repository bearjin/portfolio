import React, { Component } from 'react';

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    makeTxt() {
        const txtList = this.state.data.txt.map((elm) => {
            return (
                <p className="txt">{elm}</p>
            )
        });

        return txtList;
    }

    makeRoleList() {
        const roleList = this.state.data.role.map((elm) => {
            return (
                <li className="list">{elm}</li>
            )
        });

        return roleList;
    }

    render() {
        return (
            <section className="project_detail">
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
                            링크 : <a className="link" href={this.state.data.link} target="_blank" rel="noreferrer">{this.state.data.link}</a>
                        </li>
                        <li className="item">
                            담당업무 :
                            <ul className="role_list">{this.makeRoleList()}</ul>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProjectDetail;