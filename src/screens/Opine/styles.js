import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imgBgHeader: {
    width: '100%',
    height: 380,
    resizeMode: 'stretch',
    opacity: 0.7,
  },
  areaShare: {
    width: '83%',
    position: 'absolute',
  },
  areaLike: {
    width: '95%',
    position: 'absolute',
  },
  body: {
    width: '100%',
    height: 250,
    backgroundColor: theme.colors.secundaryMais,
  },
  title: {
    height: 30,
    marginTop: 22,
    marginHorizontal: 18,
    fontFamily: theme.fonts.title,
    color: theme.colors.light,
    fontSize: 19,
  },
  areaStar: {
    marginTop: 25,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  formatBtn: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});