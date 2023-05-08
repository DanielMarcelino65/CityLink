import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import LoginScreen from '../Screens/LoginScreen';
import SideMenu from '../Drawer';

const Tab = createMaterialBottomTabNavigator();


export function MyTabs() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="LoginScreen"
        shifting={true}
        sceneAnimationType='shifting'
        barStyle={{ backgroundColor: '#01B8A8', height: 75 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => focused ? <MaterialCommunityIcons name="home-outline" color={'black'} size={26} /> : <MaterialCommunityIcons name="home" color={'black'} size={26} />,
          }}
        />
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            tabBarLabel: 'LoginScreen',
            tabBarIcon: ({focused}) => focused ? <MaterialCommunityIcons name="cube-outline" color={'black'} size={26} /> : <MaterialCommunityIcons name="cube" color={'black'} size={26} />,

          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
  );
}