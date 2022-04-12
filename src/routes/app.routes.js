import React from 'react';

import {
  View,
  Text
} from 'react-native';


export function AppRoutes() {
  return (
    <View>
        <Text>
            CHAMA HOME
        </Text>
    </View>
  );
}
// import React from 'react';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons, Feather } from '@expo/vector-icons';

// import Home from '../screens/Home';
// import CustomDrawer from '../components/CustomDrawer';
// import { theme } from '../global/styles/theme';

// const AppDrawer = createDrawerNavigator();

// export function AppRoutes() {
//   return(
//     <AppDrawer.Navigator
//       drawerContent={ (props) => <CustomDrawer {...props} /> }
//       screenOptions={{
//         headerShown: false,
//         drawerActiveTintColor: theme.colors.light,
//         drawerActiveBackgroundColor: theme.colors.secundary,
//         drawerInactiveBackgroundColor: theme.colors.light,
//         drawerInactiveTintColor: theme.colors.dark,

//         drawerStyle:{
//           width: '70%',
//         },

//         drawerItemStyle:{
//           width: '85%',
//           alignSelf: 'center',
//           borderRadius: 8,
//         },

//         drawerLabelStyle:{
//           fontSize: 18,
//           fontFamily: theme.fonts.title,
//           marginLeft: -25,
//         }
//       }}
//     >
//       <AppDrawer.Screen 
//         name="Reservar" 
//         component={Home}
//         options={{
//           drawerIcon: ({color, size}) => (
//             <Ionicons
//               name="clipboard"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />      
//     </AppDrawer.Navigator>
//     );
// }