import LoginScreen from "../components/Screens/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export function AuthStack() {
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