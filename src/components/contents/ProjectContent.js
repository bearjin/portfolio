import React, { Component } from 'react';
import ProjectListData from '../../data/ProjectListData';

class ProjectContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectListData,
        }
    }
    makeProjectList() {
        const ProjectList = this.state.data.map((elm, idx) => {
            return (
                <li key={idx} className="item">
                    <a href={`#/project/${elm.link}`}>
                        <div className="img">
                            <img src={require(`../../resources/images/project/${elm.img}.png`).default} alt="img" />
                        </div>
                        <p className="subj">{elm.subj}</p>
                        <p className="date">{elm.date}</p>
                    </a>
                </li >
            );
        });

        return ProjectList;
    }

    render() {
        return (
            <section id="projectCont" className="sec project">
                <div className="sec_inner">
                    <h2 className="sec_subj">Project</h2>
                    <ul className="project_list">
                        {this.makeProjectList()}
                    </ul>
                </div>
            </section >
        );
    }
}

export default ProjectContent;