import React, { Component } from 'react';

class CareerContent extends Component {
    render() {
        return (
            <section id="careerCont" className="sec career">
                <div className="sec_inner">
                    <h2 className="sec_subj">Career</h2>
                    <ul className="card_type_list">
                        <li className="item">
                            <div className="img">
                                <span className="icon"></span>
                            </div>
                            <p className="subj">더위버크리에이티브 <span className="role">UI개발팀 / Publisher</span></p>
                            <p className="date">2017.10 ~ 2021.06</p>
                        </li>
                    </ul>
                </div>
            </section >
        );
    }
}

export default CareerContent;