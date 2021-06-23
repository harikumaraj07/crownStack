import {StyleSheet} from 'react-native';
import {widthPercent, heightPercent} from '../../utility/display.utils';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    marginTop: 70,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  containerStyle: {
    height: heightPercent(100),
    width: widthPercent(100),
  },
});

export default styles;
