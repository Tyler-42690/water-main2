import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, ThemeConsumer} from 'react-native-elements';
import React from 'react';

const CardItem = (props) =>
{
    const navigation = useNavigation()

    const handleActivitySelection = () =>
    {
        navigation.navigate('HomeScreen', {
            screen: 'GradeSelection',
            params: { activityName: props.activityName },
        });

        // navigation.navigate('HomeScreen', {
        //     screen: 'ActivityDetails',
        //     params: { name: props.activityName, grade: props.grade, videoPath: props.videoPath, pdfPath: props.pdfPath },
        // });
    }
    if (props.activityName == "Water Quality Parameters"){
        return (
            <View
                style={styles.mainContainerend}
                //onPress={handleActivitySelection}
            >
                <View style={styles.cardBody}>
                    <ImageBackground source={props.imagePath} style={styles.imageContainer}>
                        <View style={styles.activityTitleContainer}>
                        </View>
                    </ImageBackground>
                    <View style={styles.bottomContainerend}>
                        <Text style={styles.activityName}>{props.activityName}</Text>
                        <Text style={styles.activityDescription}>{props.description}</Text>
                        <TouchableOpacity style={styles.learnMoreBtn} onPress={handleActivitySelection}>
                            <Button
                            buttonStyle = {styles.btnText}
                            title = 'Learn More'
                            onPress={handleActivitySelection}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }

    return (
        <View
            style={styles.mainContainer}
            //onPress={handleActivitySelection}
        >
            <View style={styles.cardBody}>
                <ImageBackground source={props.imagePath} style={styles.imageContainer}>
                    <View style={styles.activityTitleContainer}>
                    </View>
                </ImageBackground>
                <View style={styles.bottomContainer}>
                    <Text style={styles.activityName}>{props.activityName}</Text>
                    <Text style={styles.activityDescription}>{props.description}</Text>
                    <TouchableOpacity style={styles.learnMoreBtn} onPress={handleActivitySelection}>
                        <Button
                        buttonStyle = {styles.btnText}
                        title = 'Learn More'
                        onPress={handleActivitySelection}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CardItem;



const styles = StyleSheet.create({
    mainContainer: {
        height: 465,
        // justifyContent: 'center',
        // backgroundColor: 'green',
        backgroundColor: global.primary,
        // borderBottomWidth: 1
    },
    imageContainer: {

    },
    cardBody: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#2e2e2e',
        // backgroundColor: '#0e1b34',
        alignSelf: 'center',
        // borderRadius: 30,
        top: 0,
    },
    activityTitleContainer: {
        justifyContent: 'center',
        // backgroundColor: 'blue',
        height: '50%',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
    },
    // activityTitle: {
    //   fontWeight: 'bold',
    //   color: 'white',
    //   fontSize: 70,
    //   alignSelf: 'center',

    // },
    bottomContainer: {
        width: '100%',
        height: '50%',
        // bottom: 5,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        justifyContent: 'flex-start',
        backgroundColor: 'white', //#0e1b34
        // alignSelf: 'center',
        paddingLeft: 20,
        paddingTop: 10,
    },
    activityName: {
        fontSize: 25,
        fontWeight: 'bold',
        // color: '#32ba00',
        color: global.primary,
    },
    activityDescription: {
        paddingTop: 15,
    },
    learnMoreBtn: {
        // backgroundColor: '#32ba00',
        backgroundColor: global.primary,
        height: 50,
        justifyContent: 'center',
        width: 140,
        alignItems: 'center',
        top: 20,
        borderRadius: 25
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    bottomContainerend: {
        width: '100%',
        height: '50%',
        // bottom: 5,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        justifyContent: 'flex-start',
        backgroundColor: 'white', //#0e1b34
        // alignSelf: 'center',
        paddingLeft: 20,
        paddingTop: 10,
    },
    mainContainerend: {
        height: 610,
        // justifyContent: 'center',
        // backgroundColor: 'green',
        backgroundColor: global.primary,
        // borderBottomWidth: 1
    }
})


//<Text style={styles.btnText}>Learn More</Text>

