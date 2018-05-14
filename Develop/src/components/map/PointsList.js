/* eslint-disable*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');
class PointsList extends Component {
  render() {
    //console.log('This props points', this.props);
      if(this.props.points == null)
          return(
              <ScrollView style={styles.container}>
                    <Image source = {{uri:this.props.image}} style={{height:height/3,width:width,backgroundColor:'yellow'}}/>
                    <View style={{height:height/3,width:width,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff',opacity:0.5,fontSize:50}}>!</Text>
                        <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff',opacity:0.5}}>No Areas Selected</Text>
                    </View>
              </ScrollView>
          )
      if(1)
          return (
                <ScrollView style={styles.container}>
                    <Image source = {{uri:this.props.image}} style={{height:height/3,width:width,backgroundColor:'yellow'}}/>
                      {this.props.points.data.coordinates.map((point)=>{
                      return <CoorCard point = {point} key={Math.random()} style={{height:30}}/>
                      })}
                </ScrollView>
          );
      if(this.props.points.type == 'circle')
          return (
                <ScrollView style={styles.container}>
                  <View style={{height:height/10,width:width,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>radius: {this.props.points.data.radius}</Text>
                      <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>Center</Text>
                      <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>Latitude: {this.props.points.data.coordinates[0].latitude}</Text>
                      <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>Longitude: {this.props.points.data.coordinates[0].longitude}</Text>
                  </View>
                </ScrollView>
          );


  }
        }

const CoorCard = ({point}) => (
    <View key={Math.random()} style={{height:50}}>
           <View key={Math.random()} style={{flex:1,height:49,backgroundColor:'#2196F3',flexDirection:'row',alignItems:'center'}}>
               {/*<Text style={{fontFamily:'AvenirNext-bold',marginLeft:20,color:'#ffffff'}}>Lat: {point.longitude} </Text>
               <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>Lng: {point.longitude} </Text>*/}
               <View style={{flex:1,height:50,backgroundColor:'#64B5F6',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'AvenirNext-bold',marginLeft:20,color:'#ffffff'}}>Latitude</Text>
               </View>
               <View style={{flex:2,height:50,backgroundColor:'#42A5F5',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'AvenirNext-bold',marginLeft:20,color:'#ffffff'}}>{JSON.stringify(point.latitude).slice(0,-10)} </Text>
               </View>
               <View style={{flex:1,height:50,backgroundColor:'#64B5F6',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'AvenirNext-bold',marginLeft:20,color:'#ffffff'}}>Longitude</Text>
               </View>

               <View style={{flex:2,height:50,backgroundColor:'#42A5F5',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'AvenirNext-bold',marginLeft:20,color:'#ffffff'}}>{JSON.stringify(point.longitude).slice(0,-10)}</Text>
               </View>
           </View>
           <View style={{flex:1,marginLeft:20,height:1,backgroundColor:'#ffffff',opacity:0.5}}/>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = PointsList
