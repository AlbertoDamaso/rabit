import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity as TO,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import img from '../../assets/ImgBgOfe-3.png';

export function Reserv({ data }){
  const navigation = useNavigation();

  function handleOpine(){
    navigation.navigate('Opinar', data);
  }

  return (

    <View style={styles.container}>
        <View style={styles.areaImg}>
            <Image
                source={{uri:data.image}}
                style={styles.image}
            />  
        </View>            
        <View style={styles.areaInfo}>
            <View style={styles.headerTipo}>
                <Text style={styles.title}>
                    {data.title}
                </Text>

                <TO>
                    <Feather
                        name="more-horizontal"
                        size={30}
                        color={theme.colors.primary}
                    />
                </TO>
            </View>

            <View style={styles.info}>
                <Text style={styles.text}>
                    {data.quant} reservas
                </Text>
                <Text style={styles.text}>
                    {data.quantRetir} retiradas
                </Text>
            </View>  

            <Button
                onPress={handleOpine}
                title={"Opine"}
                activeOpacity={0.7}
            />                  
        </View>

    </View>
  );
}