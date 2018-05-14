import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/blocks/annualvariableStyles';
var DismissKeyboard = require('dismissKeyboard');
import DatePicker from './index.js';
import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

class AnnualVariables extends Component {
    constructor(props) {
    super(props);
    this.state = {
      germinationDate: '',
      dripEmitterFlowRateDate: '',
      canopyHeight:'',
      canopyWidth:'',
      canopyPorocity:'',
      coverCrop:'',
      dripEmitterSpacing: '',
      showLoading: ''
    };
  }

  componentWillMount(){
    if(this.props.actionType === 'edit'){
      this.setState({
        germinationDate : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].germinationDate:"",
        dripEmitterFlowRateDate :  this.props.blockData.annual!==undefined?this.props.blockData.annual[0].weedingOrSeneSceneDate:"",
        canopyHeight : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].canopyHeight:"",
        canopyWidth : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].canopyWidth:"",
        canopyPorocity : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].canopyPorosity:"",
        coverCrop : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].coverCrop:"",
        dripEmitterSpacing : this.props.blockData.annual!==undefined?this.props.blockData.annual[0].coverCropWidthStrip:""
      })
    }
  }

  saveBlockDetailsInfo(){
    var dataArray = [];
    var data = {
      germinationDate: this.state.germinationDate,
      dripEmitterFlowRateDate: this.state.dripEmitterFlowRateDate,
      canopyHeight:this.state.canopyHeight,
      canopyWidth:this.state.canopyWidth,
      canopyPorocity:this.state.canopyPorocity,
      coverCrop:this.state.coverCrop,
      dripEmitterSpacing: this.state.dripEmitterSpacing,
    }
    //console.log('Saving ...Annual Variables::: ',data)
    dataArray.push({germinationDate:data.germinationDate,canopyHeight:data.canopyHeight,canopyWidth:data.canopyWidth,canopyPorosity:data.canopyPorocity,coverCrop:data.coverCrop,coverCropWidthStrip:data.dripEmitterSpacing,weedingOrSeneSceneDate:data.dripEmitterFlowRateDate})
    //console.log("dataarray in annual varaibles",dataArray);
    if(this.props.actionType == 'edit')
    {
      this.setState({showLoading : 'start'});
      this.props.updateAnnualVariablesInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }
    else{
      this.setState({showLoading : 'start'});
      this.props.saveAnnualVariablesInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }

  }

  _renderLoading(){
    //console.log("render loading this.props by akhil::",this.props);
    if((this.props.blockAnnualObject!=undefined) && (this.props.blockAnnualObject.isBlockAnnual)){
          this.setState({showLoading : 'stop'});

          actionPushBlocksProperty.route.blockAnnualSaved = true ;
          actionPushBlocksProperty.data = this.props.blockAnnualObject.selectedAccount;
            this.props._handleNavigate(actionPushBlocksProperty);
          }

        else if((this.props.updatedBlockAnnualObject!=undefined) && (this.props.updatedBlockAnnualObject.isUpdateBlockAnnual)){
                this.setState({showLoading : 'stop'});
                actionPushBlocksProperty.data = this.props.updatedBlockAnnualObject.selectedAccount;
                  this.props._handleNavigate(actionPushBlocksProperty);
                }

      //  return <View/>;
      return(
        <View style={spinnerStyles.spinnerview} ref="spinnerView">
          <Image
            style={{height:50,width:50}}
            source={require('../../../icons/loading.gif')}
            />
        </View>
      );
  }

  render() {
  //  console.log('Rendering ....Annual Variables::: ',this.props.blockData)
    if(this.state.showLoading === 'start'){
      return this._renderLoading();
    }

    return (
    <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
      <View style={styles.container}>

            <View style={styles.titlecont}>
              <Text style={styles.titlecontstyles}>
                Annual Variables
              </Text>
            </View>

            <View style={styles.maincont}>
              <Text style={styles.innerstyles}>
                GERMINATION DATE
              </Text>
              <View>
            <DatePicker
              style={styles.calender}
              date={this.state.germinationDate}
              format="MM/DD/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(germinationDate) => {this.setState({germinationDate:germinationDate});}}
            />
        </View>

            </View>

            <View style={styles.line}/>

            <View>
                 <View style={styles.rowCont}>
                     <View>
                        <Text style={styles.topCont}> CANOPY HEIGHT </Text>
                          <TextInput
                            style={styles.subcont}
                            onChangeText={(canopyHeight) => this.setState({canopyHeight})}
                            value = {this.state.canopyHeight}
                            clearButtonMode = { 'while-editing'}
                            />
                           <View style={styles.seperator}/>
                     </View>
                 </View>
              </View>

            <View>
                 <View style={styles.rowCont}>
                     <View>
                        <Text style={styles.topCont}> CANOPY WIDTH </Text>
                          <TextInput
                            style={styles.subcont}
                            onChangeText={(canopyWidth) => this.setState({canopyWidth})}
                            value = {this.state.canopyWidth}
                            clearButtonMode = { 'while-editing'}
                            />
                           <View style={styles.seperator}/>
                     </View>
                 </View>
              </View>

            <View>
                 <View style={styles.rowCont}>
                     <View>
                        <Text style={styles.topCont}> CANOPY POROSITY </Text>
                          <TextInput
                            style={styles.subcont}
                            onChangeText={(canopyPorocity) => this.setState({canopyPorocity})}
                            value = {this.state.canopyPorocity}
                            clearButtonMode = { 'while-editing'}
                            />
                           <View style={styles.seperator}/>
                     </View>
                 </View>
              </View>

              <View>
                 <View style={styles.rowCont}>
                     <View>
                        <Text style={styles.topCont}> COVER CROP </Text>
                          <TextInput
                            style={styles.subcont}
                            onChangeText={(coverCrop) => this.setState({coverCrop})}
                            value = {this.state.coverCrop}
                            clearButtonMode = { 'while-editing'}
                            />
                          <View style={styles.seperator}/>
                     </View>

                       <View style={styles.rowimage}>
                          <Image style={styles.arrow} source = {require('../../../icons/arrow-down-drop.png')}/>
                       </View>
                 </View>
              </View>


            <View>
                 <View style={styles.rowCont}>
                     <View>
                        <Text style={styles.topCont}> DRIP EMITTERS SPACING (FEET) </Text>
                        <TextInput
                          style={styles.subcont}
                          onChangeText={(dripEmitterSpacing) => this.setState({dripEmitterSpacing})}
                          value = {this.state.dripEmitterSpacing}
                          clearButtonMode = { 'while-editing'}
                          />
                           <View style={styles.seperator}/>
                     </View>
                 </View>
              </View>


            <View style={styles.maincont}>
              <Text style={styles.innerstyles}>
                DRIP EMITTER FLOW RATE
              </Text>
              <DatePicker
                style={styles.calender}
                date={this.state.dripEmitterFlowRateDate}
                format="MM/DD/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(dripEmitterFlowRateDate) => {this.setState({dripEmitterFlowRateDate:dripEmitterFlowRateDate});}}
              />
            </View>

            <View style={styles.line}/>

      </View>
    </TouchableWithoutFeedback>
    );
  }
}
var spinnerStyles = EStyleSheet.create({
  spinnerview: {
    flex:1,
    width:width,
    height:height,
    zIndex:99,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
  }

})

export default AnnualVariables;
