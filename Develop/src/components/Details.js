import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
import styles from './styles/details';

const Details = (props) => {
		return (
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
				 <View style={{backgroundColor:'red'}}/>
				</View>
		);
};

// Details.propTypes = {
// 	onButtonPress: PropTypes.func.isRequired
// };
export default Details;
