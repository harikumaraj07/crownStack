import { StyleSheet } from 'react-native';
import { heightPercent, widthPercent } from '../../utility/display.utils';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#dddddd',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fieldContainer: {
    marginBottom: 15,
  },
  topSection: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  artistImage: {
    height: widthPercent(20),
    width: widthPercent(20),
    borderRadius: widthPercent(10),
  },
  nameText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E384D',
  },
  midSection: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    paddingBottom: 50,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  genreWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
  genreContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2E384D',
  },
  genreText: {
    color: '#2E384D',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#777777',
  },
  copyrightText: {
    position: 'absolute',
    width: widthPercent(100),
    bottom: 10,
    left: 0,
    textAlign: 'center',
    color: '#777777',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  horizontalDivider: {
    width: 5,
  },
  costContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cccccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E384D',
  },
});

export default styles;
