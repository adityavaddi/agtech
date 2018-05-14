import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    marginTop:'9%',
    backgroundColor:'#ffffff',
    flex: 1
  },
  topCont1:{
    height:deviceHeight/14,
    justifyContent:'center',
    backgroundColor:'#f5f5f5'
  },
  topContstyles:{
    fontSize:16,
    marginLeft:'3%',
    fontWeight:'bold'
  },
  topCont:{
    marginLeft:'4%',
    color:'#cccccc',
    fontSize :14,
    marginTop:'1%',
    '@media android':{
      fontSize:16
    }
  },
  rowimage:{
    flex:1,
    alignItems:'flex-end',
    marginRight:'4%',
    marginTop:'3%'
  },
  arrow:{
    marginTop:'2%',
    height:deviceHeight/60,
    width:deviceWidth/20
  },
  subcont:{
    marginLeft:'5%',
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
    width:deviceWidth/1.1,
    backgroundColor:'#12b158',
    '@media ios':{
         marginTop:'1%'
    },
    '@media android':{
         marginTop:'-1%'
    }
  }

});

module.exports = styles;
