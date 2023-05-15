import * as S from './styles';

export function ImageComponent(): JSX.Element {
    return (
        <S.Container>
            <S.Image source={require('../../../assets/images/market.png')} />
        </S.Container>
    );
}