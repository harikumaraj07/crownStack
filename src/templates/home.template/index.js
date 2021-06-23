import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Item from '../../components/Item';
import Loader from '../../components/Loader';
import styles from './styles';

const propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  data: [],
  isLoading: false,
};

const HomeTemplate = props => {
  const { data, isLoading, getData } = props;

  return (
    <View style={styles.wrapper}>
      <Header title="Home" leftIcon={null} />
      <View style={styles.container}>
        {
          isLoading
            ? <Loader containerStyle={styles.containerStyle} />
            : <FlatList
            keyExtractor={(item, index) => `item-${index}`}
              data={data}
              renderItem={({ item }) => <Item {...props} item={item} />}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={getData}
                />
              }
            />
        }
      </View>
    </View>
  );
};

HomeTemplate.defaultProps = defaultProps;

HomeTemplate.propTypes = propTypes;

export default HomeTemplate;
