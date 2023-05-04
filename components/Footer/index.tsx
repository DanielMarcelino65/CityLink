import * as S from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonCard } from '../ButtonCard';

export function Footer() {
    return (
        <S.Background style={{flex: 1}}>
            <LinearGradient colors={['#01B8A8', '#22D897']} style={{flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                <S.Container>
                    <S.ButtonContainer>
                        <S.Button>
                            <ButtonCard hasIcon={true} iconWrapperSize={20} iconSize={20} iconName='recycle' iconColor='white' iconType='FontAwesome' color='transparent' fontSize={12} fontWeight='600' textColor='white'> Reciclagem </ButtonCard>
                        </S.Button>
                        <S.Button>
                            <ButtonCard hasIcon={true} iconWrapperSize={20} iconSize={20} iconName='ios-qr-code-outline' iconColor='white' iconType='Ionicons' color='transparent' fontSize={12} fontWeight='bold' textColor='white'> QR Code </ButtonCard>
                        </S.Button>
                        <S.Button>
                            <ButtonCard hasIcon={true} iconWrapperSize={20} iconSize={20} iconName='bar-graph' iconColor='white' iconType='Entypo' color='transparent' fontSize={12} fontWeight='bold'  textColor='white'> Gráfico </ButtonCard>
                        </S.Button>
                        <S.Button>
                            <ButtonCard hasIcon={true} iconWrapperSize={20} iconSize={20} iconName='help-circle' iconColor='white' iconType='Feather' color='transparent' fontSize={12} fontWeight='bold' textColor='white'> Ajuda</ButtonCard>
                        </S.Button>
                    </S.ButtonContainer>
                </S.Container>
            </LinearGradient>
        </S.Background>
    );
}