import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import type {StatusBarStyle} from 'react-native';
import { MyTabs } from './components/Navigation';
import SideMenu from './components/Drawer';


function App(): JSX.Element {

  return (
    <>
      <MyTabs />
    </>
  );
}



export default App;
