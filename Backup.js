/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect, Component } from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   TextInput,
   View,
   ScrollView,
   Alert,
   FlatList
 } from 'react-native';
 
 import Explanation from './components/Explanation';
 import ThreadTable from './components/ThreadTable';
 
 export default class App extends Component {
 
   constructor(props) {
     super(props);
     this.state = {
       tex: '',
       dtex: '',
       denye: '',
       nm: '',
       ne: '',
       isThreadTableHidden: false,
       FlatListItems: []
     };
   }
 
   fCalcCarp(v, p) {
     if (v != 0) {
       var asd = parseFloat(Number(v.replace(",", ".")) * p).toFixed(2).toString();
       return asd;
     }
     else {
       return '';
     }
   }
 
   fCalcBol(p, v) {
     if (v != 0) {
       var asd = parseFloat(p / Number(v.replace(",", "."))).toFixed(2).toString();
       return asd;
     }
     else {
       return '';
     }
   }
 
   render() {
     return (
       <View style={styles.container}>
         {this.state.isThreadTableHidden ? (
         <ScrollView id="conversionContainer" style={styles.containerContent}>
           <View style={styles.containerRow}>
             <Text style={styles.textRowCaption}>TEX</Text>
             <TextInput
               id="TEX"
               keyboardType="numeric"
               style={styles.textInputRow}
               placeholder="TEX"
               value={this.state.tex}
               onChangeText={(value) => this.setState({
                 tex: value.replace(",", "."),
                 dtex: this.fCalcCarp(value, 10),
                 denye: this.fCalcCarp(value, 9),
                 nm: this.fCalcBol(1000, value),
                 ne: this.fCalcBol(590, value)
               })}>
             </TextInput>
           </View>
           <View style={styles.containerRow}>
             <Text style={styles.textRowCaption}>DTEX</Text>
             <TextInput
               id="DTEX"
               keyboardType="numeric"
               style={styles.textInputRow}
               placeholder="DTEX"
               value={this.state.dtex}
               onChangeText={(value) => this.setState({
                 tex: this.fCalcCarp(value, 0.1),
                 dtex: value.replace(",", "."),
                 denye: this.fCalcCarp(value, 0.9),
                 nm: this.fCalcBol(10000, value),
                 ne: this.fCalcBol(5900, value)
               })}>
             </TextInput>
           </View>
           <View style={styles.containerRow}>
             <Text style={styles.textRowCaption}>DENYE</Text>
             <TextInput
               id="DENYE"
               keyboardType="numeric"
               style={styles.textInputRow}
               placeholder="DENYE"
               value={this.state.denye}
               onChangeText={(value) => this.setState({
                 tex: this.fCalcCarp(value, 0.11),
                 dtex: this.fCalcCarp(value, 1.11),
                 denye: value.replace(",", "."),
                 nm: this.fCalcBol(9000, value),
                 ne: this.fCalcBol(5315, value)
               })}>
             </TextInput>
           </View>
           <View style={styles.containerRow}>
             <Text style={styles.textRowCaption}>NM</Text>
             <TextInput
               id="NM"
               keyboardType="numeric"
               style={styles.textInputRow}
               placeholder="NM"
               value={this.state.nm}
               onChangeText={(value) => this.setState({
                 tex: this.fCalcBol(1000, value),
                 dtex: this.fCalcBol(10000, value),
                 denye: this.fCalcBol(9000, value),
                 nm: value.replace(",", "."),
                 ne: this.fCalcCarp(value, 0.59)
               })}>
             </TextInput>
           </View>
           <View style={styles.containerRow}>
             <Text style={styles.textRowCaption}>NE</Text>
             <TextInput
               id="NE"
               keyboardType="numeric"
               style={styles.textInputRow}
               placeholder="NE"
               value={this.state.ne}
               onChangeText={(value) => this.setState({
                 tex: this.fCalcBol(590, value),
                 dtex: this.fCalcBol(5900, value),
                 denye: this.fCalcBol(5315, value),
                 nm: this.fCalcCarp(value, 1.69),
                 ne: value.replace(",", ".")
               })}>
             </TextInput>
           </View>
           <View style={styles.containerExplanationContent}>
             <Explanation 
             caption='TEX: ' 
             content='Uluslararası sistemdir. Her türlü iplik için kullanılabilir. 1000 metre ipliğin kaç gram geldiğinin ifadesidir.' 
             example='Örnek; 1000 m iplik...50 gr ise...50 Tex'></Explanation>
             <Explanation 
             caption='DTEX: ' 
             content='Her türlü iplik için kullanılabilir. 10000 metre ipliğin kaç gram geldiğinin ifadesidir.' 
             example='Örnek; 1000 m iplik...500 gr ise...500 Dtex'></Explanation>
             <Explanation 
             caption='DENYE: ' 
             content='Filament ipliklerin ve liflerin numaralandırmasında kullanılır. 9000 metre iplikteki gramların sayısını belirtir.' 
             example='Örnek; 9000 m iplik...200 gr ise...200 Denye'></Explanation>
             <Explanation 
             caption='NM: ' 
             content='Bir gram ağırlığındaki ipliğin kaç metre olduğunun ifadesidir.' 
             example='Örnek; Nm20...1 gramı 20 m olan iplik'></Explanation>
             <Explanation 
             caption='NE: ' 
             content='Pamuk ipliklerinin numaralandırılmasında kullanılır, 1 libre iplikteki 840 yardaların sayısıdır.' 
             example=''></Explanation>
           </View>
         </ScrollView>) : 
         null
         }
         <ThreadTable></ThreadTable>
         <View style={styles.containerNav}>
           <Button color="#A7ABB7" onPress={value => this.setState({ isThreadTableHidden: false })} style={styles.buttonOne} title="İplik Tablosu"></Button>
           <Button color="#A7ABB7" onPress={value => this.setState({ isThreadTableHidden: true })} style={styles.buttonOne} title="Çevrim"></Button>
         </View>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#282C34'
   },
   containerNav: {
     backgroundColor: '#41454D',
     width: '100%',
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     flexDirection: 'row',
     padding: 10
   },
   containerContent: {
     width:"100%",
     height:"100%",
     padding: 15
   },
   containerRow: {
     backgroundColor: '#282C34',
     display: 'flex',
     justifyContent: "space-between",
     alignItems: "center",
     flexDirection: 'row',
     padding: 5
   },
   textRowCaption: {
     fontWeight: "bold",
     color: '#F0F8FF'
   },
   textInputRow: {
     backgroundColor: 'white',
     width: '50%'
   },
   // explanation
   containerExplanationContent:{
     width:"100%"
   }
 })
 