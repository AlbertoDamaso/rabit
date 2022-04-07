import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from '../SignIn/styles';

export function SignUp() {
  const navigation = useNavigation();

  function handleSignUp(){
    navigation.navigate('AppRoutes');
  }

  function handleSignIn(){
    navigation.navigate('SignIn')
  }

  return (
    <Background>
      <Logo style={styles.logo}/>

      <View style={styles.areaInput}>
        <Input
        placeholder="Nome"
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss()}
        />
        <Input
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss()}
        />
        <Input
        placeholder="Senha"
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss()}
        />
      </View>

      <View style={styles.areaBtn}>
        <Button
          onPress={(handleSignUp)}
          title={"Cadastrar"}
          activeOpacity={0.7}
        />
        <Text style={styles.link}>
          Cadastrar por outros meios!
        </Text>
        <Text 
          style={styles.link}
          onPress={(handleSignIn)}
        >
          Já tenho conta.
        </Text>
      </View>
    </Background>
  );
}