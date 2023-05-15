import { KeyboardTypeOptions } from "react-native";
export interface InputProps {
    isPasswowrd?: boolean,
    onChangeText?: function,
    placeholder?: string,
    type?: KeyboardTypeOptions,
}