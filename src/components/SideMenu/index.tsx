import * as S from './styles';
import { Icon } from '../Icon';
import { useEffect, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SideMenuButton } from './SideMenuButton';
import { auth } from '../../config/firebase.config';
import { SideMenuProps } from './types';




export function SideMenu({selected}: SideMenuProps) {
    const navigation = useNavigation();
    const user = auth.currentUser;

    return (
        <LinearGradient style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#01B8A8', '#22D897']} >
            <S.CloseCircleContainer>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Icon name="closecircleo" color="white" size={40} type="AntDesign" /></TouchableOpacity>
            </S.CloseCircleContainer>
            <S.ImageContainer>
                <S.Image source={require('../../../assets/images/logo2.png')} />
            </S.ImageContainer>
            <S.ButtonSideContainer>
                <SideMenuButton onPress={() => navigation.navigate('Home' as never)} selected={true} icon={{name: 'home', type:'Entypo', color: 'white', size: 20}}> Home </SideMenuButton>
                <SideMenuButton onPress={() => console.log(user?.email)} selected={false} icon={{name: 'wallet', type:'Entypo', color: 'white', size: 20}}> Wallet </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'trash-2', type:'Feather', color: 'white', size: 20}}> Lixeira </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'vr-cardboard', type:'FontAwesome5', color: 'white', size: 20}}> VR </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'map-pin', type:'Feather', color: 'white', size: 20}}> VR Maps </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'recycle', type:'FontAwesome', color: 'white', size: 20}}> Reciclagem </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'ios-qr-code-outline', type:'Ionicons', color: 'white', size: 20}}> QR Code </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'bar-graph', type:'Entypo', color: 'white', size: 20}}> Gráfico </SideMenuButton>
                <SideMenuButton selected={false} icon={{name: 'help-circle', type:'Feather', color: 'white', size: 20}}> Ajuda </SideMenuButton>
            </S.ButtonSideContainer>
            <S.ProfileContainer>
                <S.ProfileImageContainer>
                    <S.Image source={require('../../../assets/images/iconprofile.png')} />
                </S.ProfileImageContainer>
                <S.ProfileTextContainer>
                    <Text style={{fontSize: 16, fontWeight: '700', color: 'white'}}>{user?.displayName}</Text>
                    <Text style={{fontSize: 10, color: 'white'}}>{user?.email}</Text>
                </S.ProfileTextContainer>
                <S.LogOutContainer onPress={() =>auth.signOut()}>
                    <Icon name='logout' type='AntDesign' color='white' size={20} />
                </S.LogOutContainer>
            </S.ProfileContainer>
        </LinearGradient>
    );
}