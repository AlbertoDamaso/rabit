import React, { useContext, useState } from 'react';
import {
  View,
  Image,
  Text,
  Keyboard
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { BtnLike } from '../../components/BtnLike';
import { BtnShare } from '../../components/BtnShare';
import { Button } from '../../components/Button';
import { BtnCount }  from '../../components/BtnCount';
import { AreaObs } from '../../components/AreaObs';
import { BtnGoBack } from '../../components/BtnGoBack';
import { AppContext } from '../../contexts/app';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function StartOrder(data) {
  const navigation = useNavigation();
  const { resv } = useContext(AppContext);
  const [count, setCount] = useState(1);
  const [obs, setObs] = useState('');

  //Contadores
  function minus(){
      if(count > 0){
          setCount(count-1)
      }
  }
  function plus(){
      setCount(count+1)
  }


  function handledOrder(){
    let key = data.route.params.key;
    let title = data.route.params.title;
    let image = data.route.params.image;
    
    resv(count, obs, title, image,key);

    setCount(1);
    setObs('');
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
          <BtnCount 
            minus={minus}
            plus={plus}
            count={count}
          />

          <Button
            onPress={handledOrder}
            title={"Reservar"}
            activeOpacity={0.7}
          />
        </View>

        <View>
          <AreaObs
            editable
            maxLength={140}
            returnKeyType="next"
            onSubmitEditing={ () => Keyboard.dismiss()}
            autoCorrect={false}
            autoCapitalize="none"          
            value={obs}
            onChangeText={ (text) => setObs(text) }
          />
        </View>
      </ScrollView>
    </Background>        
  );
}