import React, { Component, PropTypes } from 'react';

export default class Next extends Component {
    static propTypes = {
        server: PropTypes.bool.isRequired
    }
    static getInitialProps({ req }) {
        return {
            server: !!req
        };
    }
    render() {
        return (
            <div>This is {this.props.server ? 'server' : 'client'}-side render page.</div>
        );
    }
}
