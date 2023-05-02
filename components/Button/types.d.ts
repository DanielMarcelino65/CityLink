import { ReactNode } from "react";

export interface ButtonProps {
    children?: ReactNode;
    color?: string;
    onPress?: function;
    fontSize?: number;
    textColor?: string;
    fontWeight?: string;
}
