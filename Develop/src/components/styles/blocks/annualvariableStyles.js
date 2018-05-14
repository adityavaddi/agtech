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
  titlecont:{
    marginTop:'9%',
    height:deviceHeight/14,
    justifyContent:'center',
    backgroundColor:'#f5f5f5'
  },
  titlecontstyles:{
    fontSize:16,
    marginLeft:'3%',
    fontWeight:'bold'
  },
  maincont:{
    marginTop:'2%'
  },
  innerstyles:{
    marginLeft:'5%',
    fontSize :14,
    color: '#cccccc',
    '@media android': {
      fontSize:16
    }
  },
  calender: {
    width:deviceWidth/4,
    //backgroundColor:'red',
    marginTop:'1%',
    marginLeft:'4%',
    '@media android': {
      marginTop:'2%'
    }
  },
  line:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.1,
    marginTop:'1%',
    backgroundColor:'#12b158',
    '@media android': {
      marginTop:'0%'
    }
  },
  rowCont:{
    flexDirection:'row'
  },
  topCont:{
    marginLeft:'4%',
    color:'#cccccc',
    fontSize :14,
    marginTop:'2%',
    '@media android':{
      fontSize:16,
      marginTop:'1%'
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
  seperator:{
   marginLeft:'4%',
   width:deviceWidth/1.1,
   backgroundColor:'#12b158',
   height:1,
   '@media android':{
       marginTop:'-1%'
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
  }

});

module.exports = styles;
