import React ,{useState}from 'react'
import {  View, Text ,Image,StatusBar ,TouchableOpacity,StyleSheet} from 'react-native';
import { wpxToDp,hpxToDp } from '../../utils/stylesKits';
import { Icon,Input ,Button,} from 'react-native-elements'
import axios from 'axios';
//import Toast from 'teaset/components/Toast/Toast';

const ResetPassword = () =>
{

    const [useremail,setUseremail] = useState('')
    const [password, setPassword] = useState('')
    const [newpassword,setNewPassword] = useState('')
  
    return (
      <View style={{
        alignItems: 'center',
        }}>
  
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

      <Input
        placeholder='Input New Password'
        secureTextEntry={true}
        onChangeText={text => setNewPassword(text)}
        leftIcon={
          <Icon
            name='lock'
            size={24}    
        />
        }
      />
  
  
      <View>
        <Button buttonStyle={{borderRadius: 20,marginTop:10}}
        title="Reset Password"
        onPress={() => {
          console.log(useremail)
          console.log(password)
          //navigation.navigate('Home')
          axios.get("http://47.89.252.2:5000/resetpassword.php?!="+useremail+"|"+password+"|"+newpassword).then(
            response => {
                if(response.data['success']===1){
                  console.log('success')
                }else {
                  console.log(response.data['error'])
              }
            },
            error => {
              console.log('error');
            }
          )
         
      }}
        />
 
      </View>
      
      </View>
    );
  
};

export default ResetPassword;

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