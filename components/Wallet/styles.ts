import styled from 'styled-components/native';

export const TitleContainer = styled.View`
    width: 100%;
    height: 50px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 30px;
    flex-direction: row;
`;

export const TitleText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-top: 10px;
`;

export const TitleImage = styled.Image`
    width: 38px;
    height: 38px;
    margin-right: 10px;
`;

export const BalanceContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
`;

export const BalanceTextContainer = styled.View`
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;
`;

export const BalanceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
`;

export const BalanceValue = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-top: 1px;
    margin-bottom: 10px;
`;

export const Container = styled.View`
    width: 100%;
    height: 200px;
    background-color: #D9D9D9;
    align-items: center;
    justify-content: center;
`;

export const WalletContainer = styled.View`
    width: 95%;
    height: 85%;
    background-color: #fff;
    border-radius: 30px;
    justify-content: space-between;
`;

export const ButtonContainer = styled.View`
    width: 140px;
    height: 40px;
    margin-right: 20px;
`;