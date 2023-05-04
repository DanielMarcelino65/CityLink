import { ButtonCard } from "../ButtonCard";
import * as S from './styles';

export function Cards() {
    return (
        <S.Container>
            <S.CardsContainer>
                <S.Card>
                    <ButtonCard hasIcon={true} iconWrapperSize={50} elevation={5} iconWrapperColor="#D9D9D9" iconName="trash-2" iconSize={22} iconColor="black" iconType="Feather" color="white" textColor="#000000" fontSize={16} fontWeight="bold">
                        Lixeira IOT
                    </ButtonCard>
                </S.Card>
                <S.Card>
                    <ButtonCard hasIcon={true} iconWrapperSize={50} elevation={5} iconWrapperColor="#D9D9D9" iconName='vr-cardboard' iconType='FontAwesome5' iconColor="black" iconSize={22} color="white" textColor="#000000" fontSize={16} fontWeight="bold">
                        VR
                    </ButtonCard>
                </S.Card>
                <S.Card>
                    <ButtonCard hasIcon={true} iconWrapperSize={50} elevation={5} iconWrapperColor="#D9D9D9" iconName='map-pin' iconType='Feather' iconColor='black' iconSize={22} color="white" textColor="#000000" fontSize={16} fontWeight="bold">
                        VR maps
                    </ButtonCard>
                </S.Card>
            </S.CardsContainer>
        </S.Container>
    );
}
