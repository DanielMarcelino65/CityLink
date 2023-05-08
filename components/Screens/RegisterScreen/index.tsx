import { Text, SafeAreaView, StatusBar } from 'react-native'


export function RegisterScreen () {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e8e8'}}>
            <StatusBar animated={true} backgroundColor={'#01B8A8'} />
            <Text>RegisterScreen</Text>
        </SafeAreaView>
    )
}
