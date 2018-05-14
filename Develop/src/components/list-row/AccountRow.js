import React, {PropTypes} from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
import styles from '../styles/list-row/accountRow';
var imag = require('../../../icons/account-icon.png');
var rightArrow = require('../../../icons/icon-arrow-right.png');

const AccountRow = (props) => {
	//console.log('Account Row Props.. ',props)
	var address = props.data.address.street+'\n'+props.data.address.city+' '+ props.data.address.state+' '+props.data.address.zip
	return(
		<View style={styles.container}>
		  <View style={styles.contentView}>
					<View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
					  <Image source={imag}  style={styles.headerImage}/>
					</View>
          <View style={{flex:5}}>
						  <Text style={styles.devicename}>{props.data.accountName}</Text>
							<View style={styles.titleRow}>
									<Text style={styles.texttitle}>ADDRESS</Text>
									<Text style={styles.texttitle}>ACCOUNT #</Text>
							</View>
							<View style={styles.descriptionRow}>
									<Text style={styles.textdescription}>{address}</Text>
									<Text style={styles.textdescription}>{props.data.accountNumber}</Text>
							</View>
				  </View>
					<View style={styles.rightArrow} >
					   <Image source={rightArrow}  />
					</View>
				</View>
		</View>
	);
};

export default AccountRow;
