import React from 'react';
import { Text, SafeAreaView, StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import * as S from './styles';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase.config';


export default function RegisterScreen (): JSX.Element {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async () => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
      };


    return (
        <>
        <StatusBar animated={true} backgroundColor={'#01B8A8'} />
            <S.LinearGradientStyled colors={['#01B8A8', '#22D897']}>
                <S.HeaderContainer>
                    <S.ButtonContainer>
                        <Button onPress={() => navigation.goBack()}><Icon color='white' size={40} name='leftcircleo' type='AntDesign' /></Button>
                    </S.ButtonContainer>
                        <S.ImageContainer>
                            <S.Logo source={require('../../../../assets/images/logo2.png')} />
                        </S.ImageContainer>
                </S.HeaderContainer>
            </S.LinearGradientStyled>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : (`height` + 1) as 'height'} style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 90}}> 
            <S.RegisterContainer>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#01B8A8'}}>Registrar</Text>
                    <S.InputWrapper>
                        <Text style={{color: '#01B8A8'}}>Nome</Text>
                        <Input />
                        <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                        <Text style={{color: '#01B8A8', marginTop: 20}}>CPF</Text>
                        <Input type='number-pad' placeholder="000.000.000-00" />
                        <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                        <Text style={{color: '#01B8A8', marginTop: 20}}>N° de Telefone</Text>
                        <Input type='number-pad' placeholder="(00) 00000-0000" />
                        <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                        <Text style={{color: '#01B8A8', marginTop: 20}}>E-mail</Text>
                        <Input type='email-address' onChangeText={setEmail} placeholder="example@email.com" />
                        <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                        <Text style={{color: '#01B8A8', marginTop: 20}}>Senha</Text>
                        <Input onChangeText={setPassword} placeholder="*******" isPasswowrd={true} />
                        <View style={{height: 1, backgroundColor: '#01B8A8'}} />
                        <S.RegisterButtonWrapper>
                            <LinearGradient style={{borderRadius: 30, width: '80%', height: 40}} colors={['#01B8A8', '#22D897']}>
                                <Button onPress={handleSubmit} textColor="white" fontWeight='bold' fontSize={16}>Registre-se</Button>
                            </LinearGradient>
                            <Button onPress={() => navigation.navigate('LoginScreen' as never)} textColor="#01B8A8" fontSize={12}> Já tem uma conta? Faça login</Button>
                        </S.RegisterButtonWrapper>
                    </S.InputWrapper>
            </S.RegisterContainer>
            </KeyboardAvoidingView>
        </>
    );
}
