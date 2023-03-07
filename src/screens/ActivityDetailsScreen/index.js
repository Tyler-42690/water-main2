import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';

const Activitydetailsscreen = ({ route, navigation }) =>
{
    const { name, grade, pdfPath, videoPath } = route.params

    const myPath = pdfPath

    const handlePdf = () => 
    {
        // navigation.navigate('PdfViewer', { myPath: "pdfPath" });
        navigation.navigate('PdfViewer', { myPath: pdfPath });
        // navigation.navigate('PdfViewer');
    }

    if(name == "Jar Test"){
        console.log("JarTest")
    }else if(name == "DIY Water Filter")
    {
        console.log("DIY Water Filter")
    }



    return (
        
            <View style={styles.scrollContainer}>
                {/*<Video controls={true} source={{uri:"https://youtu.be/9mplI5qEhxk"}} paused={true} // Can be a URL or a local file.
                    ref={(ref) =>
                    {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}               // Callback when video cannot be loaded
                    style={styles.videoContainer}
                />*/}
                <View>
               <YoutubePlayer
                    height={300}
                    play={true}
                    videoId={'KRgRbjw2dIM'}
                />
                </View>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.gradeText}>Grade: {grade}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.detailsText} >Details</Text>
                    <Text style={styles.descriptionText}>
                        Wastewater treatment is of the utmost importance due to the fact that much of the wastewater
                        generated is released into rivers that provide the drinking water in our daily life. When wastewater
                        treatment is not done properly it can lead to possible water shortages caused by contamination. In this activity students will learn about jar tests which are
                        tests that stimulate the process of coagulation and flocculation with chemical admixtures in order to remove the
                        unwanted contents from wastewater. At the end of this activity students will know how to determine the
                        optimum dosage and appropriate chemical admixtures.
                    </Text>
                </View>
                <Text style={styles.attachmentsText}>Attachments</Text>
                <TouchableOpacity style={styles.pdfImageContainer} onPress={handlePdf}>
                    <Image style={styles.pdfImage} source={require('../../assets/PDF.png')} resizeMode='contain' />
                </TouchableOpacity>
            </View>

    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        top: 0,
        position: 'absolute',
    },
    videoContainer: {
        width: '100%',
        height: 240,
        // width: '100%',
        // top: 0,
        // backgroundColor: 'black',
        // opacity: 90
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingLeft: 10,
        // color: '#00bd48',
        color: global.primary,
        paddingTop: 10,
    },
    gradeText: {
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 15,
        fontSize: 15,
    },
    descriptionContainer: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    detailsText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    descriptionText: {
        paddingTop: 10,
        fontSize: 13
    },
    attachmentsText: {
        paddingLeft: 10,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 15
    },
    pdfImage: {
        width: 70,
        height: 70,
        // tintColor: '#00bd48',
        tintColor: global.primary,
    },
    pdfImageContainer: {
        paddingTop: 15,
        paddingLeft: 10
    },
    downloadImageContainer: {
        paddingTop: 10,
        paddingLeft: 20
    },
    downloadImage: {
        width: 40,
        height: 40,
        color: 'green'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})

export default Activitydetailsscreen;
