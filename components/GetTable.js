import React, { useEffect, useState } from "react";
import {View} from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import {styles} from "./styles";


const GetTable = ( {route} ) => {

    const [tableHead, setTableHead] = useState('Email', 'Password'); 
    const [tableData, setTableData] = useState( )

    useEffect(() => {
      setTableData(route.params.paramKey1)
    })

   

    return (
        <View style={styles.table}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
          
        </Table>
      </View>
    )
};
export default GetTable;