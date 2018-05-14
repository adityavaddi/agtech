import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');
const styles = EStyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'#ffffff',
  },
  designimage:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'10%'
  },
  photoicon:{
    marginTop:'18%',
    marginLeft:'1%'
  },
  nameCont:{
    marginTop:'5%',
  },
  userInput:{
    marginLeft:'4%',
    color:'#cccccc',
    fontSize :13,
    marginTop:'2%'
  },
  userInputText:{
   //  textAlign:'center',
     marginLeft:'4%',
     height   :'4%',
     fontSize :13,
     marginTop:'2%',
     '@media android':{
       height:'6%',
       fontSize :18
     }
   },
  usertext:{
    marginLeft:'4%',
    marginTop:'1%'
  },
  seperator:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.1,
    marginTop:'2%',
    backgroundColor:'#12b158'
  },
  spinnerview: {
  	flex:1,
  	zIndex:99,
  	alignItems:'center',
  	justifyContent:'center',
  	backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
  }
});
//EStyleSheet.build(styles);
module.exports = styles;
