import * as S from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { auth } from '../../config/firebase.config';


export function Header(): JSX.Element {
    const user = auth.currentUser;

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#01B8A8', '#22D897']}>
            <S.Container>
                <S.MenuContainer onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <S.Menu />
                    <S.Menu />
                    <S.Menu />
                </S.MenuContainer>
                <S.ImageContainer>
                    <S.image source={require('../../../assets/images/logo2.png')} />
                </S.ImageContainer>
                <S.ProfileContainer>
                    <S.ProfileText>Olá, {user?.displayName}</S.ProfileText>
                    <S.ProfileImage source={require('../../../assets/images/iconprofile.png')} />
                </S.ProfileContainer>
            </S.Container>
        </LinearGradient>
    )
}