import React, { useContext } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { AuthContext } from "../contexts/auth";

export function Routes() {
  const { signed } = useContext(AuthContext);//loading
  // if(loading){
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size='large' color='#141414'/>
  //     </View>
  //   )  
  // }

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )

}