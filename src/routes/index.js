import React, { useContext } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { AuthContext } from '../contexts/auth';
import { SingUp } from '../screens/SignUp';

export function Routes() {
    // const { signed, loading } = useContext(AuthContext);
    // if(loading){
    //     return (
    //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator size='large' color='#141414'/>
    //         </View>
    //     )  
    // }

    // return(
    //     signed ? <AppRoutes/> : <AuthRoutes/>
    // )

    //Provisorio:
    return(
      <SingUp/>
    )
}