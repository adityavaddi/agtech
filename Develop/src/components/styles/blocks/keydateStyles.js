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
  topCont:{
    marginTop:'9%',
    height:deviceHeight/14,
    justifyContent:'center',
    backgroundColor:'#f5f5f5'
  },
  topContstyles:{
    fontSize:16,
    marginLeft:'3%',
    fontWeight:'bold'
  },
  maincont:{
    marginTop:'3%'
  },
  mainstyles:{
    marginLeft:'6%',
    fontSize :14,
    fontWeight:'400',
    color: '#cccccc',
    '@media android':{
      marginLeft:'7%',
      fontSize :16
    }
  },
  innertext:{
    marginLeft:'5%',
    height:'4%',
    marginTop:'1%',
    '@media android':{
      marginLeft:'6%'
    }
  },
  line:{
    height: 1,
    marginLeft:'6%',
    width:deviceWidth/1.15,
    backgroundColor:'#12b158'
  }

});

module.exports = styles;
