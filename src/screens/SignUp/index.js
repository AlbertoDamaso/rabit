import React, { useState, useContext } from 'react';
import {
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { AuthContext } from '../../contexts/auth' 

import { styles } from '../SignIn/styles';

export function SignUp() {
  const navigation = useNavigation();

  const [zap, setZap] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {signUp} = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome, zap)   
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
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
        />
        <Input
          placeholder="WhatsApp"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          autoCorrect={false}
          autoCapitalize="none"
          value={zap}
          onChangeText={ (text) => setZap(text) }
          keyboardType = "phone-pad"
        />        
        <Input
          placeholder="E-mail"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          keyboardType = "email-address"
        />
        <Input
          placeholder="Senha"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          isSecure={true}
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          secureTextEntry={true}
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