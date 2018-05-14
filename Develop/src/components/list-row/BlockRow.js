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
import Swipeout from 'react-native-swipeout'
var {height,width} = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';

var pHolder = require('../../../icons/app-logo.png');
/* The place holder image will be replaced by the actual image, if the actual image is  provided.
if not, one of the repective stock images are placed(Flowmeter vector image for a flowmeter etc)  */
import PopUp from '../../../src/components/common/PopUp'
/* PopUp Js file has more on how to this component*/
var rowHeight = height/8
var ImageDim = height/15
var  sch = height/12 //swipeContentheigth

class BlockRow extends Component {
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
            message = {this.props.block.name}
          />
        <SwipeOutContent
            block = {this.props.block}
            onSwipe = {()=>{this.setState({showPopUp:true})}}
            onPress = {()=>{this.props.onPress()}} //callback to be called when Row is Clicked
            />
      </View>
    )
  }
}


class SwipeInContent extends Component {
  render(){
    return (
       <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333333'}}>
          <TouchableHighlight
              style={{height:sch,width:sch,borderRadius:sch/2,alignItems:'center',justifyContent:'center',backgroundColor:'#2baf5b'}}
              onPress = {()=>{this.props.onSwipe()}}>
            <Icon name={'delete'} size={height/20} color= {"#ffffff"}/>
          </TouchableHighlight>
        </View>
    )
  }
}

const SwipeOutContent = (props)=> {
  //console.log("props in block row::props by akhil",props);
  var r = height/9
  var swipeContent = [
  {
    component: <SwipeInContent onSwipe = {props.onSwipe}/>
  }
]
    return(
      <View style={{height:r,width:width}}>
        <Swipeout right={swipeContent} autoClose={true} sensitivity={1} style={{flex:1,alignItems:'center',justifyContent:'center'}} close={true}>
          <View>
            <TouchableHighlight style={styles.mainCont} onPress = {props.onPress} underlayColor ='transparent'>
                <View style={styles.innerCont}>
                    <View style={styles.leftCont}>
                        <Image source={pHolder} style={{height:ImageDim,width:ImageDim}}/>
                    </View>
                    <View style={styles.midCont}>
                         <View style={styles.midTopCont}>
                              <Text style={styles.blockName}>{props.block.name}</Text>
                         </View>
                         <View style={styles.blockCont}>

                          {
                            <View style={styles.attrCont}>
                                <Text style={styles.attr}>{props.block.measuringDevices!==undefined ?props.block.measuringDevices.length:'N/A'}</Text>
                                <Text style={styles.val}>DEVICE</Text>
                            </View>
                          }
                          {
                            <View style={styles.attrCont}>
                                <Text style={styles.attr}>{props.block.measuredEntityProperties!== undefined ?(props.block.measuredEntityProperties[3]!==undefined?props.block.measuredEntityProperties[3].value:'N/A'):'N/A'}</Text>
                                <Text style={styles.val}>ROW</Text>
                            </View>
                            // props.block.measuringDevices.map((eachAttr,i)=>{
                            //   return (
                            //     <View style={styles.attrCont} key={i}>
                            //         <Text style={styles.attr}>{eachAttr.value}</Text>
                            //         <Text style={styles.val}>{eachAttr.name}</Text>
                            //     </View>
                            //   )
                            // })
                          }
                         </View>
                    </View>
                    <View style={styles.rightCont}>
                         <Icon name={'keyboard-arrow-right'} size={20} color= {"rgb(227, 227, 227)"}/>
                    </View>
                </View>
            </TouchableHighlight>
          </View>
        </Swipeout>
      <View style={styles.seperator}/>
    </View>
    );
}

const fontFamily = Platform.OS === 'ios'? 'AvenirNext-bold' : 'Roboto'
//https://web.archive.org/web/20140415053621/http://joelcrawfordsmith.com/new/font/avenir

const styles = EStyleSheet.create({
    mainCont:{
      height:rowHeight,
      backgroundColor:'white'
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
      flex:1,
      //backgroundColor:'coral'
    },
    blockCont:{
      flex:2,
      flexDirection:'row',
      //backgroundColor:'tan'
    },
    blockName:{
      fontSize: rowHeight/4.5,
      fontWeight:'bold',
      color: '#2F2A2B',
      fontFamily: fontFamily
    },
    attrCont:{
      width:width/6,
      justifyContent:'center',
      //backgroundColor:'red',
      '@media android':{
        marginTop:'-3%'
      }
    },
    valCont:{
      height:rowHeight/2,
      flex:1,
      justifyContent:'center'
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
    },
    attr:{
      fontFamily:'AvenirNext-bold',
      fontSize: rowHeight/5.5,
      color:'#22B05C'
    },
    val:{
      fontFamily:'AvenirNext-bold',
      fontSize:rowHeight/10,
      fontWeight:'400',
      color:'#2F2A2B'
    }
})

export default BlockRow
