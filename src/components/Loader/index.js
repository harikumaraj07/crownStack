import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
  size: PropTypes.string,
  containerStyle: PropTypes.object,
};

const defaultProps = {
  size: 'large',
  containerStyle: {},
};

const Loader = props => {
  const {size, containerStyle} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color="#2E384D" />
      <Text style={styles.loadingText}>Please wait</Text>
    </View>
  );
};

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;

export default Loader;
