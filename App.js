import React from "react";
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import AuthProvider from "./src/contexts/auth";
import AppProvider from "./src/contexts/app";

console.disableYellowBox=true;

export default function App(){
  const [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Background>
      <NavigationContainer>
        <AuthProvider>
          <AppProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes/>
          </AppProvider>
        </AuthProvider>
      </NavigationContainer>
    </Background>
  );
}
