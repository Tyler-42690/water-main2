import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
//import Pdf from 'react-native-pdf';

const Tutorial = ({ route, navigation }) =>
{
    const myPath = require('../../assets/pdfs/WaterPAL_Instructions.pdf')
    const handlePress = () =>
    {
        navigation.replace("Login")
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ backgroundColor: global.primary, height: 50, width: 200, borderRadius: 15, top: -10, justifyContent: 'center' }}
                onPress={handlePress}
            >
                <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center' }}>
                    Proceed to WaterPAL
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tutorial;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
    },
});