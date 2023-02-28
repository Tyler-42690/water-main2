import React ,{useState}from 'react'
import {  View, Text ,Image,StatusBar ,TouchableOpacity} from 'react-native';
import { wpxToDp,hpxToDp } from '../../utils/stylesKits';
import { Icon,Input ,Button,} from 'react-native-elements'
import axios from 'axios';
//import Toast from 'teaset/components/Toast/Toast';
export default function Login({ navigation }) {
  const [useremail,setUseremail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={{
      alignItems: 'center',
      }}>
      
      <Image style={{
        top:25,
        height: hpxToDp(125),
        width: wpxToDp(150),
        
      }} 
        source={require("../../assets/WaterPal.png")}/>
      <Text style={{ marginTop:25, fontSize: 17, fontWeight: 'bold',color:'black'  }}>
        Where Learning Happens
      </Text>

    <Input
      placeholder='Input Email'
      inputStyle={{color:"#333"}}
      onChangeText={text => setUseremail(text)}
      leftIcon={
        <Icon
          name='email'
          size={24}
          
      />


      }

    />

    <Input
      placeholder='Input Password'
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
      leftIcon={
        <Icon
          name='lock'
          size={24}
          
      />

      }

    />


    <View>
      <Button
      buttonStyle={{width:"100%",borderRadius: 20,marginTop:20}}
      title="Login"
      onPress={() => {
        console.log(useremail)
        console.log(password)
        //navigation.navigate('Home')
        axios.get("http://47.89.252.2:5000/login.php?!="+useremail+"|"+password).then(
          response => {
              if(response.data['success']===1){
                console.log('success')
                navigation.navigate('Home',{Role: response.data['role']})
              }else {
    
              navigation.navigate('Tutorial')
            }
          },
          error => {
            console.log('error');
          }
        )
       
    }}
      />
    
      <Button
      buttonStyle={{width:"100%" ,borderRadius: 20,marginTop:20}}
      title="Creat Account"
      onPress={() => {navigation.navigate('Register')}}
      />
      <TouchableOpacity
        onPress={() => {navigation.navigate('Tutorial')}}
      >
        <Text
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          WaterPAL Tutorial
        </Text>
      </TouchableOpacity>
    </View>
    
    </View>
  )
}
