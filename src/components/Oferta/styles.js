import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 300,
    marginTop: 8,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secundaryMais,
    backgroundColor: theme.colors.secundaryMais,
  },
  areaImg: {
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: 150,
  },
  areaTxt: {
    marginVertical: 20
  },
  title: {
    width: 140,
    height: 42,
    marginHorizontal: 5,
    fontFamily: theme.fonts.title,
    fontSize: 14,
    color: theme.colors.light,
  },
  text: {
    height: 55,
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: theme.fonts.text,
    color: theme.colors.light,
  },
  textValor: {
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: theme.fonts.text,
    color: theme.colors.success,
  },
});