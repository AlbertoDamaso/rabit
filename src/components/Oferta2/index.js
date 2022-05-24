import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback as TWF
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Oferta2({ data }){
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
                  source={{uri:data.image}}
                  style={styles.image}
                />  
            </View>
        </View>
    </TWF>    
  );
}