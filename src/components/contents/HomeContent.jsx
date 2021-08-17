import React, { useCallback, useEffect } from 'react';

const Home = () => {
  const textMotion = useCallback(() => {
    const dataText = ["Hello World.", "끊임없이 성장하고 소통하는 개발자가 되겠습니다.", "Web Publisher.", "Bearjin"];
    const typeWriter = (text, i, fnCallback) => {
      if (i < (text.length)) {
        if (document.querySelector(".typewriter")) {
          document.querySelector(".typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(() => {
            typeWriter(text, i + 1, fnCallback)
          }, 150);
        }
      }
      else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 700);
      }
    }
    const StartTextAnimation = (i) => {
      if (typeof dataText[i] === 'undefined') {
        setTimeout(() => {
          StartTextAnimation(0);
        }, 20000);
        return;
      }
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, () => {
          StartTextAnimation(i + 1);
        });
      }
    }
    StartTextAnimation(0);
  }, []);

  useEffect(() => {
    textMotion();
  }, [textMotion]);

  return (
    <section id="homeCont" className="home">
      <p className="typewriter"></p>
    </section>
  );
}

export default Home;