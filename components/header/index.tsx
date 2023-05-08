import * as S from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp, DrawerToggleButton } from '@react-navigation/drawer';
import { useDrawerStatus } from '@react-navigation/drawer';
import { RootStackParamList } from '../Screens/types/types';
import { DrawerActions } from '@react-navigation/native';


export function Header(): JSX.Element {

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#01B8A8', '#22D897']}>
            <S.Container>
                <S.MenuContainer>
                    <S.Menu />
                    <S.Menu />
                    <S.Menu />
                </S.MenuContainer>
                <S.ImageContainer>
                    <S.image source={require('../../assets/images/logo2.png')} />
                </S.ImageContainer>
                <S.ProfileContainer>
                    <S.ProfileText>Olá, John Doe</S.ProfileText>
                    <S.ProfileImage source={require('../../assets/images/iconprofile.png')} />
                </S.ProfileContainer>
            </S.Container>
        </LinearGradient>
    )
}