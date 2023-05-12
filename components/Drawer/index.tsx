import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { RealHome } from '../Screens/RealHome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '../Icon';

const Drawer = createDrawerNavigator();

export default function SideMenu() {
 return (
            <Drawer.Navigator initialRouteName='Home' screenOptions={{drawerPosition: 'left', drawerType: 'slide', drawerInactiveTintColor: 'white', drawerLabelStyle: {color: 'white'}, headerShown: false, headerTitleAlign: 'center', drawerStyle: {backgroundColor: '#01B8A8'}, drawerLabelStyle: {justifyContent: 'center'}}} defaultStatus='closed'>
                <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="NewHome"
                    component={RealHome} />
                <Drawer.Screen options={{
                    drawerLabel: 'Wallet', 
                    drawerIcon: ({focused}) => focused ? <Icon type='FontAwesome5' size={25} name='money-bill-alt' color={'white'}/> : <Icon type='FontAwesome' size={25} name='money' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label2"
                    component={RegisterScreen} />

                <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label3"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label4"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label5"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label6"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label7"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label8"
                    component={RegisterScreen} />

                    <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Label9"
                    component={RegisterScreen} />
            </Drawer.Navigator>
 );
}
