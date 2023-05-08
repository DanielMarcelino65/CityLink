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
import SideMenu from '../../Drawer';

export default function Home() {
    return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={'#01B8A8'} />
        <Header />
        <ImageComponent />
        <Wallet />
        <Cards />
      {/* <Footer /> */}
    </SafeAreaView>
    );
}