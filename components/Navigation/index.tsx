import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import LoginScreen from '../Screens/LoginScreen';
import SideMenu from '../Drawer';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


export function MyTabs() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="LoginScreen"

        screenOptions={{ headerTintColor: 'black', headerTitleStyle: {fontWeight: 'bold'}, headerShown: false}}
      >
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}