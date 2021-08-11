import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import {Picker} from '@react-native-picker/picker';

import SeparatorH from './SeparatorH';
import SeparatorV from './SeparatorV';


const ThreadTable = () => {
  // Row Selection background
  const [rowSelect, setRowSelect] = useState("");
  function handleSelection(params) {
    setRowSelect(params.toString());
  }

  let [flatListItems, setFlatListItems] = useState([]);

  let [pickerItems, setPickerItems] = useState([]);
  const pickerItemsSet = pickerItems.map(i => (
    <Picker.Item style={{color:'#7183E7'}} key={i} label={i.toString()} value={i.toString()} />
  ));

  // Picker Select değişince sqlden tablo çekme
  const [selectedThread, setSelectedThread] = useState();
  function getThreadsFromSQLite(threadName) {
    var db = openDatabase({
      name: "db",
      createFromLocation: "~ThreadDB.db", location: 'Library'
    },
      openCB, errorCB);

    enablePromise();
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM THREAD_TABLE WHERE NAME = '" + threadName.toString() + "'",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        },
        (error) => { console.log(error) }
      );
    });
  }

  // var db = openDatabase({ name: "db", 
  // createFromLocation: "~ThreadDB.db", location: 'Library' }, 
  // openCB, errorCB);
  function errorCB(err) {
    console.log("SQL Error: " + err);
  }
  function openCB() {
    console.log("Database OPENED");
  }

  useEffect(() => {
    var db = openDatabase({
      name: "db",
      createFromLocation: "~ThreadDB.db", location: 'Library'
    },
      openCB, errorCB);
  
    enablePromise();
    db.transaction((tx) => {
      // tx.executeSql(
      //   "SELECT * FROM THREAD_TABLE",
      //   [],
      //   (tx, results) => {
      //     var temp = [];
      //     for (let i = 0; i < results.rows.length; ++i)
      //       temp.push(results.rows.item(i));
      //     setFlatListItems(temp);
      //   },
      //   (error) => {console.log(error)}
      // );
      // Fill Picker Select
      tx.executeSql(
        "SELECT NAME FROM THREAD_TABLE GROUP BY NAME ORDER BY NAME",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i).NAME);
          setPickerItems(temp);
        },
        (error) => {console.log(error)}
      );
    });
  }, []);

  let listItemView = (item) => {
    return (
      <View>
        <View onTouchEnd={() => handleSelection(item.LOGICALREF)}
          key={item.NAME}
          style={{ flexDirection: "row", backgroundColor: rowSelect == item.LOGICALREF ? "#7C8DEB" : "#BEC6CD", width: "100%" }}>
          {/* <Text style={{flex: 1, color:'#F0F8FF'}}>{item.LOGICALREF}</Text> */}
          {/* <Text style={{flex: 2, color:'#F0F8FF', paddingRight:5}}>{item.NAME}</Text> */}
          <Text style={{ flex: 3, color: '#0F131B', padding: 10, fontSize: 12, flexGrow: 5 }}>{item.TKT_NO}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 4, color: '#0F131B', padding: 10, fontSize: 12, flexGrow: 6 }}>{item.METRAJ}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 5, color: '#0F131B', padding: 10, fontSize: 12 }}>{item.GRAMAJ}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 6, color: '#0F131B', padding: 10, fontSize: 12 }}>{item.NOM_TEX}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 7, color: '#0F131B', padding: 10, fontSize: 12 }}>{item.KONIK_TIPI}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 8, color: '#0F131B', padding: 10, fontSize: 12 }}>{item.KUTU_BOBIN_ADET}</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 9, color: '#0F131B', padding: 10, fontSize: 12 }}>{item.KOLI_BOBIN_ADET}</Text>
        </View>
        <SeparatorV></SeparatorV>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ width: "100%", padding: 10, paddingBottom:0 }}>
        <View style={{ backgroundColor: "#4A5BB9", width: "100%", marginBottom:10 }}>
          <Picker
            style={{ color:"#FFFFFF", width: "100%" }}
            selectedValue={selectedThread}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedThread(itemValue);
              getThreadsFromSQLite(itemValue);
            }
            }>
            <Picker.Item style={{color:'#7183E7'}} label="Seçiniz" value="java" />
            {pickerItemsSet}
          </Picker>
        </View>
        <View
          style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ flex: 3, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold", paddingLeft:0, flexGrow:5 }}>Tkt No</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 4, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold", flexGrow:6 }}>Metraj</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 5, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold" }}>Gramaj</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 6, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold" }}>Nom. Tex</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 7, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold" }}>Konik Tipi</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 8, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold" }}>Kutu Bobin Adedi</Text>
          <SeparatorH></SeparatorH>
          <Text style={{ flex: 9, color: '#0F131B', padding: 10, fontSize:12, fontWeight:"bold", paddingRight:0 }}>Koli Bobin Adedi</Text>
        </View>
      </View>
          <SeparatorV></SeparatorV>
      <View style={{ flex: 1 }}>
        <FlatList
          data={flatListItems}
          // ItemSeparatorComponent={listViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
        />
      </View>
    </View>
  );
};

export default ThreadTable;