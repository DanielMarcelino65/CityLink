import styled from 'styled-components/native';
import { Image } from 'react-native';

export const image = styled.Image`
    width: 100%;
    height: 40px;
`;

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 170px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ProfileContainer = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80%;
    height: 70px;
    
    margin-bottom: 15px;
`;

export const ProfileImage = styled.Image`
    width: 43px;
    height: 43px;
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 230px;
    max-height: 100px;
`;

export const ProfileText = styled.Text`
    color: white;
    font-family: 'Inter';
    font-weight: bold;
    font-size: 24px;
`;

export const MenuContainer = styled.TouchableOpacity`
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 25px;
    left: 15px;
    width: 35px;
    height: 40px;
`;

export const Menu = styled.View`
    width: 100%;
    height: 5px;
    background-color: white;
    border-radius: 10px;
`;



