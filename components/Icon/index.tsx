import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import { IconProps } from './types';


export function Icon({name, color, size, type}: IconProps): JSX.Element {
    return (
        <>
            {type == 'FontAwesome' && <FontAwesome name={name as string} size={size} color={color} />}
            {type == 'AntDesign' && <AntDesign name={name as string} size={size} color={color} />}
            {type == 'Entypo' && <Entypo name={name as string} size={size} color={color} />}
            {type == 'EvilIcons' && <EvilIcons name={name as string} size={size} color={color} />}
            {type == 'Feather' && <Feather name={name as string} size={size} color={color} />}
            {type == 'FontAwesome5' && <FontAwesome5 name={name as string} size={size} color={color} />}
            {type == 'Fontisto' && <Fontisto name={name as string} size={size} color={color} />}
            {type == 'Foundation' && <Foundation name={name as string} size={size} color={color} />}
            {type == 'Ionicons' && <Ionicons name={name as string} size={size} color={color} />}
            {type == 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name as string} size={size} color={color} />}
            {type == 'MaterialIcons' && <MaterialIcons name={name as string} size={size} color={color} />}
            {type == 'Octicons' && <Octicons name={name as string} size={size} color={color} />}
            {type == 'SimpleLineIcons' && <SimpleLineIcons name={name as string} size={size} color={color} />}
            {type == 'Zocial' && <Zocial name={name as string} size={size} color={color} />}
        </>
    );
}
