import React from 'react';
import type {PropsWithChildren} from 'react';
import { Header } from './components/header';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Wallet } from './components/Wallet';
import { Cards } from './components/Cards';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{}}>
      <Header />
      <Wallet />
      <Cards />
    </SafeAreaView>
  );
}



export default App;
