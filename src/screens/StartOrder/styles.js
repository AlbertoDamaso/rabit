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
    height: 200,
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
  bodyInfo: {
    width: '85%',
    marginHorizontal: 25,
    fontFamily: theme.fonts.text,
    color: theme.colors.light,
    fontSize: 16,
  },
  areaServ: {
    width: '80%',
    marginTop: 7,
    marginHorizontal: 20,
    flexDirection: 'row',
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
  areaBtn: {
    width: '80%',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
  },



});