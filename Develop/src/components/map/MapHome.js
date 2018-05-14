import React, { Component } from 'react';

import { Text, View, Dimensions,TouchableHighlight, TouchableOpacity,StyleSheet, Image, AsyncStorage, Platform} from 'react-native';

var on = require('../../../icons/design-hand-on.png');
var off = require('../../../icons/design-hand-off.png');
var drawon = require('../../../icons/design-draw-on.png');
var drawoff = require('../../../icons/design-draw-off.png');

const { width, height } = Dimensions.get('window');
//var  AreaSelector  = require('area-selector');
import {actionVineyardRoute, actionPushGateWeather, actionBlockRoute, actionPushFlowmeter} from '../../constants/actionRoutes';
import styles from '../styles/map/maphomestyles';
import PopUp from '../../../src/components/common/PopUp'
import AreaSelector from 'area-selector';
const Button = ({title,onPress}) => (
        <TouchableHighlight onPress={onPress} style={{height:50,width:50,flex:1,alignItems:'center',justifyContent:'center'}} underlayColor= 'transparent'>
           <View style={{height:50,width:width/5,alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>{title}</Text>
           </View>
        </TouchableHighlight>
      )
// const Button = ({title,onPress}) => (
//         <TouchableOpacity onPress={onPress} >
//            <View>
//                <Text>{title}</Text>
//            </View>
//         </TouchableOpacity>
//       )
class MapHome extends Component {
    constructor(props) {
    super(props);
    this.state = {
      drawMode : false,
      editMode : false,
      pan : true,
      markers: [],
      region:{
            latitude:38.491450,
            longitude:-122.456789,
            latitudeDelta:0.005,
            longitudeDelta:0.005
        }
      // you nee have marker sin the state here. [cordObjet,cordObjet]
  };
}

componentDidMount() {
  if(Platform.OS === 'android'){
setTimeout(
      () => { this.refs.Map.goto(this.state.region); },
      100
    );
  }
  else if (Platform.OS === 'ios') {
    this.refs.Map.goto(this.state.region);
  }
}

// componentDidMount()
// {
//   this.setTimeout(
//       () => { this.refs.Map.goto(this.state.region); },
//       1000
//     );
//   console.log("we are in componentDidMount");
//   //this.refs.Map.goto(this.state.region)
// //this.refs.Map.play();
// // this.setState({drawMode:!this.state.drawMode,pan:false});
// // this.refs.Map.play();
// // this.setState({drawType:'dropMarker'})
// }

saveNewMapViewDetail(){
  if(this.props.mode.renderMode=='map'){
  if( this.refs.Map.data() != null && this.refs.Map.data() != undefined && this.refs.Map.data().data.coordinates.length >0) {
   actionVineyardRoute.route.selectedAccount= this.props.selectedAccount;
  actionVineyardRoute.data= this.refs.Map.data().data.coordinates;
  this.props._handleNavigate(actionVineyardRoute);
}
}
else if (this.props.mode.renderMode== 'deviceMap') {
  if(this.refs.Map.data() != null && this.refs.Map.data() != undefined && this.refs.Map.data().data.length > 0){
    //console.log("data in weather station map data",this.refs.Map.data().data);
    actionPushGateWeather.route.selectedAccount= this.props.selectedAccount;
    actionPushGateWeather.data= {
      newDeviceCoordinates: this.refs.Map.data().data[this.refs.Map.data().data.length-1],
      deviceDataModal : this.props.deviceDataModal
    }
    actionPushGateWeather.route.title=this.props.deviceDataModal.deviceType;
    //this.refs.Map.data().data;
    this.props._handleNavigate(actionPushGateWeather);
    }
  }
    else if (this.props.mode.renderMode== 'drawBlock') {
      if (this.refs.Map.data().data.coordinates != null && this.refs.Map.data().data.coordinates != undefined && this.refs.Map.data().data.coordinates.length >0){
        actionBlockRoute.route.selectedAccount= this.props.selectedAccount;
        var  measuringEntityBoundArray = []
        var coordinatesArray= this.refs.Map.data().data.coordinates;
        for(var i in coordinatesArray){
          this.measuredEntityBoundsObj = {
            latitude:coordinatesArray[i].latitude,
            longitude:coordinatesArray[i].longitude,
            elevation:coordinatesArray[i].elevation
          }
          measuringEntityBoundArray.push(this.measuredEntityBoundsObj)
        }
        actionBlockRoute.data= measuringEntityBoundArray;
        actionBlockRoute.route.accountnumber= this.props.mode.accountnumber;
        //this.refs.Map.data().data;
        this.props._handleNavigate(actionBlockRoute);
        }
      }
        else if (this.props.mode.renderMode== 'blockDevice') {
          if( this.refs.Map.data().data.length > 0){
          //  console.log("data in weather station map data",this.refs.Map.data());
          actionPushFlowmeter.route.selectedAccount  = this.props.selectedAccount;
          actionPushFlowmeter.data= {
            newDeviceCoordinates: this.refs.Map.data().data[this.refs.Map.data().data.length-1],
            deviceDataModal : this.props.deviceDataModal,
            blockName : this.refs.Map._getPolygonName()
          }
          this.props._handleNavigate(actionPushFlowmeter);
            }
          }
}

_handleMarkerClick = (markerClicked) => {
//  console.log("This Marker is Clicked",markerClicked);
  var selectedDevice = this._getDevicebyMarker(markerClicked);
//  console.log("selectedDevice in _handleMarkerClick", selectedDevice);
if (selectedDevice.type == 'gateway' || selectedDevice.type == 'weatherstation'){
    actionPushGateWeather.data.deviceDataModal  = {
          deviceType : selectedDevice.type,
          actionType : 'edit',
          selectedDevice : selectedDevice
        }
        actionPushGateWeather.route.title= (selectedDevice.type === 'gateway') ? "Gateway":"Weather Station";
        actionPushGateWeather.route.selectedAccount = this.props.selectedAccount;

    this.props._handleNavigate(actionPushGateWeather)
  }
  else {
    actionPushFlowmeter.data.deviceDataModal  = {
          deviceType : selectedDevice.type,
          actionType : 'edit',
          selectedDevice : selectedDevice
        }
        actionPushFlowmeter.route.title= (selectedDevice.type === 'flowmeter') ? "Flowmeter":"Soil Sensor";
        actionPushFlowmeter.route.selectedAccount = this.props.selectedAccount;

    this.props._handleNavigate(actionPushFlowmeter)
  }
}

_getDevicebyMarker = (marker) => {
  for(var eachDevice in  this.props.selectedAccount.devices){
if (this.props.selectedAccount.devices[eachDevice].location.latitude == marker.coordinates.latitude && this.props.selectedAccount.devices[eachDevice].location.longitude == marker.coordinates.longitude){
  return this.props.selectedAccount.devices[eachDevice]
    }
  }
}

_handleBackKey () {
    // console.log("action in _handleDuplicateKey", action);
    // console.log("_handleDuplicateKey navigationState", this.props.navigationState);
    for(var i=0;i<this.props.navState.routes.length;i++){
    //  console.log("_handleDuplicateKey key", this.props.navigationState.routes[i].key);
      if('pushVineyard'==this.props.navState.routes[i].key){
      //  console.log("we are in _handleNavigate if condition");
        this.props.navState.routes.splice(i, 1);
        break;
      }
    }
  }
//
// savePolygon(data){
// console.log("data:",data);
// console.log("poly:",JSON.stringify(data));
//              AsyncStorage.setItem('mapCoordinates', JSON.stringify(data))
// console.log("mapCoordinates", AsyncStorage.getItem('mapCoordinates'));
// }
_renderInitialMap(){

  return(
    <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
    <View style={styles.locationview}>
        <TouchableOpacity onPress={() => {this.refs.Map.userLocation()}}>
            <Image style={styles.location} source={require('../../../icons/icon-current-location-pop.png')} />
        </TouchableOpacity>
    </View>

    <View style={styles.zoomin}>
        <TouchableOpacity onPress={() => {this.refs.Map.zoomIn()}}>
            <Image style={styles.image} source={require('../../../icons/design-zoomin-off.png')} />
        </TouchableOpacity>
    </View>

    <View style={styles.zoomout}>
         <TouchableOpacity onPress={() => {this.refs.Map.zoomOut()}}>
              <Image style={styles.image} source={require('../../../icons/design-zoomout-off.png')} />
         </TouchableOpacity>
    </View>

    <View style={styles.pan}>
         <TouchableOpacity onPress={() => {this.setState({pan:!this.state.pan}) }}>
              <Image style={styles.image} source={this.state.pan == true?on:off} />
         </TouchableOpacity>
   </View>

    <View style={styles.draw}>
         <TouchableOpacity onPress={() => {this.setState({drawMode:!this.state.drawMode, pan:false}) }}>
              <Image style={styles.image} source={this.state.drawMode == true?drawon:drawoff} />
         </TouchableOpacity>
   </View>

   <View style={styles.undo}>
         <TouchableOpacity onPress={()=>{this.refs.Map.undo()}} >
              <Image style={styles.image} source={require('../../../icons/design-clear-off.png')} />
         </TouchableOpacity>
   </View>


            <AreaSelector
              ref = 'Map'
              editMode = {this.state.editMode}
              drawMode = {this.state.drawMode}
              drawType = {'freeLiner'}
              markers = {this.state.markers}
              shapes= {
                {
                  polygons: [{
                    coordinates:this.state.polyPoint,
                    fillColor: 'rgba(9, 201, 103,0.4)'
                  }],
                  circles:[]
              }}
              googleMaps = {false}
              pan = {this.state.pan}
              />
        </View>
      );
}

_renderSavedVineyard(){
// console.log("we are in _renderSavedVineyard");
// console.log("props in _renderSavedVineyard", this.props.selectedAccount.devices);
var markers = []
for(var eachDevice in  this.props.selectedAccount.devices){
  if (this.props.selectedAccount.devices[eachDevice].state == 'active'){
  var coord={
      coordinates:{
        latitude:Number(this.props.selectedAccount.devices[eachDevice].location.latitude),
        longitude:Number(this.props.selectedAccount.devices[eachDevice].location.longitude)
      }
    }
  markers.push(coord)
}
}
//console.log("markers in _renderSavedVineyard",markers);
  return(
    <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
            <AreaSelector
              ref = 'Map'
              editMode = {this.state.editMode}
              drawMode = {this.state.drawMode}
              drawType = {'freeLiner'}
              markers = {markers}
              shapes= {
                {
                  polygons: [{
                    coordinates:this.state.polyPoint,
                    fillColor: 'rgba(9, 201, 103,0.4)',
                    strokeColor: 'rgba(9, 201, 103,0.4)'
                  }],
                  circles:[]
              }}
              googleMaps = {false}
              pan = {this.state.pan}
              onMarkerClick = {this._handleMarkerClick}
              />
        </View>
      );
}

_renderDeviceMap(){
  var markers = []
  for(var eachDevice in  this.props.selectedAccount.devices){
      if (this.props.selectedAccount.devices[eachDevice].state == 'active'){
    var coord={
        coordinates:{
          latitude:Number(this.props.selectedAccount.devices[eachDevice].location.latitude),
          longitude:Number(this.props.selectedAccount.devices[eachDevice].location.longitude)
        }
      }
    markers.push(coord)
  }
}
var polygonData= [];
fColor= 'rgba(9, 201, 103,0.4)';
if(this.props.selectedAccount.ranch.length>1){
  fColor= '';
}
polygonData=[{coordinates:this.state.polyPoint,      fillColor: fColor,      strokeColor: '#ffffff'  }];
for (var i=1; i<this.props.selectedAccount.ranch.length; i++){
  polygonData.push({coordinates:this.props.selectedAccount.ranch[i].measuredEntityBoundaries,
  fillColor: 'rgba(9, 201, 103,0.4)',
  strokeColor: 'rgba(9, 201, 103,0.4)',
  name: this.props.selectedAccount.ranch[i].name
  })
}
polygonData=[...polygonData];
  return(
    <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
    <View style={styles.zoomin}>
        <TouchableOpacity onPress={() => {this.refs.Map.zoomIn()}}>
            <Image style={styles.image} source={require('../../../icons/design-zoomin-off.png')} />
        </TouchableOpacity>
    </View>

    <View style={styles.zoomout}>
         <TouchableOpacity onPress={() => {this.refs.Map.zoomOut()}}>
              <Image style={styles.image} source={require('../../../icons/design-zoomout-off.png')} />
         </TouchableOpacity>
    </View>

    <View style={styles.pan}>
         <TouchableOpacity onPress={() => {this.setState({pan:!this.state.pan}) }}>
              <Image style={styles.image} source={this.state.pan == true?on:off} />
         </TouchableOpacity>
   </View>
            <AreaSelector
              ref = 'Map'
              editMode = {this.state.editMode}
              drawMode = {true}
              drawType = {'dropMarker'}
              markers= {markers} //
              shapes= {
                {
                  polygons: polygonData,
                  circles:[]
              }}
              googleMaps = {false}
              pan = {this.state.pan}
              onMarkerClick = {this._handleMarkerClick}
              />
        </View>
      );
}

_renderBlockMap(){
  var markers = []
  for(var eachDevice in  this.props.selectedAccount.devices){
      if (this.props.selectedAccount.devices[eachDevice].state == 'active'){
    var coord={
        coordinates:{
          latitude:Number(this.props.selectedAccount.devices[eachDevice].location.latitude),
          longitude:Number(this.props.selectedAccount.devices[eachDevice].location.longitude)
        }
      }
    markers.push(coord)
  }
}
var polygonData= [];
polygonData=[{coordinates:this.state.polyPoint,      fillColor: '',      strokeColor: '#ffffff'  }];
for (var i=1; i<this.props.selectedAccount.ranch.length; i++){
  polygonData.push({coordinates:this.props.selectedAccount.ranch[i].measuredEntityBoundaries,
  fillColor: 'rgba(9, 201, 103,0.4)',
  strokeColor: 'rgba(9, 201, 103,0.4)'
  })
}
polygonData=[...polygonData];
    return(
      <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
      <View style={styles.locationview}>
          <TouchableOpacity onPress={() => {this.refs.Map.userLocation()}}>
              <Image style={styles.location} source={require('../../../icons/icon-current-location-pop.png')} />
          </TouchableOpacity>
      </View>

      <View style={styles.zoomin}>
          <TouchableOpacity onPress={() => {this.refs.Map.zoomIn()}}>
              <Image style={styles.image} source={require('../../../icons/design-zoomin-off.png')} />
          </TouchableOpacity>
      </View>

      <View style={styles.zoomout}>
           <TouchableOpacity onPress={() => {this.refs.Map.zoomOut()}}>
                <Image style={styles.image} source={require('../../../icons/design-zoomout-off.png')} />
           </TouchableOpacity>
      </View>

     <View style={styles.pan}>
          <TouchableOpacity onPress={() => {this.setState({pan:!this.state.pan,drawMode:!this.state.drawMode}) }}>
               <Image style={styles.image} source={this.state.pan == true?on:off} />
          </TouchableOpacity>
    </View>

     <View style={styles.draw}>
          <TouchableOpacity onPress={() => {this.setState({drawMode:!this.state.drawMode, pan:false}) }}>
               <Image style={styles.image} source={this.state.drawMode == true?drawon:drawoff} />
          </TouchableOpacity>
    </View>

     <View style={styles.undo}>
           <TouchableOpacity onPress={()=>{this.refs.Map.undo()}} >
                <Image style={styles.image} source={require('../../../icons/design-clear-off.png')} />
           </TouchableOpacity>
     </View>

              <AreaSelector
                ref = 'Map'
                editMode = {this.state.editMode}
                drawMode = {this.state.drawMode}
                drawType = {'freeLiner'}
                markers = {markers}
                shapes= {
                  {
                    polygons: polygonData,
                    circles:[]
                }}
                googleMaps = {false}
                pan = {this.state.pan}
                drawWithInShape= {this.state.polyPoint}
                />
          </View>
        );
  }

  _renderSavedBlock(){
    console.log("props in savedBlock", this.props);
  var markers = []
  for(var eachDevice in  this.props.selectedAccount.devices){
    if (this.props.selectedAccount.devices[eachDevice].state == 'active'){
    var coord={
        coordinates:{
          latitude:Number(this.props.selectedAccount.devices[eachDevice].location.latitude),
          longitude:Number(this.props.selectedAccount.devices[eachDevice].location.longitude)
        }
      }
    markers.push(coord)
  }
  }
var polygonData= [];
polygonData=[{coordinates:this.state.polyPoint,      fillColor: '',      strokeColor: '#ffffff'  }];
for (var i=1; i<this.props.selectedAccount.ranch.length; i++){
  polygonData.push({coordinates:this.props.selectedAccount.ranch[i].measuredEntityBoundaries,
  fillColor: 'rgba(9, 201, 103,0.4)',
  strokeColor: 'rgba(9, 201, 103,0.4)'
  })
}
polygonData=[...polygonData];
    return(
      <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
              <AreaSelector
                ref = 'Map'
                editMode = {this.state.editMode}
                drawMode = {this.state.drawMode}
                drawType = {'freeLiner'}
                markers = {markers}
                shapes= {
                  {
                    polygons: polygonData,
                    circles:[]
                }}
                googleMaps = {false}
                pan = {this.state.pan}
                onMarkerClick = {this._handleMarkerClick}
                />
          </View>
        );
  }

  _renderBlockDevice(){
    var markers = []
    for(var eachDevice in  this.props.selectedAccount.devices){
      if (this.props.selectedAccount.devices[eachDevice].state == 'active'){
      var coord={
          coordinates:{
            latitude:Number(this.props.selectedAccount.devices[eachDevice].location.latitude),
            longitude:Number(this.props.selectedAccount.devices[eachDevice].location.longitude)
          }
        }
      markers.push(coord)
    }
    }

    var polygonData= [];
    polygonData=[{coordinates:this.state.polyPoint,      fillColor: '',      strokeColor: '#ffffff'  }];
    for (var i=1; i<this.props.selectedAccount.ranch.length; i++){
      polygonData.push({coordinates:this.props.selectedAccount.ranch[i].measuredEntityBoundaries,
      fillColor: 'rgba(9, 201, 103,0.4)',
      strokeColor: 'rgba(9, 201, 103,0.4)',
      name: this.props.selectedAccount.ranch[i].name
      })
    }
    polygonData=[...polygonData];

      return(
        <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
        <View style={styles.zoomin}>
            <TouchableOpacity onPress={() => {this.refs.Map.zoomIn()}}>
                <Image style={styles.image} source={require('../../../icons/design-zoomin-off.png')} />
            </TouchableOpacity>
        </View>

        <View style={styles.zoomout}>
             <TouchableOpacity onPress={() => {this.refs.Map.zoomOut()}}>
                  <Image style={styles.image} source={require('../../../icons/design-zoomout-off.png')} />
             </TouchableOpacity>
        </View>

        <View style={styles.pan}>
             <TouchableOpacity onPress={() => {this.setState({pan:!this.state.pan}) }}>
                  <Image style={styles.image} source={this.state.pan == true?on:off} />
             </TouchableOpacity>
       </View>
                <AreaSelector
                  ref = 'Map'
                  editMode = {this.state.editMode}
                  drawMode = {true}
                  drawType = {'dropMarker'}
                  markers = {markers}
                  shapes= {
                    {
                      polygons: polygonData,
                      circles:[]
                  }}
                  googleMaps = {false}
                  pan = {this.state.pan}
                  onMarkerClick = {this._handleMarkerClick}
                  />
            </View>
          );
  }

  render() {
     //console.log("this in MapHome@@@@@@@@@@@@@@ by aditya ::", this.props);
    // console.log("props in MapHome", this.props.getPolygonPoints.polygonPayload);
    if (this.props.mode.renderMode== 'map'){
     if(this.props.selectedAccount.ranch.length > 0){
       var vineData=this.props.selectedAccount.ranch;
       this.state.polyPoint= vineData[0].measuredEntityBoundaries;
     }
  }

else if (this.props.mode.renderMode== 'savedVineyard' || this.props.mode.renderMode== 'deviceMap' || this.props.mode.renderMode== 'drawBlock' || this.props.mode.renderMode== 'savedBlock' || this.props.mode.renderMode== 'blockDevice') {
 var vineData=this.props.selectedAccount.ranch
 if(vineData.length>0){
  this.state.polyPoint= vineData[0].measuredEntityBoundaries;
}
else{
  this.state.polyPoint= vineData.measuredEntityBoundaries;
}
}

  if (this.props.mode.renderMode== 'map') {
    return (
      <View>
      {this._renderInitialMap()}
              </View>
    );
}
else if (this.props.mode.renderMode== 'savedVineyard') {
  return (
    <View>
    {this._renderSavedVineyard()}
    {this._handleBackKey()}
            </View>
  );
}
else if (this.props.mode.renderMode== 'deviceMap') {
  //console.log("we are in deviceMap render method");
  return (
    <View>
    {this._renderDeviceMap()}
            </View>
  );
}
else if (this.props.mode.renderMode== 'drawBlock') {
  //console.log("we are in deviceMap render method");
  return (
    <View>
    {this._renderBlockMap()}
            </View>
  );
}
else if (this.props.mode.renderMode== 'savedBlock') {
  //console.log("we are in deviceMap render method");
  return (
    <View>
    {this._renderSavedBlock()}
            </View>
  );
}
else if (this.props.mode.renderMode== 'blockDevice') {
  //console.log("we are in deviceMap render method");
  return (
    <View>
    {this._renderBlockDevice()}
            </View>
  );
}
}
}
module.exports = MapHome
