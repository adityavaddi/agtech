
//Media Queries added......

import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({

  '@media (min-width : 800) and (max-height : 1300) and (orientation : portrait)': {  //ipad 2 and tab s2 going here
    band:{
      height:'8%',
      width:'12%',
    },
    circle:{
       width: '9%',
       height: '6%',
       borderRadius: 50/2,
       backgroundColor: '#ffffff'
    },

 },


//  '@media (max-width : 1400) and (min-height : 400) and (orientation : landscape) ': {  //ipad 2 and tab s2 going here
//    band:{
//      height:'8%',
//      width:'12%',
//    },
//    circle:{
//       width: '9%',
//       height: '6%',
//       borderRadius: 50/2,
//       backgroundColor: 'yellow'
//    },
//
// },


  '@media (min-width : 768) and (max-height : 1024) and (orientation : portrait)': {  //ipad 2
    band:{
      height:'8%',
      width:'12%',
    },
    circle:{
       width: '7%',
       height: '5%',
       borderRadius: 50/2,
       backgroundColor: '#ffffff'
    },

 },
   '@media (min-width : 720) and (max-height : 946) and (orientation : portrait)': {  //ipad mini
    band:{
      height:'8%',
      width:'12%',
    },
    circle:{
       width: '7%',
       height: '5%',
       borderRadius: 50/2,
       backgroundColor: '#ffffff'
    },

 },


  '@media (min-width : 800) and (max-height : 1300) and (orientation : portrait)': {  //tab s2 going here
    band:{
      height:'8%',
      width:'12%',
    },
    circle:{
       width: '9%',
       height: '5%',
       borderRadius: 50/2,
       backgroundColor: '#ffffff'
    },

 },
  '@media (min-width : 250) and (max-height : 700) and (orientation : portrait)': {  //iphone 6  and Nexus 6p going here
      band:{
        height:'7%',
        width:'12%',
      },
      circle:{
         width: '9%',
         height: '5%',
         borderRadius: 50/2,
         backgroundColor: '#ffffff',
      },

  },

  '@media (max-width : 700) and (min-height : 250) and (orientation : landscape)': {  //iphone 6  and Nexus 6p going here
      band:{
        height:'7%',
        width:'12%',
      },
      circle:{
         width: '9%',
         height: '5%',
         borderRadius: 50/2,
         backgroundColor: '#ffffff',
      },

  },

//   '@media (min-width : 600) and (max-height : 1024)' :{
//     band:{
//       height:'7%',
//       width:'12%',
//     },
//     circle:{
//        width: '7%',
//        height: '5%',
//        borderRadius: 50/2,
//        backgroundColor: 'blue',
//     },
// },

  container:{
    flex: 1,
    backgroundColor: '#12b158'
  },
  image:{
    alignItems: 'center',
    marginTop:'8%'
  },
  band:{
    height:deviceHeight/12,
    width:deviceWidth/8
  },
  checkimage:{
    height:deviceHeight/40,
    width:deviceWidth/18,
    '@media (max-width:1536px)': {
      width:'5%',
      height:'3%'
    }
  },
  menuItemText:{
    color:'#ffffff',
    marginTop:'1%',
    fontSize: 16,
    marginLeft: '6%'
  },
  ranchdesign:{
    flexDirection: 'row',
    marginLeft:'10%',
    marginTop:'6%',
  },
  rowdesign:{
    flexDirection: 'row',
    marginLeft:'10%'
  },
  count:{
    fontWeight:'800',
    color:'#12b158',
    marginTop:'1%',
    //marginLeft:'3%',
    width:'3%',
    '@media (max-width:1536px)': {
      marginLeft:'2%'
    }
  },
  // circle:{
  //   width: deviceWidth/13,
  //   height: deviceHeight/20,
  //    borderRadius: deviceWidth/2,
  //    backgroundColor: '#ffffff',
  //   //  '@media android':{
  //   //    width: '10%',
  //   //    height: '5%',
  //   //  },
  //   //  '@media (max-width:1440px)': {
  //   //    height:deviceHeight/21,
  //   //    width:deviceWidth/12,
  //   //  },
  // },
  check:{
    alignItems:'flex-end',
    flex:1,
    marginRight:'5%'
  },
  seperator:{
    marginLeft:'14%',
    backgroundColor:'#ffffff',
    height: '3%',
    width:1
  },
  line:{
    height: 1,
    marginTop:'5%',
    marginLeft:'5%',
    width:'70%',
    backgroundColor:'#ffffff'
  }

});

module.exports = styles;





// import EStyleSheet from 'react-native-extended-stylesheet';
// import {Dimensions} from 'react-native';
//
// var {
//   height: deviceHeight,
//   width:deviceWidth
// } = Dimensions.get('window');
//
// const styles = EStyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: '#12b158'
//   },
//   image:{
//     alignItems: 'center',
//     marginTop:'8%'
//   },
//   band:{
//     height:deviceHeight/16,
//     width:deviceWidth/9,
//     // '@media (max-width:2560px)': {  // s7
//     //   height:deviceHeight/11,
//     //   width:deviceWidth/6.5,
//     // },
//     '@media (max-width:1536px)': {   // tab
//       height:deviceHeight/9.5,
//       width:deviceWidth/7.5,
//     }
//   },
//   checkimage:{
//     height:deviceHeight/40,
//     width:deviceWidth/18,
//     '@media (max-width:1536px)': {
//       width:'5%',
//       height:'3%'
//     }
//   },
//   menuItemText:{
//     color:'#ffffff',
//     marginTop:'1%',
//     fontSize: 16,
//     marginLeft: '6%'
//   },
//   ranchdesign:{
//     flexDirection: 'row',
//     marginLeft:'10%',
//     marginTop:'6%',
//   },
//   rowdesign:{
//     flexDirection: 'row',
//     marginLeft:'10%'
//   },
//   count:{
//     fontWeight:'800',
//     color:'#12b158',
//     marginTop:'1%',
//     marginLeft:'3%',
//     width:'3%',
//     '@media (max-width:1536px)': {
//       marginLeft:'2%'
//     }
//   },
//   circle:{
//       width: '9%',
//       height: '5%',
//      borderRadius: 50/2,
//      backgroundColor: '#ffffff',
//     //  '@media android':{
//     //    width: '10%',
//     //    height: '5%',
//     //  },
//     //  '@media (max-width:1440px)': {
//     //    height:deviceHeight/21,
//     //    width:deviceWidth/12,
//     //  },
//      '@media (max-width:1536px)': {
//        height:deviceHeight/22,
//        width:deviceWidth/18
//      }
//   },
//   check:{
//     alignItems:'flex-end',
//     flex:1,
//     marginRight:'5%'
//   },
//   seperator:{
//     marginLeft:'14%',
//     backgroundColor:'#ffffff',
//     height: '3%',
//     width:1,
//     '@media (max-width:1536px)': {
//       marginLeft:'13%'
//     }
//   },
//   line:{
//     height: 1,
//     marginTop:'5%',
//     marginLeft:'5%',
//     width:'70%',
//     backgroundColor:'#ffffff',
//     // '@media android':{
//     //   height:2
//     // }
//   }
//
// });
//
// module.exports = styles;
