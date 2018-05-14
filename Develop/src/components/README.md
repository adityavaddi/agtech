# Presentational component example
------------------------------------
import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
// Create styles locally or import from styles folder
import styles from './styles/Map';

// Presentational, stateless component. Constant arrow function
const Map = (props /*Props passed from container*/ ) => {
//another format: const Map = ({ todos, onTodoClick }) => (
		return (
				<View>
				</View>
		);
};

// Type checking for props: action(behavior) and state(data)
Map.propTypes = {
	onButtonPress: PropTypes.func.isRequired
};

// Create styles locally or import from styles folder
const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
