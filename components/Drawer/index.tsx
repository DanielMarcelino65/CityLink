import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import LoginScreen from '../Screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function SideMenu() {
 return (
            <Drawer.Navigator screenOptions={{drawerPosition: 'left', drawerType: 'slide', drawerStyle: {zIndex: 100}}} defaultStatus='open'>
                <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
 );
}
