type ButtonProps = ButtonCardMainProps & (ButtonCardError | ButtonCardErrorRef);



export interface ButtonCardMainProps {
    color?: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: string;
    onPress?: function;
    children?: React.ReactNode;
    style?: object;
}

export interface ButtonCardError{
    hasIcon?: true;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    iconType: 'FontAwesome'| 'MaterialIcons' | 'Ionicons' | 'Feather' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Fontisto' | 'Foundation' | 'MaterialCommunityIcons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial' | 'FontAwesome5' | 'FontAwesome5Pro' | 'Fontisto' | 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons' | 'SimpleLineIcons' | 'Zocial' | 'FontAwesome5';
}

export interface ButtonCardErrorRef {
    hasIcon?: false;
    iconName?: never;
    iconSize?: never;
    iconColor?: never;
    iconType?: never;
}