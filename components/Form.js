import React, {useState} from "react";
import {View, TextInput, Button, Text} from "react-native";
import {styles} from "./styles"



const Form = (props) => {
    const [inputValueTop, getInputValueTop] = useState('')
    const [inputValueBot, getInputValueBot] = useState('')

    

    return (
        <>
    
    
         <View style={styles.container}>
        

         <View style={styles.footer}>
            <Text style={styles.text_footer}> E-Mail </Text>
               
               <TextInput placeholder="Enter your email id"
               autoCapitalize="none"
                   onChangeText={text => {
                       getInputValueTop(text)
                   }}
                   value={inputValueTop}
                   style={styles.input} />
                
                   
                    
                    <Text style={styles.text_footer}> Password </Text>
                    

                 <TextInput placeholder="Enter your password"
               autoCapitalize="none"
               secureTextEntry={true}
                   onChangeText={text =>{
                       getInputValueBot(text)
                   }} 
                   value={inputValueBot}
                   style={styles.input} />  
                </View>
                <Button style={styles.btn, {
                    paddingTop: 15
                }}
                   title={props.title}
                   onPress={props.success}
                   color={props.color}
                /> 
                </View>
                
               
         
           </>
        
    );
     
}
export default Form;
