import React, { Component } from 'react';
import { Text, View, Dimensions,TouchableHighlight,StyleSheet, Image, AsyncStorage} from 'react-native';

const { width, height } = Dimensions.get('window');
//var  AreaSelector  = require('area-selector');
import {actionVineyardRoute} from '../../constants/actionRoutes';
import AreaSelector from 'area-selector';
const Button = ({title,onPress}) => (
        <TouchableHighlight onPress={onPress} style={{height:50,width:50,flex:1,alignItems:'center',justifyContent:'center'}} underlayColor= 'transparent'>
           <View style={{height:50,width:width/5,alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontFamily:'AvenirNext-bold',color:'#ffffff'}}>{title}</Text>
           </View>
        </TouchableHighlight>
      )

class SavedMapHome extends Component {
    constructor(props) {
    super(props);
    this.state = {
      drawMode : false,
      editMode : false,
      pan : true

  };
}
componentDidMount()
{
this.refs.Map.play();
this.setState({drawMode:!this.state.drawMode,pan:false});
this.refs.Map.play();
//this.setState({drawType:'dropMarker'})
}
saveNewMapViewDetail(){
  //console.log('Calling saveNewMapViewDetail... ')
  //var polydata=JSON.parse(this.props.getPolygonPoints.polygonPayload);
 //this.state.polyPoint= polydata.measuredEntity.measuredEntityBoundaries;
  actionVineyardRoute.data= this.refs.Map.data().data.coordinates;
  this.props._handleNavigate(actionVineyardRoute);
}
//
// savePolygon(data){
// console.log("data:",data);
// console.log("poly:",JSON.stringify(data));
//              AsyncStorage.setItem('mapCoordinates', JSON.stringify(data))
// console.log("mapCoordinates", AsyncStorage.getItem('mapCoordinates'));
// }

  render() {
    //console.log("props in savedMapmap....", this.props.getPolygonPoints.polygonPayload);
     //this.state.polyPoint= JSON.parse(this.props.getPolygonPoints.polygonPayload);
    if(this.props.getPolygonPoints.polygonPayload!= null && this.props.getPolygonPoints.polygonPayload!= undefined){
        var polydata=JSON.parse(this.props.getPolygonPoints.polygonPayload);
          this.state.polyPoint= polydata.measuredEntity.measuredEntityBoundaries;
  }
    //console.log("props in measuredEntityBoundaries....", polydata);

    //console.log("poly in map", this.state.polyPoint);
    //console.log("action in MapHome", actionVineyardRoute);
    return (
      <View style={{position:'absolute',height:height,width:width,backgroundColor:'yellow'}}>
          <View style={{position:'absolute',left:10,bottom:10,backgroundColor:'rgb(9, 201, 103)',height:50,width:50,zIndex:2}}>
              <Button  onPress={()=>{this.refs.Map.play(),this.setState({drawMode:!this.state.drawMode,pan:false})}} title= {'Device'}/>
          </View>
          <AreaSelector
            ref = 'Map'
            editMode = {this.state.editMode}
            drawMode = {this.state.drawMode}
            drawType = {this.state.drawType}
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
    )
  }
}
module.exports = SavedMapHome
