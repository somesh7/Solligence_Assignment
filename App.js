import React, { useEffect, useState } from 'react';
import {View} from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {styles} from "./components/styles";
import { ActivityIndicator } from 'react-native';

 

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);

  }, []);

if ( isLoading ) {
         return (
          
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
           <ActivityIndicator size="large" color="#00ff00" />
     </View>
     );
         }
 
  

  return (
  <>

<NavigationContainer>

   <Tab.Navigator 
   tabBarOptions={{
    
       activeTintColor: 'red',
       inactiveTintColor: '#fff',
       activeBackgroundColor: 'black',
       inactiveBackgroundColor: 'black',
           style: {
             
                 backgroundColor: 'black',
                 paddingBottom: 0,
                 
                 
           }
    }}>
       <Tab.Screen name={"Signup"} style={styles.firstTab} component={Signup} />
       <Tab.Screen name={"Login"} style={styles.firstTab} component={Login} />
       <Tab.Screen name={"Home"}   style={styles.firstTab} component={Home} />
       
    </Tab.Navigator>


    </NavigationContainer>
    
    
          
          
          </>

  );
}

export default App;
