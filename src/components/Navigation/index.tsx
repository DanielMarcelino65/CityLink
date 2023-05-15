import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';


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
          name="RegisterScreen"
          component={RegisterScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}