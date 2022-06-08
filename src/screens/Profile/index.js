import React, { useContext } from 'react';
import {
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { BtnDrawer } from '../../components/BtnDrawer';
import { ImgProfile } from '../../components/ImgProfile';
import { Button } from '../../components/Button';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';

export function Profile() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  function handleHome(){
    navigation.navigate('Reservar');
  }


  return (
    <Background>
      <View style={styles.container}>

        <BtnDrawer/>

        <View style={styles.areaProfile}>
          <ImgProfile
            style={styles.imageProfile}
          /> 
          <Text style={styles.nameProfile}>
            {user && user.name}  
          </Text>   
          <Text style={styles.revProfile}>
            reservas
          </Text>
          {/* <Text style={[styles.revProfile,{marginTop: 7}]}>
            retiradas
          </Text> */}
        </View>

        <View style={styles.areBtn}>
          <View style={styles.formatBtn}>
            <Button
              onPress={handleHome}
              title={'Reservar mais'}
              activeOpacity={0.7}
            />
          </View> 
          <View style={styles.formatBtn}>
            <Button
              title={'Retirar/Contato'}
              activeOpacity={0.7}
            />  
          </View>

          <Button
            title={'Sair'}
            activeOpacity={0.7}
            style={styles.btnOut}
          />                  
        </View>
      </View>
    </Background>
  );
}