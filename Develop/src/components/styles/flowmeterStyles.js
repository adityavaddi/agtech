import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  designimage:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'12%'
  },
  photoicon:{
    marginTop:'10%',
    marginLeft:'2%'
  },
  photosize:{
    height:15,
    width:20
  },
  nameCont:{
    marginTop:'2%',
  },
  topCont:{
    marginLeft:'4%',
    color:'grey',
    fontSize :12,
    marginTop:'2%'
  },
  userInput:{
    marginLeft:'4%',
    marginTop:'1%',
    fontSize:14,
    height:'4%',
    fontWeight:'bold',
    '@media android':{
      marginTop:'0%',
      height:'6%'
    }
  },
  serial:{
    marginLeft:'4%',
    marginTop:'1%',
    fontSize:14,
    height:'4%',
    fontWeight:'bold',
    '@media android':{
      marginTop:'0%',
      height:'6%',
      width:'75%'
    }
  },
  mainCont:{
    marginLeft:'4%',
    marginTop:'1%',
    fontSize:14,
    fontWeight:'bold'
  },
  rowCont:{
    flexDirection:'row'
  },
  imageCont:{
    flex:1,
    alignItems:'flex-end',
    marginRight:'6%'
  },
  rowimage:{
    flex:1,
    alignItems:'flex-end',
    marginRight:'4%',
    marginTop:'3%',
    // marginLeft:'6%'
  },
  location:{
    marginTop:'2%',
    height:35,
    width:25
  },
  compass:{
    marginTop:'2%',

    height:35,
    width:35
  },
  seperator:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.1,
    marginTop:'1%',
    backgroundColor:'green',
    '@media android':{
      marginTop:'0%'
    }
  },
  split:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/3.5,
    marginTop:'1%',
    backgroundColor:'green',
    '@media android':{
      marginTop:'0%'
    }
  },
  line:{
    height: 1,
    marginLeft:'4%',
    width:deviceWidth/1.4,
  //  marginTop:'1%',
    backgroundColor:'green'
  },
  arrow:{
    marginTop:'3%',
    marginRight:'2%',
    height:15,
    width:20
  },

      bottomCont :{
        flex:1,
        width:deviceWidth*0.9
      },
      nameCont:{
        height:deviceHeight*0.1,
        width:deviceWidth*0.9,
        //backgroundColor:'lightblue',
        marginTop:'1%',
        justifyContent:'center'
      },
      sNumber:{
        flexDirection:'row',
        height:deviceHeight*0.1,
        marginLeft:'4%',
        //width:'70%',
        //backgroundColor:'lightblue',
        marginTop:'1%',
        //justifyContent:'center',
        //overflow:'hidden'
      },
      textBox:{
        height: deviceHeight*0.05,
        //backgroundColor:'lightblue'
        color:'#2F292B',
        '@media android': {
          height:'7%'
        }
      },
      labelCont:{
        height:deviceHeight*0.03,
        //backgroundColor:'lightgreen',
        justifyContent:'center',
        '@media android':{
          marginLeft:'1%'
        }
      },
      label :{
        color:'#999999',
        fontFamily:'AvenirNext-Bold',
        fontWeight:'400',
        '@media android':{
          fontSize:14
        }
      },
      underLine:{
        height:deviceHeight*0.15 *0.01,
        backgroundColor:'#2BAF5B',
        //width:'90%'
      },
      subSNumber:{
          width:deviceWidth*0.7
      },
      QRcont:{
        alignItems:'center',
        justifyContent:'flex-end',
        height:deviceHeight*0.08,
        width:deviceWidth*0.2,
        //backgroundColor:'tan'
      },
      latCont:{
        width:deviceWidth*0.3,
        '@media android':{
            marginTop:'1%'
        }
      },
      lngCont:{
        width:deviceWidth*0.3,
        marginLeft:20,
        '@media android':{
            marginTop:'1%'
        }
      },
      locatCont:{
        height:deviceHeight*0.08,
        width:deviceWidth*0.15,
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'tan'
      },
      nearMeCont:{
        height:deviceHeight*0.08,
        width:deviceWidth*0.15,
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'tan'
      },
      cordCont:{
        flexDirection:'row',
        //backgroundColor:'tan'
      },
    locatCont:{
      height:deviceHeight*0.08,
      width:deviceWidth*0.15,
      alignItems:'center',
      justifyContent:'flex-end',
      //backgroundColor:'tan'
    },
    nearMeCont:{
      height:deviceHeight*0.08,
      width:deviceWidth*0.15,
      alignItems:'center',
      justifyContent:'flex-end',
      //backgroundColor:'tan'
    },
    cordCont:{
      flexDirection:'row',
      //backgroundColor:'tan'
    },
  spinnerview: {
    flex:1,
    width:deviceWidth,
    height:deviceHeight,
    zIndex:99,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
  }

});

module.exports = styles;
