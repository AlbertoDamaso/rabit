import React from 'react';
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
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { BtnCount } from '../../components/BtnCount';
import { AreaObs } from '../../components/AreaObs';
import { BtnGoBack } from '../../components/BtnGoBack';

export function StartOrder() {
  const navigation = useNavigation();

  function handledOrder(){
    navigation.navigate('Reservados')
  }

  return (
    <Background>      
      <ScrollView>
        <View>
            <Image
              source={imgBgHeader}
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
            [Novo] Pilsen Premium
          </Text>

          <Text style={[styles.bodyInfo, {height: 25, fontFamily: theme.fonts.title, marginHorizontal:20}]}>
            O mais pedido! Contém:
          </Text>
          <Text style={styles.bodyInfo}>
            .Cevada 7dias dentro de barril cervejeiro;
          </Text>
          <Text style={styles.bodyInfo}>
            .6% de álcool;
          </Text>
          <Text style={styles.bodyInfo}>
            .Aromas amazonicos;
          </Text>
          <Text style={styles.bodyInfo}>
            .Frescor da Pilsen que todo ferão pede;
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
            R$ 12,99
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