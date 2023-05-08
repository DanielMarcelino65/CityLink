import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";

export const Header = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

export const LinearGradientStyled = styled(LinearGradient)`
    width: 100%;
    height: 160px;
    position: absolute;
    top: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const LoginContainer = styled.View`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 130px;
    width: 90%;
    height: 450px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background-color: white;
    padding-top: 50px;
    elevation: 5;
`;
export const ImageWrapper = styled.View`
    width: 80%;
    height: 62px;
`;

export const Image = styled.Image`
    flex: 1;
    resize-mode: contain;
    height: undefined;
    width: undefined;
`;

export const InputWrapper = styled.View`
    display: flex;
    width: 90%;
    height: 210px;
    justify-content: flex-start;
    padding-top: 30px;
    flex-direction: column;
    background-color: white;
`;