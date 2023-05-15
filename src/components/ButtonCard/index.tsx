import * as S from './styles';
import { Icon } from '../Icon';
import { ButtonPropsCard } from './types';

export function ButtonCard({children, onPress, color, textColor, fontSize, fontWeight, iconColor, iconName, iconSize, iconType, hasIcon, style, iconWrapperColor, elevation, iconWrapperSize}: ButtonPropsCard) {
    return (
        <S.ButtonCardContainer style={style} color={color} activeOpacity={0.7} onPress={onPress} elevation={elevation}>
                {hasIcon && <S.ButtonCardIconWrapper iconWrapperSize={iconWrapperSize} iconName={iconName} iconType={iconType} iconWrapperColor={iconWrapperColor as string}><Icon name={iconName} color={iconColor} size={iconSize} type={iconType} /></S.ButtonCardIconWrapper>}
            <S.ButtonCardText textColor={textColor} fontSize={fontSize} fontWeight={fontWeight}> {children} </S.ButtonCardText>
        </S.ButtonCardContainer>
    );
}
