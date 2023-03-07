import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native';
import { ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardItem from '../../components/CardItem';


const initData = [
  {
    id: 2,
    activityName: 'Jar Test',
    imagePath: require('../../assets/Jartest.jpeg'),
    description: 'There are many ways in which wastewater is treated, all of which are extremely important for ensuring safe drinking water. In this activity students will explore the Jar Test which is a test used to estimate the minimum coagulant dose required to achieve certain water quality goals.',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/JarTestHandout.pdf'),
    pdfPath: require('../../assets/pdfs/JarTestHandout.pdf'),
    videoPath: {uri:"https://youtu.be/9mplI5qEhxk"}
  },
  {
    id: 1,
    activityName: 'Water Quality Parameters',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Testing the quality of water is an extremely important aspect of water and wastewater management. In this activity students will learn about the parameters that need to be met in order for water to pass various quality tests.',
    grade: 0,
    // pdfPath: require('/Users/leonardoflorero/Developer/ReactNativeProjects/NpxProjects/waterpal/assets/pdfs/WaterQualityParametersHandout.pdf'),
    pdfPath: require('../../assets/pdfs/WaterQualityParametersHandout.pdf'),
    videoPath: {uri:"https://youtu.be/9mplI5qEhxk"}
  },
  // {
  //   id: 3,
  //   activityName: 'Water Pumps',
  //   imagePath: require('../assets/WaterPumps.jpeg'),
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit scelerisque posuere.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nunc erat est, dignissim eget mauris ac,venenatis lacinia augue.Mauris sodales.',
  //   grade: 5,
  // },
  // {
  //   id: 4,
  //   activityName: 'Water Pumps 7',
  //   imagePath: require('../assets/WaterPumps.jpeg'),
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit scelerisque posuere.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nunc erat est, dignissim eget mauris ac,venenatis lacinia augue.Mauris sodales.',
  //   grade: 7,
  // },
  // {
  //   id: 5,
  //   activityName: 'Jar Test 9',
  //   imagePath: require('../assets/Jartest.jpeg'),
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit scelerisque posuere.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Nunc erat est, dignissim eget mauris ac,venenatis lacinia augue.Mauris sodales.',
  //   grade: 9,
  // },
];

const secondData = [
  {
    id: 5,
    activityName: 'Jar Test',
    imagePath: require('../../assets/Jartest.jpeg'),
    description: 'There are many ways in which wastewater is treated, all of which are extremely important for ensuring safe drinking water. In this activity students will explore the Jar Test which is a test used to estimate the minimum coagulant dose required to achieve certain water quality goals.',
    grade: 5,
  },
]


const thirdData = [
  {
    id: 6,
    activityName: 'Water Quality Parameters',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Testing the quality of water is an extremely important aspect of water and wastewater management. In this activity students will learn about the parameters that need to be met in order for water to pass various quality tests.',
    grade: 6,
  },
];

const fourthData = [
  {
    id: 4,
    activityName: 'Water Quality Parameters',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Testing the quality of water is an extremely important aspect of water and wastewater management. In this activity students will learn about the parameters that need to be met in order for water to pass various quality tests.',
    grade: 8,
  },
]

const fifthData = [
  {
    id: 5,
    activityName: 'Water Quality Parameters',
    imagePath: require('../../assets/AcitvityImages/WaterQuality.png'),
    description: 'Testing the quality of water is an extremely important aspect of water and wastewater management. In this activity students will learn about the parameters that need to be met in order for water to pass various quality tests.',
    grade: 9,
  },
  {
    id: 3,
    activityName: 'Jar Test',
    imagePath: require('../../assets/Jartest.jpeg'),
    description: 'There are many ways in which wastewater is treated, all of which are extremely important for ensuring safe drinking water. In this activity students will explore the Jar Test which is a test used to estimate the minimum coagulant dose required to achieve certain water quality goals.',
    grade: 12,
  },
]

const Buttons = [
  {
    id: 0,
    grades: 'All',
  },
  {
    id: 1,
    grades: 'Middle School',
  },
  {
    id: 2,
    grades: 'High School',
  }
]






const InstructorHomeScreen = ({ navigation ,route}) => 
{

  //const {Role} = route.params;
  //console.log(Role);

  const [DATA, setData] = useState(initData);
  var filteredData = [];

  const resetData = () => 
  {
    setData(initData);
  }


  const SelectionButton = (props) =>
  {
    const handleGradeSelection = (grade) =>
    {

      if (grade === 'All')
      {
        setData(initData)
      }

      if (grade === '5')
      {
        setData(secondData)
      }

      if (grade === '6')
      {
        setData(thirdData)
      }

      if (grade === '7')
      {
        // setData(thirdData)
      }

      if (grade === '8')
      {
        setData(fourthData)
      }

      if (grade === '9-12')
      {
        setData(fifthData)
      }
    }

    return (
      <View style={{ alignSelf: 'center', paddingRight: 20, paddingLeft: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: global.ternary, width: 110, height: 35, alignSelf: 'center', justifyContent: 'center', borderRadius: 15 }}
          onPress={() => handleGradeSelection(props.grades)}
        //Adding the () => prevents the component from calling the functions 
        //when the component is initially loaded
        >
          <Text
            style={{ color: global.secondary, fontWeight: 'bold', fontSize: 15, alignSelf: 'center' }}
          >
            Grade: {props.grades}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <CardItem
      activityName={item.activityName}
      imagePath={item.imagePath}
      description={item.description}
    // grade={item.grade}
    // pdfPath={item.pdfPath}
    // videoPath={item.videoPath}
    />
  );

  const renderButton = ({ item }) => (
    <SelectionButton grades={item.grades} />
  );

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '95%' }}>
        {/* <FlatList
          data={Buttons}
          renderItem={renderButton}
          keyExtractor={item2 => item2.id}
          style={selectionBarStyles.bar}
          horizontal={true}
        /> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={homeStyles.overallContainer}
        />
      </View>
    </SafeAreaView>
  );

};


export default InstructorHomeScreen;

const selectionBarStyles = StyleSheet.create({
  bar: {
    width: '100%',
    height: 65,
    backgroundColor: 'white',

  }
})

const homeStyles = StyleSheet.create({
  overallContainer: {
    width: '100%',
    height: '100%'
  },
  differentViewsContainer: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  }
});


