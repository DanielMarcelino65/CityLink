import { ReactNode } from 'react';
import { IconProps } from '../../Icon/types';

export interface SideMenuButtonProps {
    children?: ReactNode;
    onPress?: function;
    selected?: boolean;
    icon?: IconProps;
}