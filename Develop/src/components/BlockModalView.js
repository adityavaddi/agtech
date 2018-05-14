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
import { actionPushFlowmeter,actionShowMap } from '../constants/actionRoutes';

var dataModal = {
  deviceType : '',
  actionType : 'new',
  selectedDevice : {}
}

const BlockModalView = (props) =>{
  //console.log("props in BlockModalView", props);
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
              actionShowMap.data  = props.selectedAccount;
              actionShowMap.route.renderMode = 'blockDevice';
              actionShowMap.deviceDataModal  = {
                     deviceType : 'flowmeter',
                     actionType : 'new',
                     selectedDevice : {}
                   }
              if(actionShowMap.route.key == 'displayMap'){
                actionShowMap.route.key = 'displayMap1';
              }
              else {
                actionShowMap.route.key = 'displayMap';
              }
              props._handleNavigate(actionShowMap);}}>
              <View style={styles.flowview}>
                <Image style={styles.deviceimage} source = {require('../../icons/icon-flowmeter-white.png')}/>
                <Text style={styles.devicename}>
                  Flowmeter
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.line}/>


              <View style={styles.sensorview}>
                <Image style={styles.deviceimage} source = {require('../../icons/icon-soilsensor-white.png')}/>
                <Text style={styles.devicename}>
                  Soil Sensor
                </Text>
              </View>

        </View>
   </Modal>
  )

}

 export default BlockModalView;
