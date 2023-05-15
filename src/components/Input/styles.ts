import styled from 'styled-components/native';
import { InputProps } from './types';

export const InputWrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding-right: 10px;
    
`;

export const Input = styled.TextInput`
    width: 90%;
    height: 100%;
    color: black;
    padding-right: 10px;
`;

export const IconWrapper = styled.View`
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const passwordEyeButton = styled.TouchableOpacity`
    cursor: pointer;
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
`;