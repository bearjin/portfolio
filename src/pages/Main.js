import React from 'react';
import { Tablet, Pc } from '../components/contents/Responsive';
import HomeContent from '../components/contents/HomeContent';
import AboutContent from '../components/contents/AboutContent';
import CareerContent from '../components/contents/CareerContent';
import ProjectContent from '../components/contents/ProjectContent';
import MainSwiper from '../components/contents/SwiperContent';

const Main = () => {
  return (
    <>
      <HomeContent />
      <Tablet>
        <AboutContent />
        <ProjectContent />
        <CareerContent />
      </Tablet>
      <Pc>
        <MainSwiper components={[<AboutContent />, <ProjectContent />, <CareerContent />]} />
      </Pc>
    </>
  );
}

export default Main;