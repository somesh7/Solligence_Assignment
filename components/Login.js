import React, {useState} from "react";
import {View, Text, Alert, TextInput, Button} from "react-native";
import Form from "./Form";
import {styles} from "./styles"


const Login = ( {navigation} ) => {
  const [inputValueTop, getInputValueTop] = useState('')
    const [inputValueBot, getInputValueBot] = useState('')

     const setSuccess = () => {

        Alert.alert(
            'Login Success',
            'Sign In Successful',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  navigation.navigate('Signup', { screen: 'Signup' })
                },
                style: 'cancel'
              },
              { text: 'OK', onPress: () =>  {
                navigation.navigate('Home', {
                  top: inputValueTop,
                  bot: inputValueBot
                })
              } }
            ],
            { cancelable: false }
          );
     }
   
          return (
            <> 
          
                <View style={styles.header}>
                <View>
                <Text style={styles.text2}> Welcome! 😃 </Text>
                </View>
                <View>
                <Text style={styles.text1}>
                    Please SIGN IN ...
                </Text>
                </View>
                </View>

                   
         <View style={styles.container}>
        

         <View style={styles.footer}>
            <Text style={styles.text_footer}> E-Mail </Text>
               
               <TextInput placeholder="Enter your email id"
               autoCapitalize="none"
               autoCompleteType="off"
                   onChangeText={text => {
                       getInputValueTop(text)
                   }}
                   value={inputValueTop}
                   style={styles.input} />
                
                   
                    
                    <Text style={styles.text_footer}> Password </Text>
                    

                 <TextInput placeholder="Enter your password"
               autoCapitalize="none"
               autoCompleteType="off"
               secureTextEntry={true}
                   onChangeText={text =>{
                       getInputValueBot(text)
                   }} 
                   value={inputValueBot}
                   style={styles.input} />  
                </View>
                <Button style={styles.part3}
                   title={"Sign In"}
                   color={"#008c65"}
                   onPress={setSuccess} />
                   
                </View>
                
                
                
</>
          )
          }
         
export default Login;