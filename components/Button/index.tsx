import * as S from './styles'
import { ButtonProps } from './types';


export function Button({onPress, children, color, textColor, fontSize, fontWeight}: ButtonProps) {
    return (
        <S.Button color={color} activeOpacity={0.7} onPress={onPress}>
            <S.ButtonText textColor={textColor} fontSize={fontSize} fontWeight={fontWeight}> {children} </S.ButtonText>
        </S.Button>
    );
}