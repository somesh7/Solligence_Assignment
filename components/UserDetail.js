import React from "react";
import { View,Button } from "react-native";
import { styles } from "./styles"

const UserDetail = ( {navigation} ) => {
    return (
        <View style={styles.part1}>
            <Button title="Open"
        
            color="black" onPress={() => navigation.openDrawer()} />
        </View>
    )
   
}
export default UserDetail;