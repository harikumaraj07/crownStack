import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './configs/routes.config';
import FullScreenLoader from './components/FullScreenLoader';

const propTypes = {
    fullScreenLoading: PropTypes.bool
};

const defaultProps = {
    fullScreenLoading: false,
};

const App = props => {

    const { fullScreenLoading } = props;

    return (
        <>
            <FullScreenLoader loading={fullScreenLoading} />
            <Routes />
        </>
    )
};

App.defaultProps = defaultProps;

App.propTypes = propTypes;

const mapStateToProps = state => ({
    fullScreenLoading: state.app.fullScreenLoading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
