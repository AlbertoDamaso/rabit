import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }

      drawerStyle={{
      backgroundColor: '#171717'
      }}
      drawerContentOptions={{
          labelStyle:{
              fontWeight: 'bold'
          },
          activeTintColor: '#FFF',
          activeBackgroundColor: '#00b94a',
          inactiveBackgroundColor: '#000',
          inactiveTintColor: '#DDD',
          itemStyle: {
              marginVertical: 5,
          }
      }}
    >
      <AppDrawer.Screen name="Home" component={Home}/>
    </AppDrawer.Navigator>
    );
}