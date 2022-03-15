import React from 'react';
import { Text } from 'react-native';

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }

  // return (
  //   <NavigationContainer>
  //     <StatusBar
  //       barStyle="light-content"
  //       backgroundColor="transparent"
  //       translucent
  //     />
  //     <Routes/>
  //   </NavigationContainer>
  // );
  return (
    <Background>
      <Text>Rabit</Text>
    </Background>
  );
}
