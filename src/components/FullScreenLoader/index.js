import React from 'react';
import { ImageBackground, ActivityIndicator, Modal } from 'react-native';
import PropTypes from 'prop-types';

import { splashScreen } from '../../assets';
import styles from './styles';

const propTypes = {
  loading: PropTypes.bool,
};

const defaultProps = {
  loading: false,
};

const Loader = props => {
  const { loading } = props;

  return (
    <Modal transparent={true} animationType="fade" visible={loading}>
      <ImageBackground
        style={styles.container}
        source={splashScreen}
        resizeMode="cover"
      >
        <ActivityIndicator size="large" color="#2E384D" />
      </ImageBackground>
    </Modal>
  );
};

Loader.defaultProps = defaultProps;
Loader.propTypes = propTypes;

export default Loader;
