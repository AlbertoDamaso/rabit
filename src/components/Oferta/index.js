import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { styles } from './styles';

import img from '../../assets/ImgBgOfe-3.png';

export function Oferta({ data }){
  return (
    // <TWF onLongPress={ () => deleteItem(data)}>
    <TWF>
      <View style={styles.container}>
        <View style={styles.areaImg}>
          <Image
            source={img}//source={{uri:data.image}}
            style={styles.image}
          />  
        </View>
        <View style={styles.areaTxt}>
          <Text style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.text}>
            {data.desc}
          </Text>
          <Text style={styles.textValor}> 
            {data.valor} 
          </Text>
        </View>
      </View>
    </TWF>    
  );
}