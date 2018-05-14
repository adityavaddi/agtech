import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles/accountDetails';
import * as actionRoutes from '../constants/actionRoutes';

export default class AccountDetails extends Component {
    render() {
      //console.log("props in  accountDetails", this.props);
      // var newBlockArray = []
      // var blocksArray = this.props.selectedAccount.ranch;
      // for (var key in blocksArray){
      //   if(blocksArray[key].type == 'block'){
      //     newBlockArray.push(blocksArray[key])
      //   }
      // }
      var blocksArray = this.props.selectedAccount.ranch;
      blocksArray = blocksArray.filter(item =>item != blocksArray[0]);
      //console.log("newBlockArray::",blocksArray);
      return (
        <View style={styles.container}>

          <View style={styles.profileimage}>
            <Image style={styles.profilesize} source = {require('../../icons/account-icon.png')} />
          </View>
          <View style={styles.accountdetails}>
              <Text style={styles.accountname}>
                ACCOUNT #
              </Text>
              <Text style={styles.accountnumber}>
                A123456
              </Text>
            </View>
          <Text style={styles.accountfamily}>
            Hahn Family Wineries
          </Text>
          <View style={styles.imagesrow}>
              <View style={styles.imageview}>
                  <TouchableOpacity onPress={() => {actionRoutes.actionShowMap.selectedAccount  = this.props.selectedAccount;
                    if (this.props.selectedAccount.ranch.length==1) {actionRoutes.actionShowMap.route.renderMode= 'savedVineyard';}
                    else if(this.props.selectedAccount.ranch.length>1) {actionRoutes.actionShowMap.route.renderMode= 'savedBlock';}
                    this.props._handleNavigate(actionRoutes.actionShowMap)}}>
                    <Image source = {require('../../icons/but-map-on.png')}/>
                  </TouchableOpacity>
                <Text style={styles.mapview}>Map </Text>
              </View>

              <View style={styles.imageview}>
              <TouchableOpacity onPress={() => {
                  if(this.props.selectedAccount.ranch != undefined){
                    actionRoutes.actionPushShowBlocks.route.selectedAccount  = this.props.selectedAccount;
                    actionRoutes.actionPushShowBlocks.data  = blocksArray;
                    this.props._handleNavigate(actionRoutes.actionPushShowBlocks)
                  }
                }}>
                  <Image style={{height:50,width:50}} source = { ((this.props.selectedAccount.ranch !== undefined) && (this.props.selectedAccount.ranch.length>0)) ? require('../../icons/but-blocks-on.png') : require('../../icons/but-blocks-off.png')}/>
                </TouchableOpacity>
                <Text style={styles.textview}>Blocks </Text>
              </View>

              <View style={styles.imageview}>
                      <TouchableOpacity onPress={()=> {
                          if(this.props.selectedAccount.devices != undefined){
                            actionRoutes.actionShowMap.selectedAccount= this.props.selectedAccount;
                            actionRoutes.actionPushDeviceList.data  = this.props.selectedAccount.devices;
                             this.props._handleNavigate(actionRoutes.actionPushDeviceList);
                          }
                        }}>
                        <Image source = {( (this.props.selectedAccount.devices != undefined)  && (this.props.selectedAccount.devices.length>0))? require('../../icons/but-devices-on.png') : require('../../icons/no-devices.png')} />
                      </TouchableOpacity>
                    <Text style={styles.textview}>Devices </Text>
              </View>

              <View style={styles.imageview}>
                <TouchableOpacity onPress={()=> {
                    if(this.props.selectedAccount.orders != undefined){
                      actionRoutes.actionPushDeviceList.data  = this.props.selectedAccount.orders;
                       this.props._handleNavigate(actionRoutes.actionPushDeviceList);
                    }
                  }}>
                  <Image source = { (this.props.selectedAccount.orders != undefined) ? require('../../icons/but-orders-on.png') : require('../../icons/but-orders-off.png')} />
                  </TouchableOpacity>
                <Text style={styles.textview}>Orders </Text>
              </View>

         </View>

              <View style={styles.rowseperator}/>

                  <View style={styles.accountinfo}>

                    <View style={styles.listItem }>
                          <View style={styles.inforow}>
                              <View style={styles.imageIconView}>
                                <Text style={styles.contactdetails}>ADDRESS </Text>
                              </View>
                              <View style={styles.addressview}>
                                <Text numberOfLines={3} style={styles.rowdatadevice}>
                                  1 Main St. Napa Valley CA 12345
                                </Text>
                              </View>
                          </View>

                          <View style={styles.locationView}>
                                <Image source = {require('../../icons/icon-location-small-yellow.png')} />
                          </View>
                      </View>

                      <View style={styles.rowseperator}/>

                      <View style={styles.listItem }>
                            <View style={styles.inforow}>
                                <View style={styles.imageIconView}>
                                  <Text style={styles.contactdetails}>CONTACT </Text>
                                </View>
                                <View style={styles.accountcontactview}>
                                  <Text numberOfLines={2} style={styles.rowdatadevice}>
                                    John Appleseed
                                  </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.rowseperator}/>

                        <View style={styles.listItem }>
                              <View style={styles.inforow}>
                                  <View style={styles.imageIconView}>
                                    <Text style={styles.contactdetails}>PHONE </Text>
                                  </View>
                                  <View style={styles.accountcontactview}>
                                    <Text style={styles.rowdatadevice}>
                                      (800) 123-1234
                                    </Text>
                                  </View>
                              </View>
                          </View>

                        <View style={styles.rowseperator}/>

                        <View style={styles.listItem }>
                              <View style={styles.inforow}>
                                  <View style={styles.imageIconView}>
                                    <Text style={styles.contactdetails}>EMAIL </Text>
                                  </View>
                                  <View style={styles.accountcontactview}>
                                    <Text style={styles.rowdatadevice}>
                                      contact@hahnfamily.com
                                    </Text>
                                  </View>
                              </View>
                          </View>

                          <View style={styles.rowseperator}/>

                  </View>
        </View>
      );
  }
}
