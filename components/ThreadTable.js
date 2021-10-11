import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import { Picker } from '@react-native-picker/picker';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

import SeparatorH from './SeparatorH';
import SeparatorV from './SeparatorV';
import RoundButton from './RoundButton';


const ThreadTable = () => {
  // Row Selection background
  const [rowSelect, setRowSelect] = useState("");
  function handleSelection(params) {
    setRowSelect(params.toString());
  }

  let [flatListItems, setFlatListItems] = useState([]);

  let [pickerItems, setPickerItems] = useState([]);
  const pickerItemsSet = pickerItems.map(i => (
    <Picker.Item style={{ color: '#7183E7' }} key={i} label={i.toString()} value={i.toString()} />
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
      tx.executeSql(
        "SELECT NAME FROM THREAD_TABLE GROUP BY NAME ORDER BY NAME",
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i).NAME);
          setPickerItems(temp);
        },
        (error) => { console.log(error) }
      );
    });
  }, []);

  // POPUP İNFO
  const [popupVisible, setPopupVisible] = useState(false);

  function getImageSource() {
    switch (selectedThread) {
      case "CONFİL":
        return require('../assets/Images/CONFİL.jpg');
      case "DUMA":
        return require('../assets/Images/DUMA.jpg');
      case "DURABOBBİNS":
        return require('../assets/Images/DURABOBBİNS.jpg');
      case "DURABOND N00":
        return require('../assets/Images/DURABOND_N00.jpg');
      case "DURABOND P":
        return require('../assets/Images/DURABOND_P.jpg');
      case "DURACOTTON":
        return require('../assets/Images/DURACOTTON.jpg');
      case "DURAFİX RECYCLE":
        return require('../assets/Images/DURAFİX_RECYCLE.jpg');
      case "DURAFİX":
        return require('../assets/Images/DURAFİX.jpg');
      case "DURAFLEX":
        return require('../assets/Images/DURAFLEX.jpg');
      case "FİRE SAFE M-ARAMİD":
        return require('../assets/Images/DURAK_FİRE_SAFE_M-ARAMİD.jpg');
      case "FİRE SAFE P-ARAMİD":
        return require('../assets/Images/DURAK_FİRE_SAFE_P-ARAMİD.jpg');
      case "DURAKRİL":
        return require('../assets/Images/DURAKRİL.jpg');
      case "DURALESS":
        return require('../assets/Images/DURALESS.jpg');
      case "DURALON":
        return require('../assets/Images/DURALON.jpg');
      case "DURAPOL MET PLUS":
        return require('../assets/Images/DURAPOL_MET_PLUS.jpg');
      case "DURAPOL":
        return require('../assets/Images/DURAPOL.jpg');
      case "DURATEX RECYCLE":
        return require('../assets/Images/DURATEX_RECYCLE.jpg');
      case "DURATEX":
        return require('../assets/Images/DURATEX.jpg');
      case "DURAVİS":
        return require('../assets/Images/DURAVİS.jpg');
      case "KAPİTONE":
        return require('../assets/Images/KAPİTONE.jpg');
      case "MEKİK":
        return require('../assets/Images/MEKİK.jpg');
      case "MİLK WAY":
        return require('../assets/Images/MİLK_WAY.jpg');
      case "POLY":
        return require('../assets/Images/POLY.jpg');
      case "POLYJET 120 RECYCLE":
        return require('../assets/Images/POLYJET_120_RECYCLE.jpg');
      case "POLYJET":
        return require('../assets/Images/POLYJET.jpg');
      case "POLYSOFT RECYCLE":
        return require('../assets/Images/POLYSOFT_RECYCLE.jpg');
      case "POLYSOFT":
        return require('../assets/Images/POLYSOFT.jpg');
      case "POLYSTRONG (PC)":
        return require('../assets/Images/POLYSTRON(PC).jpg');
      case "POLYSTRONG (PP) RECYCLE":
        return require('../assets/Images/POLYSTRONG_(PP)_RECYCLE.jpg');
      case "POLYSTRONG PREMİUM":
        return require('../assets/Images/POLYSTRONG_PREMİUM.jpg');
      case "POLYSTRONG (PP)":
        return require('../assets/Images/POLYSTRONG(PP).jpg');
      case "QTT":
        return require('../assets/Images/QTT.jpg');
      case "REFLECTR":
        return require('../assets/Images/REFLECTR.jpg');
      case "SOFTEX":
        return require('../assets/Images/SOFTEX.jpg');
      case "VARDOLA":
        return require('../assets/Images/VARDOLA.jpg');
      case "VİSCO":
        return require('../assets/Images/VİSCO.jpg');
      default:
        return require('../assets/Images/threadNULL.jpg');
    }
  };

  var imageSource = getImageSource();

  //POPUP AÇIKLAMA VE KULLANIM ALANLARI
  const [aciklama, setAciklama] = useState();
  const [kullanimAlanlari, setKullanimAlanlari] = useState();
  function getInfosFromSQLite(threadName) {
    var db = openDatabase({
      name: "db",
      createFromLocation: "~ThreadDB.db", location: 'Library'
    },
      openCB, errorCB);

    enablePromise();
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT ACIKLAMA, KULLANIM_ALANLARI FROM THREAD_TABLE WHERE NAME = '" + threadName.toString() + "' LIMIT 1",
        [],
        (tx, results) => {
          var aciklama = results.rows.item(0).ACIKLAMA;
          setAciklama(aciklama);
          var kullanim = results.rows.item(0).KULLANIM_ALANLARI;
          setKullanimAlanlari(kullanim);

        },
        (error) => { console.log(error) }
      );
    });
  }


  let listItemView = (item) => {
    return (
      <View>
        <View onTouchEnd={() => handleSelection(item.LOGICALREF)}
          key={item.NAME}
          style={{ flexDirection: "row", backgroundColor: rowSelect == item.LOGICALREF ? "#7C8DEB" : "#BEC6CD", width: "100%" }}>
          {/* <Text style={{flex: 1, color:'#F0F8FF'}}>{item.LOGICALREF}</Text> */}
          {/* <Text style={{flex: 2, color:'#F0F8FF', paddingRight:5}}>{item.NAME}</Text> */}
          <Text style={{ flex: 3, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 2 }}>{item.TKT_NO}</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 4, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 3 }}>{item.METRAJ}</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 5, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 3 }}>{item.GRAMAJ}</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 6, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 2 }}>{item.NOM_TEX}</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 7, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 2 }}>{item.KONIK_TIPI}</Text>
          <SeparatorH Width={1.5}/>
          <Text style={{ flex: 8, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 2 }}>{item.KUTU_BOBIN_ADET}</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 9, color: '#0F131B', padding: 8, fontSize: 12, flexGrow: 2 }}>{item.KOLI_BOBIN_ADET}</Text>
        </View>
        <SeparatorV></SeparatorV>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ width: "100%", padding: 8, paddingBottom: 0 }}>
        <View style={{ backgroundColor: "#4A5BB9", width: "100%", marginBottom: 8}}>
          <Picker
            style={{ color: "#FFFFFF", width: "100%" }}
            selectedValue={selectedThread}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedThread(itemValue);
              getThreadsFromSQLite(itemValue);
              getInfosFromSQLite(itemValue);
            }
            }>
            <Picker.Item style={{ color: '#7183E7' }} label="Seçiniz" value="java" />
            {pickerItemsSet}
          </Picker>
        </View>
      </View>
        <View
          style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ flex: 1, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 3, paddingLeft: 0, textAlign:"center" }}>Ürün Özellikleri</Text>
          {/* <View style={{ height: '100%', width: 1.5, backgroundColor: 'white' }}></View> */}
          <SeparatorH Width={1.5}/>
          <Text style={{ flex: 2, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 1, paddingRight: 0, textAlign:"center" }}>Bobin Adedi</Text>
        </View>
        <SeparatorV></SeparatorV>
        <View
          style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ flex: 3, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 2, }}>Tkt No</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 4, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 3 }}>Metraj</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 5, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 3 }}>Gramaj</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 6, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 2 }}>Nom. Tex</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 7, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 2 }}>Konik Tipi</Text>
          <SeparatorH Width={1.5}/>
          <Text style={{ flex: 8, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 2 }}>Kutu</Text>
          <SeparatorH Width={0.5}/>
          <Text style={{ flex: 9, color: '#0F131B', padding: 8, fontSize: 12, fontWeight: "bold", flexGrow: 2, }}>Koli</Text>
        </View>
      <SeparatorV></SeparatorV>
      <View style={{ flex: 1 }}>
        <FlatList
          data={flatListItems}
          // ItemSeparatorComponent={listViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
        ></FlatList>
      </View>


      <RoundButton onPress={() => {
        setPopupVisible(true);
      }}></RoundButton>


      <Dialog
        visible={popupVisible}
        onTouchOutside={() => {
          setPopupVisible(false);
        }}
      >
        <DialogContent style={{ maxHeight: 340 }}>
          <ScrollView style={{ height: 300, width: 300, marginTop:20 }}>
            <View style={{  }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Açıklama:</Text>
              <Text>{aciklama}</Text>
            </View>
            <Image source={imageSource}
              resizeMode="contain"
              style={{ width: 200, height: 200, alignSelf: 'center', margin: 10 }}
            ></Image>
            <View style={{  }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Kullanım Alanları:</Text>
              <Text>{kullanimAlanlari}</Text>
            </View>
          </ScrollView>
        </DialogContent>
      </Dialog>

    </View>
  );
};

export default ThreadTable;
