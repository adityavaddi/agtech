import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  designimage:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'12%'
  },
  imagesize:{
    height:80,
    width:80
  },
  photoicon:{
    marginTop:'8%',
    marginLeft:'2%'
  },
  photosize:{
    height:15,
    width:20
  },
  arrowsize:{
    marginTop:'1%',
    height:25,
    width:15
  },
  nameCont:{
    marginTop:'1%',
    flexDirection:'row'
  },
  textstyles:{
    marginLeft:'6%',
    fontSize :16,
    fontWeight:'bold',
    marginTop:'1%',
    '@media android':{
      color:'#333333'
    }
  },
  arrow:{
    alignItems:'flex-end',
    marginRight:'4%',
    flex:1
  },
  seperator:{
    height: 2,
    marginTop:'3%',
    backgroundColor:'#f0f0f5'
  }

});

module.exports = styles;
