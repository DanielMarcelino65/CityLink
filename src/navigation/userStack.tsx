import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterScreen from '../components/Screens/RegisterScreen';
import Home from '../components/Screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '../components/Icon';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from '../components/SideMenu';

const Drawer = createDrawerNavigator();

export function UserStack() {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={() => {return <SideMenu selected={'hi'} />;}}  initialRouteName='Home' screenOptions={{drawerPosition: 'left', drawerType: 'slide', drawerInactiveTintColor: 'white', drawerLabelStyle: {color: 'white'}, headerShown: false, headerTitleAlign: 'center', drawerStyle: {backgroundColor: '#01B8A8'}}} defaultStatus='closed'>
                <Drawer.Screen options={{
                    drawerLabel: 'Home', 
                    drawerIcon: ({focused}) => focused ? <MaterialCommunityIcons size={25} name='home' color={'white'}/> : <MaterialCommunityIcons size={25} name='home-outline' color={'white'}/>, 
                    drawerActiveTintColor: 'white',
                    }}
                    name="Home"
                    component={Home}
                    />
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
        </NavigationContainer>
    );
}
