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
  maincont:{
    marginTop:'2%',
    marginLeft:'6%'
  },
  maincontstyles:{
    fontSize:13,
    fontWeight:'100',
    color: '#cccccc'
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
  nameCont:{
    marginTop:'1%',
    flexDirection:'row'
  },
  textstyles:{
    marginLeft:'6%',
    fontSize :16,
    width:deviceWidth/1.26,
    fontWeight:'600',
    marginTop:'1%',
    color:'#cccccc'
  },
  value:{
    marginTop:'1%',
    flex:1,
    '@media android':{
      marginTop:'0%'
    }
  },
  rightcont: {
    height:'3%',
    fontSize:16,
    fontWeight:'500',
    '@media android':{
      height:'6%',
      marginTop:'-1%',
      fontSize:15
    }
  },
  line:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.1,
    marginTop:'1%',
    backgroundColor:'#12b158',
    '@media android':{
      marginTop:'0%'
    }
  }

});

module.exports = styles;
