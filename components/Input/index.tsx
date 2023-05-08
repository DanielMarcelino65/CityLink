import * as S from './styles';
import React from 'react';
import { InputProps } from './types';
import { Icon } from '../Icon';

export function Input ({ isPasswowrd, onChangeText, placeholder }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);

    function handlePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <S.InputWrapper>
            <S.Input secureTextEntry={ isPasswowrd == true ? isPasswordVisible : false} placeholderTextColor='#00000080' placeholder={placeholder ? placeholder : 'John Doe'} onChangeText={onChangeText}/>
            {isPasswowrd && <S.passwordEyeButton onPress={handlePasswordVisibility}>{isPasswordVisible ? <Icon type='Ionicons' color="black" size={25} name="eye" /> : <Icon type='Ionicons' color="black" size={25} name="eye-off" />}</S.passwordEyeButton>}
        </S.InputWrapper>
    );
}