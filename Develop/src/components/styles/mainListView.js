import React from 'react';
import {
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import EStyleSheet from 'react-native-extended-stylesheet';

var styles = EStyleSheet.create({
    searchView: {
      flex: 1
    },
  resultsDisplayTitle:{
    fontSize: 20,
    color:'gray',
    textAlign: 'left',
    backgroundColor:'rgb(245,245,245)',
    height:40,
    paddingLeft:'5%',
    paddingTop:'1%'
  },
  spinnerview: {
  flex:1,
  width:width,
  height: height,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgba(0,0,0,0.25)',//'$screens.detailView.colors.camerastatusview',
  marginTop: '35%'
}
});

module.exports = styles;
