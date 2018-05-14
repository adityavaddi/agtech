import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

var styles = EStyleSheet.create({
  modalContainer: {
    flex:1,
    backgroundColor:'rgba(255,255,255,0.9)'
  },
  crossimage:{
    marginTop:'8%',
    alignItems:'flex-end'
  },
  imagesize:{
    height:deviceHeight/28,
    width:deviceWidth/16,
    marginRight:'5%'
  },
  topCont:{
    alignItems:'center',
    marginTop:'5%'
  },
  maincont:{
    fontSize:24,
    fontWeight:'800',
    color:'#12b158'
  },
  flowview:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'3%',
    height:deviceHeight/8,
    backgroundColor:'#12b158'
 },
 sensorview:{
   flexDirection:'row',
   alignItems:'center',
   height:deviceHeight/8,
   backgroundColor:'#12b158'
 },
  deviceimage:{
    marginLeft:'15%',
    height:deviceHeight/18,
    width:deviceWidth/10,
    '@media (max-width:1536px)':{
      height:deviceHeight/14,
      width:deviceWidth/11,
    }
  },
  devicename:{
    fontWeight:'700',
    fontSize:18,
    color:'white',
    marginLeft:'5%'
  },
  line:{
    height: 1,
    backgroundColor:'white'
  },
});

module.exports = styles;
