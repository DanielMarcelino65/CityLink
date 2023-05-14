import {
    SafeAreaView,
    ScrollView,
    StatusBar,
  } from 'react-native';
import { Wallet } from '../../Wallet';
import { Cards } from '../../Cards';
import { ImageComponent } from '../../ImageComponent';
import { Footer } from '../../Footer';
import { Header } from '../../header';

export function RealHome() {
    return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8e8e8'}}>
      <StatusBar animated={true} backgroundColor={'#01B8A8'} />
        <Header />
        <ImageComponent />
        <Wallet />
        <Cards />
        <Footer />
    </SafeAreaView>
    );
}