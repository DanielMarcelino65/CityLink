import { Icon } from '../../Icon';
import * as S from './styles';
import { SideMenuButtonProps } from './types';



export function SideMenuButton({children,  onPress, selected, icon}: SideMenuButtonProps) {
    return (
        <S.Container onPress={onPress} selected={selected}>
            <S.IconWrapper><Icon name={icon?.name as string} type={icon?.type} color={icon?.color as string} size={icon?.size} /></S.IconWrapper>
            <S.TextWrapper>
                <S.Text>{children}</S.Text>
            </S.TextWrapper>
        </S.Container>
    );
}
