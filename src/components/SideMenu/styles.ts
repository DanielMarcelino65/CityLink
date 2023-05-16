import styled from 'styled-components/native';

export const Image = styled.Image`
    flex: 1;
    resize-mode: contain;
    height: undefined;
    width: undefined;
`;

export const ImageContainer = styled.View`
    width: 80%;
    height: 60px;
    margin-top: 10px;
`;

export const CloseCircleContainer = styled.View`
    width: 100%;
    height: 40px;
    justify-content: flex-end;
    flex-direction: row;
    box-sizing: border-box;
    padding-right: 15px;
    margin-top: 20px;
`;

export const ButtonSideContainer = styled.View`
    width: 80%;
    height: 500px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;    
    width: 90%;
    height: 60px;
    margin-bottom: 10px;
`;

export const ProfileImageContainer = styled.View`
    width: 50px;
    height: 50px;
`;

export const ProfileTextContainer = styled.View`
    width: 60%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5px;
    box-sizing: border-box;
`;

export const LogOutContainer = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
`;


