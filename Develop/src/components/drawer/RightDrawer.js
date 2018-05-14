// import node modules
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import project files
import { actionPushAddDevice,actionPushDeviceList,actionPushShowBlocks,actionPushBlock, actionShowMap } from '../../constants/actionRoutes';
import styles from '../styles/drawer/rightDrawer';
import ModalView from '../ModalView';
import BlockModalView from '../BlockModalView';
import * as actionRoutes from '../../constants/actionRoutes';

//images
var band = require('../../../icons/icon-wizard.png');
var check = require('../../../icons/icon-check.png');

class RightDrawer extends Component{

  constructor(props) {
   super(props);
   this.state = {
       vineyardLevelModalVisible: false,
       blockLevelModalVisible: false
   };
 }
 showVineyardLevelDevicesModalView(){
   this.setState({ vineyardLevelModalVisible: true});
 }

    showBlockLevelDevicesModalView(){
        this.setState({blockLevelModalVisible: true});
    }

 componentWillUnmount()
 {
   this.setState({ vineyardLevelModalVisible: false,blockLevelModalVisible: false})
 }
 closeVineyardLevelDevicesModal()
 {
   this.setState({ vineyardLevelModalVisible: !this.state. vineyardLevelModalVisible})
 }

    closeBlockLevelDevicesModal()
    {
        this.setState({blockLevelModalVisible: !this.state.blockLevelModalVisible})
    }

 checkDeviceDetails(deviceType){
   //this.setState({isRightMenuLoaded : true});
   var data = {} ;
   if(deviceType === 'devices'){
     data =  ( this.props.selectedAccount != undefined && (this.props.selectedAccount.devices != undefined && this.props.selectedAccount.devices.length > 0) )? this.props.selectedAccount.devices : undefined;
   }else if(deviceType === 'blocks'){
     data =  ( this.props.selectedAccount != undefined && (this.props.selectedAccount.ranch != undefined && this.props.selectedAccount.ranch.length > 1) )? this.props.selectedAccount.ranch : undefined;
   }
   if(data != undefined){
     return (
       <View style={styles.check}>
       <Image source={check} style={styles.checkimage}/>
       </View>
     )
   }else{
     return <View/>
   }
 }

  render(){


    return (
      <View style={styles.container}>

                      <View style={styles.image}>
                         <Image style={styles.band} source={band}/>
                      </View>

                      <View style={styles.ranchdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>1</Text>
                          </View>
                          <TouchableOpacity>
                            <Text style={styles.menuItemText}>Ranch Design</Text>
                          </TouchableOpacity>
                          <View style={styles.check}>
                          <Image style={styles.checkimage} source={check} />
                          </View>
                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>2</Text>
                          </View>
                           <TouchableOpacity>
                             <Text style={styles.menuItemText}>Ranch Details</Text>
                           </TouchableOpacity>
                           <View style={styles.check}>
                           <Image style={styles.checkimage} source={check} />
                           </View>
                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>3</Text>
                          </View>
                          <ModalView {...this.props} isModalOpen={this.state.vineyardLevelModalVisible} visible={false} onClose={() => this.closeVineyardLevelDevicesModal()}/>
                               <TouchableOpacity onPress={()=> {this.showVineyardLevelDevicesModalView()}}>
                                   <Text style={styles.menuItemText}>Add Devices</Text>
                           </TouchableOpacity>
                           { this.checkDeviceDetails('devices')}
                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>4</Text>
                          </View>
                          <TouchableOpacity onPress={() => {actionShowMap.selectedAccount  = this.props.selectedAccount;
                          //  console.log("create blocks ", this.props.selectedAccount.ranch);
                            if (this.props.selectedAccount.ranch.length >= 0) {actionShowMap.route.renderMode= 'drawBlock';}
                            actionShowMap.route.title="New Block";
                            if(actionShowMap.route.key == 'displayMap'){
                              actionShowMap.route.key = 'displayMap1';
                            }
                            else {
                              actionShowMap.route.key = 'displayMap';
                            }
                            this.props._handleNavigate(actionShowMap)}}>
                             <Text style={styles.menuItemText}>Create Block</Text>
                           </TouchableOpacity>
                          { this.checkDeviceDetails('blocks')}
                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>5</Text>
                          </View>
                           <TouchableOpacity onPress={()=> {
                            //  actionPushShowBlocks.data  = this.props.selectedAccount.blocks;
                               //this.props._handleNavigate(actionPushShowBlocks);
                               var blocksArray = this.props.selectedAccount.ranch;
                               blocksArray = blocksArray.filter(item =>item != blocksArray[0]);
                             if(this.props.selectedAccount.ranch != undefined){
                               actionPushShowBlocks.route.selectedAccount  = this.props.selectedAccount;
                               actionPushShowBlocks.data  = blocksArray;
                                 this.props._handleNavigate(actionPushShowBlocks);
                             }
                            }}>
                             <Text style={styles.menuItemText}>Show Blocks</Text>
                           </TouchableOpacity>
                           { this.checkDeviceDetails('blocks')}

                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                          <View style={styles.circle}>
                            <Text style={styles.count}>6</Text>
                          </View>
                          <BlockModalView {...this.props} isModalOpen={this.state.blockLevelModalVisible} visible={false} onClose={() => this.closeBlockLevelDevicesModal()}/>
                              <TouchableOpacity onPress={()=> {this.showBlockLevelDevicesModalView()}}>
                                <Text style={styles.menuItemText}>Add Block Devices</Text>
                             </TouchableOpacity>
                      </View>

                      <View style={styles.seperator} />

                      <View style={styles.rowdesign}>
                            <View style={styles.circle}>
                              <Text style={styles.count}>7</Text>
                            </View>
                             <TouchableOpacity onPress={()=> {
                               if(this.props.selectedAccount.devices != undefined){
                                 actionPushDeviceList.data  = this.props.selectedAccount.devices;
                                 this.props._handleNavigate(actionPushDeviceList);
                               }
                            }}>
                               <Text style={styles.menuItemText}>Show Devices</Text>
                             </TouchableOpacity>
                             { this.checkDeviceDetails('devices')}
                        </View>

                      <View style={styles.line}/>

          </View>
    )
  }
}

export default RightDrawer;
