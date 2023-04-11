import React from 'react'
import { View, StyleSheet, ScrollView, Text,Button,TouchableOpacity} from 'react-native';
import { Slider } from 'react-native-elements/dist';
import { SliderBox } from 'react-native-image-slider-box';
import {WebView} from "react-native-webview"



const WaterTalk = () =>
{

    const onCheckTemp = () => {
        console.log(true)
        LinkPicked =  '<iframe width="500" height="300" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1984917/charts/1"></iframe>'
    }
    const images = [
        require('../../assets/DIY_Water_Test.jpg'),
        require('../../assets/WaterPal.jpg'),
        require('../../assets/Jartest.jpeg'),
    ]
    var LinkPicked =  '';



    return(
        <ScrollView style = {styles.container}>
            <SliderBox 
            images={images}
            dotColor="white"
            inactiveDotColor="black"
            dotStyle={{height: 20, width: 20, borderRadius: 50}}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop = {true}
            />
        <WebView
            androidHardwareAccelerationDisabled={true}
            automaticallyAdjustContentInsets={false}
            style={{opacity:.99,overflow: 'hidden', height:250 , width: '100%' }}
            source={{uri:LinkPicked}}
        />
        <View style = {styles.TSContainer}>
                <View style = {styles.fixToText}>
                    <TouchableOpacity style= {styles.TSButton} onPress={onCheckTemp}>
                       <Text style = {styles.TSButtonText}>
                            View Temperature
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton}>
                        <Text style = {styles.TSButtonText}>
                            Change Temperature
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.fixToText}>
                    <TouchableOpacity style= {styles.TSButton}>
                       <Text style = {styles.TSButtonText}>
                            View pH
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton}>
                        <Text style = {styles.TSButtonText}>
                            Change pH
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.fixToText}>
                    <TouchableOpacity style= {styles.TSButton}>
                       <Text style = {styles.TSButtonText}>
                            View Humidity!
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton}>
                        <Text style = {styles.TSButtonText}>
                            Change Humidity
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>

        <WebView
            androidHardwareAccelerationDisabled={true}
            automaticallyAdjustContentInsets={false}
            style={{opacity:.99,overflow: 'hidden', height:250 , width: '100%' }}
            source={{uri:LinkPicked}}
        />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        // backgroundColor: 'red',
        width: '100%',
        //top: 0,
        // bottom: 150,
        height: 40000,

    },
    ListSectionContainer: {
        //backgroundColor: '#283654',
    },
    container:{
        flex: 1,
        height:100
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 23,
        paddingLeft: 10,
        // color: '#00bd48',
        color: global.primary,
        paddingTop: 10,
    },
    TSContainer:{
        flex: 1,
        width: '100%',
        height: 300,
    },
    TSButton: {
        // backgroundColor: '#32ba00',
        backgroundColor: '#ADD8E6',
        height: 50,
        justifyContent: 'center',
        width: 75,
        alignItems: 'center',
        borderRadius: 15,
        left: 10,
    },
    TSButtonText:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '38.5%',
      },
    container:{
    flex: 1,
    height: 900
}
});

export default WaterTalk;

/*
            <View style = {styles.fixToText}>
                <View>
                    <TouchableOpacity style= {styles.TSButton}>
                       <Text style = {styles.TSButtonText}>
                            View Temperature
                       </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style= {styles.TSButton}>
                        <Text style = {styles.TSButtonText}>
                            View Temperature
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            */