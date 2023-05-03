import styled from 'styled-components/native';
import { Button, ButtonText } from '../../components/Button/styles';
import { ButtonProps } from './types';

export const ButtonCardContainer = styled(Button)<ButtonProps>`
    width: 120px;
    height: 140px;
    background-color: ${({color})=> color ? color : '#fff'};
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ButtonCardText = styled(ButtonText)<ButtonProps>`
    color: ${props => props.textColor ? props.textColor : '#fff'};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
`;

export const ButtonCardIconWrapper = styled.View`
    height: 75px;
    width: 75px;
    border-radius: ${75 / 2}px;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
`;
