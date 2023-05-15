import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MyTabs } from './src/components/Navigation';
import RootNavigation from './src/navigation';


function App(): JSX.Element {

  return (
    <>
      <RootNavigation />
    </>
  );
}



export default App;
