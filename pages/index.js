import React, { Component, PropTypes } from 'react';
import css from 'next/css';

export default class Index extends Component {
    static propTypes = {
        url: PropTypes.shape({
            pushTo: PropTypes.func.isRequired
        })
    }
    onClick = () => {
        this.props.url.pushTo('/next');
    }
    render() {
        return (
            <div>
                <div className={style}>Hello world!</div>
                <button onClick={this.onClick}>Next</button>
            </div>
        );
    }
}

const style = css({
    color: 'red',
    ':hover': {
        color: 'gray'
    },
    '@media (max-width: 600px)': {
        color: 'blue'
    }
});
