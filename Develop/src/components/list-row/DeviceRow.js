/*
    A single row is combination of multiple components:
    Top Level View Tree will look like

        <DeviceRow>
          <PopUp>
          </PopUp>
          <SwipeOutContent right =({SwipeInContent})> <---- SwipeInContent Contains HiddenView of Delete button, Right Indicate to swipe from right
              <DeviceImage> <DeviceName>
              <Chunks> <Chunks> <Chunks> <Chunks> <---- Each Chunk is a Combination of attritube and its value(SerialNumber: 12345678)
          </SwipeOutContent>
        </DeviceRow>

        Props to DeviceRow Component:


*/

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet,
  Platform
} from 'react-native';
import React,{Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swipeout from 'react-native-swipeout'
var {height,width} = Dimensions.get('window')

var pHolder = require('../../../icons/app-logo.png');
/* The place holder image will be replaced by the actual image, if the actual image is  provided.
if not, one of the repective stock images are placed(Flowmeter vector image for a flowmeter etc)  */
import PopUp from '../../../src/components/common/PopUp'
/* PopUp Js file has more on how to this component*/
var rowHeight = height/8
var ImageDim = height/15
var  sch = height/12 //swipeContentheigth

class DeviceRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      showPopUp : false
    }
  }
  render(){
    return (
      <View>
        <PopUp
            show={this.state.showPopUp}
            rLabel = 'Delete'
            lLabel = 'Cancel'
            rAction = {()=>{this.props.onSwipe(),this.setState({showPopUp:false})}} //callback to be called right button on the pop up is clicked, and disable the PopUp upon Choosing
            lAction = {()=>{this.setState({showPopUp:false})}}//left button Callback, here it just cancels the PopUp
            message = {this.props.device.name}
          />
        <SwipeOutContent
            device = {this.props.device}
            onSwipe = {()=>{this.setState({showPopUp:true})}}
            onPress = {()=>{this.props.onPress()}} //callback to be called when Row is Clicked
            />
      </View>
    )
  }
}

const Chunk = (props) => {
  //console.log('Props', props);
  var blockWidth = width/6
  // Each attribute and it's value has different number of characters in a string, the UI suppose to be intact even if some of the
  //attributes are missing.for Example: 'SERIAL NUMBER' needs more width than 'ROW'. This corner Case is taken care by the switch below
  switch (props.attribute) {
    case 'SERIAL NUMBER':
        blockWidth = width/4.5
      break
    case 'GATEWAY':
        blockWidth = width/5
      break
    case 'BLOCK':
    case 'ROW':
        blockWidth = width/7
      break
    default:
  }

  return (
    props.value ?
    <View style={{width:blockWidth}}>
        <View style={styles.attrCont}>
            <Text style={styles.attrName}>{props.attribute}</Text>
        </View>
        <View style={styles.valCont}>
            <Text style={styles.attrVal}>{props.value}</Text>
        </View>
    </View> :
    null
  )
}

class SwipeInContent extends Component {
  render(){
    return (
       <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333333'}}>
          <TouchableHighlight
              style={{height:sch,width:sch,backgroundColor:'#12b158',borderRadius:sch/2,alignItems:'center',justifyContent:'center'}}
              onPress = {()=>{this.props.onSwipe()}}>
            <Icon name={'delete'} size={height/20} color= {"#ffffff"}/>
          </TouchableHighlight>
        </View>
    )
  }
}

const SwipeOutContent = (props)=> {
  var r = height/9
  var swipeContent = [
  {
    component: <SwipeInContent onSwipe = {props.onSwipe}/>
  }
]
//console.log(' DeviceRow Props', props);
    return(
      <View>
        <Swipeout right={swipeContent} autoClose={true} sensitivity={1} style={{flex:1,alignItems:'center',justifyContent:'center'}} close={true}>
            <TouchableHighlight style={styles.mainCont} onPress = {props.onPress} underlayColor ='transparent'>
                <View style={styles.innerCont}>
                    <View style={styles.leftCont}>
                        <Image source={pHolder} style={{height:ImageDim,width:ImageDim}}/>
                    </View>
                    <View style={styles.midCont}>
                         <View style={styles.midTopCont}>
                              <Text style={styles.deviceName}>{props.device.name}</Text>
                         </View>
                         <View style={styles.blockCont}>
                            <Chunk attribute = 'SERIAL NUMBER' value = {props.device.serialNumber}/>
                            {
                              props.device.attributes != null ?
                              props.device.attributes.map((eachAttribute,i) => {
                                return <Chunk key = {i} attribute = {eachAttribute.name.toUpperCase()} value = {eachAttribute.value}/>
                              }) : null
                            }
                         </View>
                    </View>
                    <View style={styles.rightCont}>
                         <Icon name={'keyboard-arrow-right'} size={20} color= {"rgb(227, 227, 227)"}/>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeout>
      <View style={styles.seperator}/>
    </View>
    );
}

const fontFamily = Platform.OS === 'ios'? 'AvenirNext-bold' : 'Roboto'
//https://web.archive.org/web/20140415053621/http://joelcrawfordsmith.com/new/font/avenir

const styles = EStyleSheet.create({
    mainCont:{
      flex:1,
      height:rowHeight,
      backgroundColor:'#ffffff'
    },
    innerCont:{
      width:width,
      height:rowHeight,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    leftCont:{
      height:rowHeight - 20,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    midCont:{
      height:rowHeight - 20,
      flex:4,
      marginLeft:10
    }, //
    rightCont:{
      height:rowHeight - 20,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    midTopCont:{
      height:rowHeight/3,
      flex:1
    },
    blockCont:{
      flex:1,
      flexDirection:'row'
    },
    deviceName:{
      fontSize: rowHeight/5.5,
      fontWeight:'500',
      fontFamily: fontFamily
    },
    attrCont:{
      marginTop: -15,
      height:rowHeight/4,
      flex:1,
      justifyContent:'center',
      '@media (max-width:1536px)':{
        marginTop:-30
      }
    },
    valCont:{
      height:rowHeight/4,
    //  flex:1,
   //    justifyContent:'center'
    },
    attrName:{
      fontSize: rowHeight/10,
      fontWeight:'500',
      color: '#999999',
      fontFamily:fontFamily
    },
    attrVal:{
      fontSize: rowHeight/8,
      fontWeight:'bold',
      color: '#443f41',
      fontFamily:fontFamily
    },
    seperator:{
      height:2,
      backgroundColor:'#edf0f0'
    }
})

export default DeviceRow
