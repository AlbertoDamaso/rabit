import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { FontAwesome } from '@expo/vector-icons';

import imgBgHeader from '../../assets/ImgBgOfe-3.png';
import { Background } from '../../components/Background';
import { BtnLike } from '../../components/BtnLike';
import { BtnShare } from '../../components/BtnShare';
import { AreaOpine } from '../../components/AreaOpine';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { BtnGoBack } from '../../components/BtnGoBack';


export function Opine() {
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

          <AreaOpine/>

          <View style={styles.areaStar}>
            <FontAwesome
              name="star"
              size={24}
              color={theme.colors.primary}
            />
            <FontAwesome
              name="star"
              size={24}
              color={theme.colors.primary}
            />
            <FontAwesome
              name="star"
              size={24}
              color={theme.colors.primary}
            />
            <FontAwesome
              name="star"
              size={24}
              color={theme.colors.primary}
            />
            <FontAwesome
              name="star-half-empty"
              size={24}
              color={theme.colors.primary}
            />  
          </View> 
                                     
        </View>
        <View style={styles.formatBtn}>
          <Button
            title={"Opinar"}
            activeOpacity={0.7}
          />
        </View>
      </ScrollView>
    </Background>
  );
}