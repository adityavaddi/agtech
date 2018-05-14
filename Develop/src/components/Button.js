// node modules
import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
// project files
import styles from './styles/button';

export default ({label, onPress}) => (
  <TouchableHighlight underlayColor='#35b5ff' onPress={onPress} style={styles.button}>
    <Text style={styles.label}>{label}</Text>
  </TouchableHighlight>
);
