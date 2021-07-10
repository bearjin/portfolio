import React, { Component } from 'react';

class ProjectDetail extends Component {
    render() {
        return (
            <section className="detail">
                <h2 className="detail_tit">더위버크리에이티브</h2>
                <div className="detail_img"></div>
                <p className="detail_txt"></p>
                <div className="detail_info">
                    <ul className="detail_list">
                        <li className="item">
                            <p className="name">주요기능</p>
                            <p className="info"></p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProjectDetail;