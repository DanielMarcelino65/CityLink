import { View, Text, SafeAreaView, StatusBar } from "react-native"
import { Input } from "../../Input"
import * as S from './styles';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../Button";

export default function LoginScreen() {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate('Home' as never);
    }

    function handleNavigateToRegister(){
        navigation.navigate('RegisterScreen' as never);
    }
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e8e8'}}>
            <StatusBar animated={true} backgroundColor={'#01B8A8'} />
            <S.LinearGradientStyled colors={['#01B8A8', '#22D897']}>
                <S.Header>
                    <S.HeaderTitle>Login</S.HeaderTitle>
                </S.Header>
            </S.LinearGradientStyled>
            <S.LoginContainer>
                <S.ImageWrapper>
                    <S.Image source={require('../../../assets/images/logincitylink.png')} />
                </S.ImageWrapper>
                <S.InputWrapper>
                    <Text style={{color: '#01B8A8'}}>Nome</Text>
                    <Input />
                    <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                    <Text style={{color: '#01B8A8', marginTop: 20}}>Senha</Text>
                    <Input placeholder="*******" isPasswowrd={true} />
                    <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                    <View style={{width: '100%', justifyContent: "center", alignItems: 'center', paddingTop: 40, paddingBottom: 120}}>
                        <LinearGradient style={{borderRadius: 20, width: '80%', height: 40}} colors={['#01B8A8', '#22D897']}>
                            <Button onPress={handleNavigateToHome} fontSize={14} fontWeight="bold" textColor="white">Entrar</Button>
                        </LinearGradient>
                        <Button onPress={handleNavigateToRegister} textColor="#01B8A8" fontSize={10}> Não tem uma conta? Registre-se</Button>
                    </View>
                </S.InputWrapper>
            </S.LoginContainer>
        </SafeAreaView>
    )
}