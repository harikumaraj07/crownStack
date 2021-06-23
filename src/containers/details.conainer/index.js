import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Details from '../../templates/details.template';
import { setDetailsAction } from '../../actions/app.actions';

const propTypes = {
  setDetails: PropTypes.func,
};

const defaultProps = {
  setDetails: () => {},
};

const DetailsContainer = props => {
  const {setDetails} = props;

  useEffect(() => {
    return setDetails;
  }, []);

  return <Details {...props} />;
};

DetailsContainer.defaultProps = defaultProps;

DetailsContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  details: state.app.details,
});

const mapDispatchToProps = dispatch => ({
  setDetails: () => dispatch(setDetailsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
