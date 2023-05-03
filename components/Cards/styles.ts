import styled from 'styled-components/native';
import * as S from '../ButtonCard/styles'

export const Container = styled.View`
    width: 100%;
    height: 150px;
    background-color: #D9D9D9;
`;

export const CardsContainer = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Card = styled.View`
    width: 130px;
    height: 140px;
    padding: 0 10px;
`;