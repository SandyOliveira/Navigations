import * as React from 'react';
import{createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator'
import Profile from '../screens/Profile'
const Drawer = createDrawerNavigator()
const DrawerNavigator = () =>{
  return(
    <Drawer.Navigator>
       <Drawer.Screen name = "home" component = {BottomTabNavigator}/> 
       <Drawer.Screen name = "perfil" component = {Profile}/> 
     </Drawer.Navigator>
  )
}

export default DrawerNavigator