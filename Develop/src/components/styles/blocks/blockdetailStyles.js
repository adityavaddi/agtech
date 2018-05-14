import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  blockimg:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'12%'
  },
  imagesize: {
    height:100,
    width:100
  },
  photoicon:{
    marginTop:'12%',
    marginLeft:'3%'
  },
  photosize:{
    height:deviceHeight/30,
    width:deviceWidth/15
  },
  mainCont:{
    marginTop:'4%'
  },
  topCont:{
    marginLeft:'4%',
    color:'#cccccc',
    fontSize :13,
    fontWeight:'600',
    marginTop:'2%',
    '@media android':{
      fontSize:16
    }
  },
  subcont:{
    marginLeft:'5%',
    marginTop:'1%',
    fontSize:14,
    height:'4%',
    '@media android':{
      height:'6%',
      marginLeft:'4%',
      fontSize:16,
    }
  },
  rowCont:{
    flexDirection:'row'
  },
  seperator:{
    marginLeft:'4%',
    height:1,
    marginTop:'1%',
    width:deviceWidth/1.1,
    backgroundColor:'#12b158'
  }

});

module.exports = styles;
