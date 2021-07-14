import { Component } from 'react';
import { withRouter } from "react-router-dom";

class PageMotion extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const $sec = document.querySelector('.sec');
            const $header = document.querySelector('.header');

            $sec.classList.add('page-enter');

            setTimeout(() => {
                $sec.classList.remove('page-enter');
            }, 300);

            if ($header.matches('.open')) {
                $header.classList.remove('open');
            }
        }
    }

    render() {
        return null;
    }
}

export default withRouter(PageMotion);