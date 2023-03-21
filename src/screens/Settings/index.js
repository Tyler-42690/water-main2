import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react';
import { Icon,Input ,Button,} from 'react-native-elements'

import ResetPassword from '../ResetPassword'

const Settings = ({ route, navigation }) =>
{
    return (
        <SafeAreaView>

            <View style={{
                alignItems: 'center',
                    }}>
                 <Button buttonStyle={{borderRadius: 20,marginTop:10}}
                    title="Reset Password"
                    onPress={() => {    
                        console.log()
                        navigation.navigate('ResetPassword')
                    }}
                />
                </View>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({});