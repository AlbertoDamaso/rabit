import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import imgBgHeader from '../../assets/bg.png';
import { BtnDrawer } from '../../components/BtnDrawer';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={imgBgHeader}
        style={styles.imgBgHeader}
      />
      <BtnDrawer/>

    </View>
  );
}