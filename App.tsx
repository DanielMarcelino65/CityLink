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
import type {StatusBarStyle} from 'react-native';
import { Wallet } from './components/Wallet';
import { Cards } from './components/Cards';
import { ImageComponent } from './components/ImageComponent';
import { Footer } from './components/Footer';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={'#01B8A8'} />
      <ScrollView>
        <Header />
        <ImageComponent />
        <Wallet />
        <Cards />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}



export default App;
