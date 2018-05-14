import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './styles/modalviewstyles';
//import * as actionRoutes from '../constants/actionRoutes';
import { actionPushGateWeather, actionSavedVineyard, actionShowMap} from '../constants/actionRoutes';

var dataModal = {
  deviceType : '',
  actionType : 'new',
  selectedDevice : {}
}

const ModalView = (props) =>{
  //console.log("props in modal view", props);
  return(
    <Modal animationType={"slide"} transparent={true}  visible={props.isModalOpen}
           onRequestClose={() => {props.onClose()}}>
        <View style={styles.modalContainer}>
            <View style={styles.crossimage}>
                <TouchableOpacity  onPress={() => {props.onClose()}}>
                  <Image style={styles.imagesize} source={require('../../icons/icon-close.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.topCont}>
              <Text style={styles.maincont}>
                Add Device
              </Text>
            </View>

            <TouchableOpacity onPress={()=> {
              props.onClose();
              actionShowMap.route.renderMode ='deviceMap';
              actionShowMap.data= props.selectedAccount;
              //actionShowMap.data.deviceType= 'gateway'
              actionShowMap.deviceDataModal  = {
                     deviceType : 'gateway',
                     actionType : 'new',
                     selectedDevice : {}
                   }
                   actionShowMap.route.title="Device Location";
                   if(actionShowMap.route.key == 'displayMap'){
                     actionShowMap.route.key = 'displayMap1';
                   }
                   else {
                     actionShowMap.route.key = 'displayMap';
                   }
                  props._handleNavigate(actionShowMap);}}>
              <View style={styles.flowview}>
                <Image style={styles.deviceimage} source = {require('../../icons/icon-gateway-white.png')}/>
                <Text style={styles.devicename}>
                  Gateway
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line}/>

            <TouchableOpacity onPress={()=> {
              props.onClose();
              actionShowMap.route.renderMode ='deviceMap';
              actionShowMap.data= props.selectedAccount;
              actionShowMap.deviceDataModal  = {
                     deviceType : 'weatherstation',
                     actionType : 'new',
                     selectedDevice : {}
                   }
                   actionShowMap.route.title="Device Location";
                   if(actionShowMap.route.key == 'displayMap'){
                     actionShowMap.route.key = 'displayMap1';
                   }
                   else {
                     actionShowMap.route.key = 'displayMap';
                   }
                   //console.log("actionShowMap in modal", actionShowMap);
                  props._handleNavigate(actionShowMap);}}>
              <View style={styles.sensorview}>
                <Image style={styles.deviceimage} source = {require('../../icons/icon-weatherstation-white.png')}/>
                <Text style={styles.devicename}>
                  Weather Station
                </Text>
              </View>
            </TouchableOpacity>

        </View>
   </Modal>
  )

}

 export default ModalView;
