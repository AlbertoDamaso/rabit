import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { StartOrder } from '../screens/StartOrder';
import { Order } from '../screens/Order';
import { Opine } from '../screens/Opine';
import { AppRoutes } from '../routes/app.routes';

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'}
      }}
    >
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen 
        name="SignUp"
        component={SignUp}   
      />     
      <AuthStack.Screen 
        name="AppRoutes"
        component={AppRoutes}   
      />
      <AuthStack.Screen 
        name="StartOrder"
        component={StartOrder}   
      /> 
      <AuthStack.Screen 
        name="Order"
        component={Order}   
      />              
      <AuthStack.Screen 
        name="Opinar"
        component={Opine}   
      /> 
    </AuthStack.Navigator>
  );
}