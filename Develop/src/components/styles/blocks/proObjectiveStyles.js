import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop:'4%',
    backgroundColor:'#ffffff'
  },
  topCont:{
    marginTop:'5%',
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
    fontWeight:'400',
    marginTop:'1%'
  },
  arrow:{
    alignItems:'flex-end',
    marginRight:'6%',
    flex:1
  },
  lstcont:{
    marginLeft:'6%',
    fontSize :12,
    height:'6%',
    '@media android': {
      marginTop:'2%',
      fontSize:14,
      height:'8%'
    }
  },
  icon:{
    width:deviceWidth/12,
    height:deviceHeight/21,
    '@media android':{
      width:deviceWidth/11,
      height:deviceHeight/20
    }
  },
  seperator:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.1,
    marginTop:'2%',
    backgroundColor:'#f5f5f5'
  },
  line:{
    marginLeft:'4%',
    height: 1,
    width:deviceWidth/1.1,
    backgroundColor:'#12b158',
    '@media ios':{
         marginTop:'3%'
    },
    '@media android':{
        marginTop:'2%'
    }
  },
  rowCont:{
    flexDirection:'row'
  }

});

module.exports = styles;
