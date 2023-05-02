import * as S from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../Button';
import { StyleSheet } from 'react-native';



export function Wallet(): JSX.Element {
    return (
       <S.Container style={styles.shadowProps}>
              <S.WalletContainer>
                <S.TitleContainer>
                    <S.TitleImage source={require('../../assets/images/digitalwallet.png')} />
                    <S.TitleText>Digital Wallet</S.TitleText>
                </S.TitleContainer>
                <S.BalanceContainer>
                    <S.BalanceTextContainer>
                        <S.BalanceText>Saldo</S.BalanceText>
                        <S.BalanceValue>R$ 1.000,00</S.BalanceValue>
                    </S.BalanceTextContainer>
                    <S.ButtonContainer>
                        <LinearGradient style={{borderRadius: 35}} colors={['#01B8A8', '#22D897']}><Button fontSize={14} textColor='#fff'>RESGATAR</Button></LinearGradient>
                    </S.ButtonContainer>
                </S.BalanceContainer>
              </S.WalletContainer>
       </S.Container>
    );
}

const styles = StyleSheet.create({
    shadowProps: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})

