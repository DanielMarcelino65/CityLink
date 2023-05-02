import styled from 'styled-components/native';
import { ButtonProps } from './types';

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color ? props.color : null};
    border-radius: 35px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-size: ${props => props.fontSize ? props.fontSize : 24}px;
    color: ${props => props.textColor ? props.textColor : '#000'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'bold'};
`;