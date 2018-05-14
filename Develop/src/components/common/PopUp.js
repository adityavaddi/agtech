/*
                                      ##############
                        DO NOT TWEAK ANY OF THE COMPONENT PROPERTIES,
  AS IT TAKES GREAT TIME TO CUSTOM CALCULATE ALL LAYOUT DIMENSIONS TO FIT ON MULTIPLE DEVICES - VKrm
                                      ##############
  Usage:

  if a Screen requires a Pop up to show, add this component on the top the View Tree and Control the Compoennt using
  the Prop.\

      <PopUp
            show = { true }     // Trigger pop up show using this Prop
            rLabel = 'Delete'   // Right Button Text
            lLabel = 'Cancel'   // Left Button Text
            rAction = {()=>{}}  // callback to be called right button on the pop up is clicked
            lAction = {()=>{trigger to disable the pop up}} //left button Callback, here it just cancels the PopUp
            message = {'some Message'}  // A confirmation Message that show up in the dialog
          />
*/

import React, { Component } from 'react'
import { StyleSheet, Text,View, Dimensions, TouchableHighlight, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const {height,width} = Dimensions.get('window')

class PopUp extends Component {
  constructor(props){
    super(props)
    this.state = { showPopUp : false }
  }

  componentWillMount(){
    this.setState({
      showPopUp : this.props.show
    })
  }

  componentWillReceiveProps(newProps){
    this.setState({
      showPopUp : newProps.show
    })
  }

  render() {
      return (
        <Modal
          animationType = {"slide"}
          transparent = {false}
          visible = {this.state.showPopUp}
          transparent = {true}
          >
              <View style={sty.mainCont}>
                  <View style={sty.subCont}>
                      <View style={sty.topCont}/>

                      <View style={sty.iconCont}>
                          <View style={sty.iconOutCont}>
                             <View style={sty.iconInCont}>
                                  <Icon name={'delete'} size={height/15} color= {"#ffffff"}/>
                              </View>
                          </View>
                      </View>

                      <View style={sty.msgCont}>
                          <Text style={sty.msgText}>
                              Do you really want to delete
                            <Text style={sty.msgHighLightText}> {this.props.message}?</Text>
                          </Text>
                      </View>

                      <View style={sty.btnsMainCont}>
                          <TouchableHighlight style={sty.btnCont} onPress = {this.props.lAction} underlayColor = '#2baf5b'>
                            <Text style={sty.label}> {this.props.lLabel} </Text>
                          </TouchableHighlight>
                          <View style={sty.seperator}/>
                          <TouchableHighlight style={sty.btnCont} onPress ={this.props.rAction} underlayColor = '#2baf5b'>
                              <Text style={sty.label}> {this.props.rLabel} </Text>
                          </TouchableHighlight>
                      </View>

                  </View>
              </View>
        </Modal>
      )
  }
}
/* Retain the style Properties of Common Components within the Same JS files, so as to make generic changes at onePlace */
const sty = StyleSheet.create({
  mainCont:{
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    alignItems:'center',
    justifyContent:'center'
  },
  subCont:{
    height:height/3,
    width:width/1.5
  },
  topCont:{
    height:height/90,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:width/1.5,
    zIndex:2
  },
  iconCont:{
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:width/1.5,
    zIndex:2
  },
  msgCont:{
    marginTop:-height/18,
    height:height/5.5,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    width:width/1.5,
    zIndex:1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  btnsMainCont:{
    height:height/15,
    flexDirection:'row',
    backgroundColor:'#2baf5b',
    alignItems:'center',
    justifyContent:'center',
    width:width/1.5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  btnCont:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  label:{
    fontSize:height/35,
    color:'#ffffff',
    fontWeight:'bold',
    fontFamily:'AvenirNext-Bold'
  },
  msgText:{
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
    fontSize:height/40,
    color:'#666666',
    fontWeight:'500',
    fontFamily:'AvenirNext-Bold'
  },
  msgHighLightText:{
    fontWeight:'600',
    color:'#333333',
    fontSize:height/40
  },
  seperator:{
    flex:0.01,
    height:height/17,
    backgroundColor:'#ffffff'
  },
  iconOutCont:{
    height:height/9,
    width:height/9,
    backgroundColor:'#ffffff',
    borderRadius:height/18,
    alignItems:'center',
    justifyContent:'center'
  },
  iconInCont:{
    height:(height/9)-10,
    width:(height/9)-10,
    backgroundColor:'#2baf5b',
    borderRadius:(height/9)-5,
    alignItems:'center',
    justifyContent:'center'}
})
/* Retain the style Properties of Common Components within the Same JS files, so as to make generic changes at onePlace */

PopUp.propTypes = {
    show : React.PropTypes.bool,
    rLabel : React.PropTypes.string.isRequired,
    lLabel : React.PropTypes.string.isRequired,
    rAction:React.PropTypes.func.isRequired,
    lAction:React.PropTypes.func.isRequired
 },

 PopUp.defaultProps = {
   show :false,
   rLabel : 'Delete',
   lLabel : 'Cancel',
   rAction : {},
   rAction : {}
}

export default PopUp;
