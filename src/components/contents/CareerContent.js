import React, { Component } from 'react';
import CareerDetail from './CareerDetail';

class CareerContent extends Component {
  render() {
    return (
      <section id="careerCont" className="sec career">
        <div className="sec_inner">
          <h2 className="sec_subj">Career</h2>
          <CareerDetail />
        </div>
      </section >
    );
  }
}

export default CareerContent;