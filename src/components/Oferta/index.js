import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import img from '../../assets/ImgBgOfe-3.png';

export function Oferta({ data }){
  const navigation = useNavigation();

  function handleStartOrder(){
    navigation.navigate('StartOrder');
  }

  return (
    <TWF
      onPress={(handleStartOrder)}
    // onLongPress={ () => deleteItem(data)}
    >
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