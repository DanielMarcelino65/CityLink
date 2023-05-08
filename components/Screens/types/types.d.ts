import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenParams = {
  username: string;
};

type SettingsScreenParams = {
  userId: number;
};


export type RootStackParamList = {
  Home: HomeScreenParams;
  Settings: SettingsScreenParams;
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;
