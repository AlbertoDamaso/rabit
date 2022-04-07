import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { Background } from '../../components/Background';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('AppRoutes');
  }

  function handleSignUp(){
    navigation.navigate('SignUp');
  }

  return (
    <Background>
      <Logo style={styles.logo}/>

      <View style={styles.areaInput}>

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
          onPress={(handleSignIn)}
          title={"Entrar"}
          activeOpacity={0.7}
        />
        <Text style={styles.link}>
          Logar por outros meios!
        </Text>
        <Text 
          style={styles.link}
          onPress={(handleSignUp)}
        >
          Criar conta.
        </Text>
      </View>
    </Background>
  );
}