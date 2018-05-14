import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
import styles from './styles/block';
import BlocksListHome from './Blocks/BlocksListHome'
const Block = (props) => {
		return <BlocksListHome {...props}/>
};

// Details.propTypes = {
// 	onButtonPress: PropTypes.func.isRequired
// };
export default Block;
