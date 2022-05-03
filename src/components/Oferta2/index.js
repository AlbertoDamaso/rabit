import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { styles } from './styles';

import img from '../../assets/ImgBgOfe-3.png';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export function Oferta2({ data }){
  return (
    // <TWF onLongPress={ () => deleteItem(data)}>
    <TWF>
        <View style={styles.container}>
            <View style={styles.areaTxt}>
                <Text style={styles.title}>
                {data.title}
                </Text>
                <Text style={styles.text}>
                {data.desc}
                </Text>
                <View style={styles.serve}>
                  <Feather
                    name={'user'}
                    size={20}
                    color={theme.colors.primary}
                  />
                  <Text style={styles.textServ}> 
                    Serve 1 Pessoa 
                  </Text> 
                </View>
                <Text style={styles.textValor}> 
                {data.valor} 
                </Text>
            </View>
            <View style={styles.areaImg}>
                <Image
                  source={img}//source={{uri:data.image}}
                  style={styles.image}
                />  
            </View>
        </View>
    </TWF>    
  );
}