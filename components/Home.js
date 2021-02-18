import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, Text, Button, Alert} from "react-native";


import HomeData from "./HomeData"
import UserDetail from "./UserDetail"
import { styles } from "./styles";

const Home = ( {route, navigation} ) => {
  const [email, setEmail] = useState('')
  const [pass, getPass] = useState('')
 

  


  useEffect(() => {
    setEmail(route.params.top);
    getPass(route.params.bot);


  }, [])

   const deleteData = () => {
    Alert.alert(
      'Delete this Data',
      'Are you Sure? Do you want to Delete this Data permanently?',
      
      [
        {
          text: 'No',
          onPress: () => {
            navigation.navigate('Home')
            
          },
          style: 'cancel'
        },
        { text: 'Yes', onPress: () =>  {
          
        } }
      ],
      { cancelable: false }
    );
}


   const btnLogout = () => {
    Alert.alert(
      'Alert',
      'Do you want to Logout?',
      [
        {
          text: 'No',
          onPress: () => {
            navigation.navigate('Home', { screen: 'Home' })
          },
          style: 'cancel'
        },
        { text: 'Yes', onPress: () =>  {
          navigation.navigate('Signup', { screen: 'Signup'
          })
        } }
      ],
      { cancelable: false }
    );
  }

   
    return (
      <>   
      <View>
        <Text style={styles.text4}>
          USER DATA
        </Text>
      </View>
      <View style={styles.part1}>

              <Button 
         title={"Logout"}
                  color={"red"}
                  onPress={btnLogout}
                  
         /> 
          </View> 

       

        <View style={styles.part}>
          <Text style={styles.value}> E-mail : {email} </Text>
          <Text style={styles.value}> Password : {pass} </Text>


        </View>
         
        </>
    )
}

export default Home;