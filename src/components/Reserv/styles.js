import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: 100,
    alignSelf: 'center',
    marginTop: 18,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  areaImg: {
    width: 65,
    height: 92,
  },
  image: {
    width: 65,
    height: 92,
    borderRadius: 8,
    resizeMode: 'cover'
  },
  areaInfo: {
    width: '80%',
    height: 100,
    marginTop: -5,
  },
  headerTipo: {
    width: '65%',
    flexDirection: 'row',
  },
  title: {
    width: '100%',
    height: 25,
    marginHorizontal: 20,
    fontFamily: theme.fonts.title,
    fontSize: 19,
    color: theme.colors.primary,
  },
  info: {
    width: '50%',
    marginHorizontal: 28,
    flexDirection: 'row',
  },
  text: {
    width: '80%',
    height: 22,
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: theme.fonts.text,
    color: theme.colors.light,
  },

});