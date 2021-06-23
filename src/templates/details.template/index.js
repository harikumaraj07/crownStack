import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
import styles from './styles';
import currency from '../../utility/currency.utils';

const propTypes = {
  details: PropTypes.object,
};

const defaultProps = {
  details: {},
};

const Details = props => {
  const { details } = props;

  return (
    <>
      <Header title={details.artistName || 'Details'} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={{
              uri: details.artworkUrl100,
            }}
            style={styles.artistImage}
          />
          <Text style={styles.nameText}>{details.artistName}</Text>
        </View>
        <View style={styles.midSection}>
          <Text style={styles.subTitle}>{details.trackName}{!!details.trackName && !!details.collectionName && ' - '}{details.collectionName ? `${details.collectionName} (Collection)` : ''}</Text>
          <View style={styles.genreWrapper}>
            <View style={styles.genreContainer}>
              <Text style={styles.genreText}>{details.primaryGenreName}</Text>
            </View>
            {
              !!details.kind &&
              <>
                <View style={styles.horizontalDivider} />
                <View style={styles.genreContainer}>
                  <Text style={styles.genreText}>{details.kind}</Text>
                </View>
              </>
            }
            {
              !!details.contentAdvisoryRating &&
              <>
                <View style={styles.horizontalDivider} />
                <View style={styles.genreContainer}>
                  <Text style={styles.genreText}>{details.contentAdvisoryRating}</Text>
                </View>
              </>
            }
          </View>
          {
            !!(details.description || details.longDescription || details.shortDescription) &&
            <Text style={styles.description}>
              {details.description || details.longDescription || details.shortDescription}
            </Text>
          }
          {
            !!details.trackPrice &&
            <TouchableOpacity style={styles.costContainer}>
              <Text style={styles.priceText}>Buy Track at {details.trackPrice} {currency[details.currency]}</Text>
              <Icon name="cart-plus" size={30} color="#2E384D" />
            </TouchableOpacity>
          }
          <TouchableOpacity style={styles.costContainer}>
            <Text style={styles.priceText}>Buy Collection at {details.collectionPrice} {currency[details.currency]}</Text>
            <Icon name="cart-plus" size={30} color="#2E384D" />
          </TouchableOpacity>
        </View>
        {!!details.copyright && <Text style={styles.copyrightText}>{details.copyright}</Text>}
      </ScrollView>
    </>
  );
};

Details.defaultProps = defaultProps;

Details.propTypes = propTypes;

export default Details;
