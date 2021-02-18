
import React, {useState} from "react";
import {View, Text, Alert, TextInput, Button} from "react-native"
import {styles} from "./styles"



const Signup = ( {navigation} ) => {
  const [inputValueTop, getInputValueTop] = useState('')
  const [inputValueBot, getInputValueBot] = useState('')



    const getSuccess = () => {
       navigation.navigate('Login', { screen: 'Login' });
    }

    return (
      <>
        <View style={styles.header}>
            <Text style={styles.text}> Welcome to </Text>
             <Text style={styles.heading}> SOLLIGENCE </Text> 
            
            <Text style={styles.text1}> Please SIGN UP to continue...😃</Text>

            <Button style={styles.sec_btn}
                   title={" Existing User? Click Here"}
                   color={"#008c65"}                  
                   onPress={getSuccess}
                   
                /> 
            </View>

            <View style={styles.container}>
        

        <View style={styles.footer}>
           <Text style={styles.text_footer}> E-Mail </Text>
              
              <TextInput placeholder="Enter your email id"
              name="email"
              autoCapitalize="none"
              autoCompleteType="off"
                  onChangeText={text => {
                      getInputValueTop(text)
                  }}
                  value={inputValueTop}
                  style={styles.input} />
               
                  
                   
                   <Text style={styles.text_footer}> Password </Text>
                   

                <TextInput placeholder="Enter your password"
                name="password"
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
                  title={"Sign Up"}
                  color={"#008c65"}
                  onPress={getSuccess}  />

                  

               </View>
        </>
    )
};

export default Signup;