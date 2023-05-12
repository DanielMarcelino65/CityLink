import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";

export const LogoContainer = styled.View`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.View`
    width: 218px;
    height: 32px;
`;

export const Logo = styled.Image`
    flex: 1;
    resize-mode: contain;
    height: undefined;
    width: undefined;
`;

export const LinearGradientStyled = styled(LinearGradient)`
    width: 100%;
    height: 150px;
    position: absolute;
    display: flex;
    top: 0;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.View`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 5px;
`;

export const HeaderContainer = styled.View`
    width: 100%;
    height: undefined;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const RegisterContainer = styled.View`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 115px;
    width: 90%;
    height: 650px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    padding-top: 25px;
    elevation: 5;
`;

export const InputWrapper = styled.View`
    display: flex;
    width: 90%;
    height: 210px;
    justify-content: flex-start;
    padding-top: 30px;
    flex-direction: column;
    padding-top: 30px;
`;

export const RegisterButtonWrapper = styled.View`
    margin-top: 40px;
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
`;



