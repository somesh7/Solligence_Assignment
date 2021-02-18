import React, {useEffect, useState} from "react";
import {View, Button, Alert, Text} from "react-native"
import { styles } from "./styles";
import GetTable from "./GetTable"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { getPixelSizeForLayoutSize } from "react-native/Libraries/Utilities/PixelRatio";




const HomeData = ( {navigation} ) => {
  
    return (
        <>
        <View style={styles.part1}>
        <Button title="Open"
        color="black" onPress={() => navigation.openDrawer()} />
        </View> 
      </>

      
    );

}
export default HomeData;