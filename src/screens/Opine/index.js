import React, {useState, useContext} from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { BtnLike } from '../../components/BtnLike';
import { BtnShare } from '../../components/BtnShare';
import { AreaOpine } from '../../components/AreaOpine';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { BtnGoBack } from '../../components/BtnGoBack';
import { AppContext } from '../../contexts/app';


export function Opine(data) {
  const navigation = useNavigation();
  const [opinion, setOpinion] = useState('');
  const { opine } = useContext(AppContext);

  function handleOpine(){
    let nameBeer = data.route.params.title;

    opine(nameBeer, opinion, 5);

    setOpinion('');
    navigation.navigate('Reservar');
  }

  return (
    <Background>      
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

        <AreaOpine
          value={opinion}
          onChangeText={ (text) => setOpinion(text) }
        />

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
            // name="star-half-empty"
            name="star"
            size={24}
            color={theme.colors.primary}
          />  
        </View> 
                                    
      </View>
      <View style={styles.formatBtn}>
        <Button
          onPress={handleOpine}
          title={"Opinar"}
          activeOpacity={0.7}
        />
      </View>
    </Background>
  );
}