import React from 'react';
import {
StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  texttitle:{
    marginLeft:10,
    fontWeight:"100"
  },
  textdescription:{
    marginLeft:10,
    fontWeight:"500"
  },
	row: {
		flexDirection: 'row',
		padding: 5,
	},
  devicename:{
    fontWeight: "500",
    fontSize:17
  },
  row1: {

		flexDirection: 'row',
	  marginLeft:10
	},
	cellImage: {
		marginLeft:120
	},
  cellImage1: {
		marginLeft:10,
    marginTop:-13
	},
  line:{
    height: 1,
    backgroundColor:'#f5f5f5'
  }
})

module.exports = styles;
