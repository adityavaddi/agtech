import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var styles = EStyleSheet.create({
    searchResultsContainer:{
      flex: 1
    },
    searchView: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    searchBarView: {
      height: 50,
      backgroundColor:'#ffffff',
      marginTop:'10%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    emptySpace:{
      height:1,
      backgroundColor:'#12b158'
    },
    iconLeftView: {
      flex:1,
      marginLeft: '4%',
    },
    iconRightView: {
      flex:1,
      marginRight: '7%',
    },

    textInput: {
      height: '7%',
      marginLeft: '2%',
      fontSize :16,
      fontWeight:'bold',
      color:'#333333'
    },
    textInputView: {
      flex: 8
    },
    resultsDisplayTitle:{
      fontSize: 20,
      color:'#999999',
      textAlign: 'left',
      height:40,
      paddingTop:'2%',
      '@media (max-width:1536px)': {
        height:'8%'
      }
    },
    resultsDisplayCountText:{
      fontSize: 20,
      textAlign: 'left',
      backgroundColor:'rgb(245,245,245)',
      height:40,
      paddingLeft:'5%',
      paddingTop:'2%',
      fontWeight:'bold',
      '@media (max-width:1536px)': {
        height:'8%'
      }
    },
    spinnerview: {
      flex:1,
      width:width,
      height:height,
      zIndex:99,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
    },
    profileimage:{
      alignItems: 'center',
      justifyContent:'center',
      marginTop:'10%',
    },
    profileName:{
      fontSize:20,
      alignItems: 'center',
      justifyContent:'center',
      marginTop:'2%',
      fontWeight: 'bold',
    },
    goButton:{
      alignItems: 'center',
      justifyContent:'center',
      marginTop:'5%',
      width:width,
      height:'8%',
      backgroundColor:'rgb(34,176,92)',
    }
  });

module.exports = styles;
