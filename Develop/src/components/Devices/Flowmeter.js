import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
   Dimensions,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/flowmeterStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as actionRoutes from '../../constants/actionRoutes';
import Geolocation from '../utils/Gps';
import {actionShowMap,actionPushDeviceList} from '../../constants/actionRoutes';
var DismissKeyboard = require('dismissKeyboard');

 class Flowmeter extends Component {
  constructor(props){
    super(props);
    this.state = {
        name : '',
        sNum : '',
        latitude : '',
        longitude : '',
        rowNum: '',
        showLoading: '',
        isDataSaved : false
    };
}

_handleBackKey () {
    // console.log("action in _handleDuplicateKey", action);
    // console.log("_handleDuplicateKey navigationState", this.props.navigationState);
    for(var i=0;i<this.props.blockDeviceState.routes.length;i++){
    //  console.log("_handleDuplicateKey key", this.props.navigationState.routes[i].key);
      if('pushFlowmeter'==this.props.blockDeviceState.routes[i].key){
      //  console.log("we are in _handleNavigate if condition");
        this.props.blockDeviceState.routes.splice(i, 1);
        break;
      }
    }
  }

_renderLoading(){
  if(this.props.isSuccessful ){

      if(this.props.isSavedSuccessful){

        this.setState({showLoading : 'stop'});
        if(this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType === 'new'){
          this._handleBackKey();
          actionShowMap.route.renderMode ='savedBlock';
          this.props.selectedAccount= this.props.blockDeviceState.selectedAccount;
          this.props._handleNavigate(actionShowMap);
        }
      }
    //console.log("_renderLoading ::: actionType :: ",this.props);
  else if(this.props.isUpdateSuccessful ) {

      this.setState({showLoading : 'stop'});
    if(this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
      this._handleBackKey();
      actionPushDeviceList.data  = this.props.blockDeviceState.selectedAccount.devices;
       this.props._handleNavigate(actionPushDeviceList);
    }
    }

    //  return <View/>;
  }
    return(
      <View style={styles.spinnerview} ref="spinnerView">
        <Image
          style={{height:50,width:50}}
          source={require('../../../icons/loading.gif')}
          />
      </View>
    );
}

saveBlockDevice(){
    //console.log('From Navigation to saveGateWay::: ',this.props);
    this.setState({isDataSaved : false});

    var dataModal =  {
            id: this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.id?this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.id:"",
            type: this.props.blockDeviceState.deviceInfo.deviceDataModal.deviceType,
            name: this.state.name,
            serialNumber: this.state.sNum,
            ancestorPath: null,
            ancestor: null,
            rowNum: this.state.rowNum?this.state.rowNum:'N/A',
            blockName: this.props.blockDeviceState.deviceInfo.blockName,
            edited: this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType === 'edit' ? "updated": "added" ,
            location: {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                elevation: ""
            }
      }
      var previousSelectedAccount= this.props.blockDeviceState.selectedAccount;

      if(this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
        this.setState({showLoading : 'start'});
        this.props.updateFlowMeter(dataModal,previousSelectedAccount);
      }else{
        this.setState({showLoading : 'start'});

        this.props.saveBlockDeviceDetail(dataModal,previousSelectedAccount);
      }
  }

  componentWillMount(){
    //console.log('Will Mount: deviceInfo:: ',this.props.blockDeviceState.deviceInfo)
      if(this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
        this.setState({
          name : this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.name,
          sNum :  this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.serialNumber.toString(),
          latitude : this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.location.latitude.toString(),
          longitude : this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.location.longitude.toString(),
          blockName : this.props.blockDeviceState.deviceInfo.blockName,
          rowNum : this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.rowNum?this.props.blockDeviceState.deviceInfo.deviceDataModal.selectedDevice.rowNum:'N/A'
        })
      }
      else{
        //to check weather deviceinfo count to render the lat long in ui
        this.setState({
          //
           latitude : this.props.blockDeviceState.deviceInfo.newDeviceCoordinates.coordinates.latitude.toString(),
           longitude : this.props.blockDeviceState.deviceInfo.newDeviceCoordinates.coordinates.longitude.toString(),
        })
      }
    }


    render() {
      if(this.state.showLoading === 'start'){
        return this._renderLoading();
      }
      return (
    <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
        <View style={styles.container}>
     <View>

       <View style={styles.designimage}>
           <Image style={{height:80, width:80}} source = {require('../../../icons/avtr-flowmeter.png')}/>
             <View style={styles.photoicon}>
               <Image style={styles.photosize} source = {require('../../../icons/icon-camera.png')}/>
             </View>
       </View>

             <View style={styles.nameCont}>
                   <Text style={styles.topCont}> NAME </Text>
                   <View >
                     <TextInput
                         style={styles.userInput}
                         onChangeText={(name) => this.setState({name})}
                         value = {this.state.name}
                         autoCapitalize='none'
                         underlineColorAndroid='transparent'
                         autoCorrect={false}
                       />
                  </View>

                      <View style={styles.seperator}/>
             </View>
  <View style = {styles.sNumber}>
                        <View style = {styles.subSNumber}>
                            <View style = {styles.labelCont}>
                                <Text style = {styles.label}>SERIAL NUMBER</Text>
                            </View>
                            <TextInput
                              editable = {this.props.blockDeviceState.deviceInfo.actionType == 'edit'?false:true}
                              style = {styles.textBox}
                              underlineColorAndroid='transparent'
                              onChangeText={(sNum) => this.setState({sNum:Number(sNum)})}
                              value = {this.state.sNum}
                              clearButtonMode = { 'while-editing'}
                              />
                            <View style={styles.underLine}/>
                        </View>
                        <View style={styles.QRcont}>
                        <Image style={{height:35, width:35}} source = {require('../../../icons/icon-QR-code.png')}/>
                        </View>
                    </View>

             <View style={styles.nameCont}>
                <View style={styles.rowCont}>
                    <View>
                       <Text style={styles.topCont}> LATITUDE </Text>
                       <View >
                         <TextInput
                             style={styles.userInput}
                             onChangeText={(latitude) => this.setState({latitude:latitude.toString()})}
                             value= {this.state.latitude}
                             autoCapitalize='none'
                             underlineColorAndroid='transparent'
                             autoCorrect={false}
                           />
                      </View>
                          <View style={styles.split}/>
                    </View>
                    <View>
                       <Text style={styles.topCont}> LONGITUDE </Text>
                       <View >
                         <TextInput
                             style={styles.userInput}
                             onChangeText={(longitude) => this.setState({longitude:longitude.toString()})}
                             value= {this.state.longitude}
                             autoCapitalize='none'
                             underlineColorAndroid='transparent'
                             autoCorrect={false}
                           />
                      </View>
                          <View style={styles.split}/>
                    </View>

                    <View style={styles.rowimage}>
                    <TouchableOpacity onPress={() => {
                    (new Geolocation()).userlocation((gps) => {
                      this.setState({latitude:gps.latitude.toString(),longitude:gps.longitude.toString()})
                    })}}>
                    {
                      this.props.blockDeviceState.deviceInfo.deviceDataModal.actionType == 'new'?
                        <View/>
                      :
                        <Image style={styles.location} source = {require('../../../icons/icon-location-green.png')}/>
                      
                     }
                       
                       </TouchableOpacity>
                    </View>
                      
                    <View style={styles.rowimage}>
                    {/*
                      <TouchableOpacity onPress={() => {
                             this.props._handleNavigate(actionRoutes.actionShowMap)}}>
                         <Image style={styles.compass} source = {require('../../../icons/icon-current-location.png')}/>
                         </TouchableOpacity>
                       */}
                      </View>
                </View>
             </View>

             <View style={styles.nameCont}>
                <View style={styles.rowCont}>
                    <View>
                       <Text style={styles.topCont}> BLOCK NAME </Text>
                       <View >
                         <TextInput
                             style={styles.userInput}
                             value = {this.props.blockDeviceState.deviceInfo.blockName}
                             autoCapitalize='none'
                             underlineColorAndroid='transparent'
                             autoCorrect={false}
                           />
                      </View>

                          <View style={styles.seperator}/>
                    </View>

                      <View style={styles.rowimage}>
                         <Image style={styles.arrow} source = {require('../../../icons/arrow-down-drop.png')}/>
                      </View>
                </View>
             </View>

             <View style={styles.nameCont}>
                <View style={styles.rowCont}>
                    <View>
                       <Text style={styles.topCont}> ROW NUMBER </Text>
                       <View >
                         <TextInput
                             style={styles.userInput}
                             value={this.state.rowNum}
                             autoCapitalize='none'
                             underlineColorAndroid='transparent'
                             autoCorrect={false}
                           />
                      </View>

                          <View style={styles.seperator}/>
                    </View>

                </View>
             </View>

     </View>
   </View>
 </TouchableWithoutFeedback>
  );
  }
}

export default Flowmeter

