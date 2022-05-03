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
    height: 90,
  },
  image: {
    width: 65,
    height: 90,
    borderRadius: 8,
    resizeMode: 'cover'
  },
  areaTxt: {
    width: '80%',
  },
  title: {
    width: '100%',
    height: 25,
    marginHorizontal: 5,
    fontFamily: theme.fonts.title,
    fontSize: 14,
    color: theme.colors.light,
  },
  serve:{
    flexDirection: 'row',
  },  
  textServ: {
    width: '80%',
    height: 20,
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: theme.fonts.title,
    color: theme.colors.primary,
  },
  text: {
    width: '80%',
    height: 22,
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: theme.fonts.text,
    color: theme.colors.light,
  },
  textValor: {
    height: 20,
    marginTop: 4,
    fontSize: 14,
    marginHorizontal: 4,
    fontFamily: theme.fonts.text,
    color: theme.colors.success,
  },
});