import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
        this.textMotion();
    }

    textMotion() {
        var dataText = ["Hello World.", "열정을 가지고 소통하는 개발자가 되겠습니다.", "Front-end developer.", "Bearjin"];

        function typeWriter(text, i, fnCallback) {
            if (i < (text.length)) {
                if (document.querySelector(".typewriter")) {
                    document.querySelector(".typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                    setTimeout(() => {
                        typeWriter(text, i + 1, fnCallback)
                    }, 100);
                }
            }
            else if (typeof fnCallback === 'function') {
                setTimeout(fnCallback, 700);
            }
        }
        function StartTextAnimation(i) {
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
    }

    render() {
        return (
            <section id="homeCont" className="home">
                <p className="typewriter"></p>
            </section>
        );
    }
}

export default Home;