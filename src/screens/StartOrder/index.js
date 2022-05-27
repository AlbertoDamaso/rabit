import React, { useContext } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import imgBgHeader from '../../assets/ImgBgOfe-3.png';
import { Background } from '../../components/Background';
import { BtnLike } from '../../components/BtnLike';
import { BtnShare } from '../../components/BtnShare';
import { Button } from '../../components/Button';
import { BtnCount } from '../../components/BtnCount';
import { AreaObs } from '../../components/AreaObs';
import { BtnGoBack } from '../../components/BtnGoBack';
import { AppContext } from '../../contexts/app';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function StartOrder(data) {
  const navigation = useNavigation();
  const { resv } = useContext(AppContext);

  
  function handledOrder(){
    let keyBeer = data.route.params.key;
    
    console.log(`${keyBeer}`);
    resv(count, obs, keyBeer);
    navigation.navigate('Reservados');
  }

  return (
    <Background>      
      <ScrollView>
        <View>
            <Image
              source={{uri:data.route.params.image}}
              style={styles.imgBgHeader}
            />

            <BtnGoBack/>

            <View style={styles.areaShare}>
              <BtnShare/>
            </View>

            <View style={styles.areaLike}>
              <BtnLike/>
            </View>

        </View>

        <View style={styles.body}>
          <Text style={styles.title}>
            {data.route.params.title}
          </Text>

          <Text style={[styles.bodyInfo, {height: 25, fontFamily: theme.fonts.title, marginHorizontal:20}]}>
            Contém:
          </Text>
          <Text style={styles.bodyInfo}>
            {data.route.params.descplus}
          </Text>
         
        </View>

        <View style={styles.areaServ}>
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
            {data.route.params.valor}
          </Text>
        </View>

        <View style={styles.areaBtn}>
          <BtnCount/>

          <Button
            onPress={handledOrder}
            title={"Reservar"}
            activeOpacity={0.7}
          />
        </View>

        <AreaObs/>
      </ScrollView>
    </Background>        
  );
}