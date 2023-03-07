import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const GradeSelection = ({ route, navigation }) =>
{
    const { activityName } = route.params
    const grade = 5

    const handleGradeSelection = () =>
    {
        console.log("true")
        if (activityName === "Jar Test")
        {
            var pdfPath =require('../../assets/pdfs/JarTestHandout.pdf')
            var videoPath = {uri:"https://youtu.be/9mplI5qEhxk"}

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath },
            });
        }
        else
        {
            var pdfPath = ('../../assets/pdfs/WaterQualityParametersHandout.pdf')
            var videoPath = {uri:"https://youtu.be/9mplI5qEhxk"}

            navigation.navigate('HomeScreen', {
                screen: 'ActivityDetails',
                params: { name: activityName, grade: grade, videoPath: videoPath, pdfPath: pdfPath },
            });
        }
    }

    return (
        <SafeAreaView>
            <Text style={styles.header}>Select A Grade</Text>

            <View style={{ padding: 20 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGradeSelection}
                >
                    <Text style={styles.gradeTitle}>Middle School</Text>
                </TouchableOpacity>
            </View>

            <View style={{ padding: 20 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleGradeSelection}
                >
                    <Text style={styles.gradeTitle}>High School</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        width: '80%',
        height: 60,
        backgroundColor: global.primary,
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center'
    },
    gradeTitle: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'

    }
})

export default GradeSelection;
