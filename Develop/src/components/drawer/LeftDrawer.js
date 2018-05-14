import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
 import styles from '../styles/drawer/leftDrawer';

import { actionPushAddDevice,actionPushDeviceList,actionPushShowBlocks } from '../../constants/actionRoutes';

//images
var profileLogo = require('../../../icons/profile-logo.png');


// export right drawer
export default ({_handleNavigate})=> (
    <View style={styles.container}>

                <View style={styles.image}>
                   <Image style={styles.profilesize} source={profileLogo}/>
                   <Text style={styles.profileName}>Johnny Appleseed</Text>

                </View>

                <View style={styles.ranchdesign}>
                    <TouchableOpacity>
                      <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line} />

                <View style={styles.rowdesign}>
                     <TouchableOpacity>
                       <Text style={styles.menuItemText}>Password</Text>
                     </TouchableOpacity>
                </View>

                <View style={styles.line} />

                <View style={styles.rowdesign}>
                     <TouchableOpacity onPress={()=> {
                       //_handleNavigate(actionPushAddDevice);
                     }}>
                       <Text style={styles.menuItemText}>Settings</Text>
                     </TouchableOpacity>
                </View>


								<View style={styles.lastrowdesign}>
										 <TouchableOpacity onPress={()=> {
                        //_handleNavigate(actionPushAddDevice);
                      }}>
											 <Text style={styles.signoutText}>Sign Out</Text>
										 </TouchableOpacity>
								</View>


    </View>
);
