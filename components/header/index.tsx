import * as S from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';



export function Header(): JSX.Element {
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