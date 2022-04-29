import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import imgBgHeader from '../../assets/bg.png';
import { AreaEmp } from '../../components/AreaEmp';
import { Background } from '../../components/Background'
import { BtnDrawer } from '../../components/BtnDrawer';
import { BtnShare } from '../../components/BtnShare';
import { styles } from './styles';

export function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <View>
          <Image
            source={imgBgHeader}
            style={styles.imgBgHeader}
          />
          <BtnDrawer/>
          <View style={styles.areaShare}>
            <BtnShare/>
          </View>
        </View>
        <View>
          <AreaEmp title = {"Rabit - Cerveja Artesanais"}/>
        </View>
      </View>
    </Background>
  );
}