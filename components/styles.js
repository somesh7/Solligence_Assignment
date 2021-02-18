import {StyleSheet, TextInput} from "react-native"
import { color } from "react-native-reanimated"

export const styles = StyleSheet.create({
    table: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    text1: {
        fontSize: 15,
        padding: 20,
        textAlign: "center",
        color: "#fff"
    },
    text4: {
        color: "black",
        fontSize: 20,
        fontWeight: "300",
        textAlign: "center",
        padding: 20,
        textDecorationLine: "underline"

    },
    btn: {
        width:20,
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    heading: {
        textAlign: "center",
      fontSize: 35,
      padding: 10,
      color: "#8c0000",
      fontWeight: "700",
      textDecorationLine: "underline"
    },
    btnview: {
        borderRadius: 20,
        flex: 0.1,
        marginLeft: 290,
        marginBottom: 30,
        padding : 4

    },

    firstTab: {
        fontSize: 50,
        textAlign: "justify"
    },

    part: {

         backgroundColor: "#008c65",
         flex: 4,
         justifyContent: "flex-start",
         alignItems: "center"
    },
    part1: {
        flex: 0.1,
        marginLeft: 290,
        marginBottom: 30,
        padding : 15
           

  },
    part2: {
        
        marginLeft: 290,
        padding : 15,
        borderRadius: 2

    },
    edit: {
        paddingBottom: 30
    },
    part3: {
        marginTop: 10,
        padding : 15,
        borderRadius: 2
        
    },

    header: {
        backgroundColor: "#008c65",

    },

    sec_btn: { 
        marginTop: 15,
        padding: 15,
        textAlign: "center",
        borderColor: "#008c65"    

    },
    text_header: {
        fontWeight: "bold",
        

    },
    footer:{
         
         backgroundColor: "#fff",
         borderTopLeftRadius: 30,
         borderTopRightRadius: 30,
         paddingHorizontal: 20,
         paddingVertical: 30,
         },
    text_footer: {
        fontSize: 18

    },
    text: {
        color: "#fff",
        fontSize: 23,
        textAlign: "center"

    },
    text2: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
        padding: 20,
        color: "#fff"
    },
    container: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        fontSize: 17,
        width: 250,
        borderColor: "black",
        borderWidth: 1.5,
        marginVertical: 8,
        height: 40
    },
    value: {
        color: "#fff",
        padding: 15,
        fontSize: 30,
        backgroundColor: "#008c65",
        alignItems: "center"
    },
    
    
    form: {
        width: 200,
        paddingTop: 120,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },


   tabnavi: {
       fontSize: 20,
       textAlign: "center",
       backgroundColor: "blue"

    }
  })