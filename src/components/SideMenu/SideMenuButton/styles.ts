import styled from 'styled-components/native';
import { SideMenuButtonProps } from './types';


export const Container = styled.TouchableOpacity<SideMenuButtonProps>`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ selected }) => selected ? '#047B70' : 'transparent'};
    border-radius: 10px;
`;

export const IconWrapper = styled.View`
    position: absolute;
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
    left: 10px;
    
`;

export const TextWrapper = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-sizing: border-box;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;
