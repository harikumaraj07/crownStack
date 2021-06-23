import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../../templates/home.template';
import { getDataAction, setDetailsAction, toggleFullScreenLoadingAction } from '../../actions/app.actions';

const propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  getData: PropTypes.func,
  setDetails: PropTypes.func,
  navigation: PropTypes.object,
  toggleFullScreenLoading: PropTypes.func,
};

const defaultProps = {
  data: [],
  isLoading: false,
  getData: () => { },
  setDetails: () => { },
  navigation: {},
  toggleFullScreenLoading: () => {},
};

const HomeContainer = props => {
  const { getData, navigation: { navigate }, setDetails, toggleFullScreenLoading } = props;

  useEffect(() => {
    setTimeout(() => {
      toggleFullScreenLoading();
    }, 2000);
    getData();
  }, []);

  const onItemPress = item => {
    setDetails(item);
    navigate('details');
  };

  return <Home {...props} onItemPress={onItemPress} />;
};

HomeContainer.defaultProps = defaultProps;

HomeContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  data: state.app.data,
  isLoading: state.app.isLoading,
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getDataAction()),
  setDetails: payload => dispatch(setDetailsAction(payload)),
  toggleFullScreenLoading: () => dispatch(toggleFullScreenLoadingAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
