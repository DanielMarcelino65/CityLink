import styled from 'styled-components/native';
import { Button, ButtonText } from '../../components/Button/styles';
import { ButtonPropsCard } from './types';

export const ButtonCardContainer = styled(Button)<ButtonPropsCard>`
    width: 100%;
    height: 100%;
    background-color: ${({color})=> color ? color : '#fff'};
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    elevation: ${({elevation})=> elevation ? elevation : 0};
`;

export const ButtonCardText = styled(ButtonText)<ButtonPropsCard>`
    color: ${props => props.textColor ? props.textColor : '#fff'};
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    text-align: center;
`;

export const ButtonCardIconWrapper = styled.View<ButtonPropsCard>`
    height: ${({iconWrapperSize})=> iconWrapperSize ? iconWrapperSize : 75}px;
    width: ${({iconWrapperSize})=> iconWrapperSize ? iconWrapperSize : 75}px;
    border-radius: ${({iconWrapperSize})=> iconWrapperSize ? iconWrapperSize / 2 : (75 / 2)}px;
    background-color: ${({iconWrapperColor})=> iconWrapperColor ? iconWrapperColor : 'transparent'};
    justify-content: center;
    align-items: center;
`;
