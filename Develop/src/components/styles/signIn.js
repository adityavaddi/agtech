import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    image: {
      marginTop: '10%',
      alignItems:'center',
      justifyContent:'center'
    },
    signinheading:{
      alignItems:'center',
      marginTop:'18%'
    },
    signinheadingstyle:{
      fontSize:22,
      color:'#12b158',
      fontWeight: '800'
    },
    line:{
      height: 1,
      marginTop:'2%',
      backgroundColor:'#12b158',
      '@media android':{
        height:2
      }
    },
    usertextContainer:{
      '@media ios': {
        height:'4%',
        marginTop:'2%'
    },
    '@media android': {
        height:'6%',
        marginTop:'3%'
    }
    },
    userInputText:{
      textAlign:'center',
      height   :'4%',
      fontSize :14,
      '@media android':{
        height:'7%',
        fontSize :18
      }
    },
    seperator:{
      '@media ios':{
        height: 1,
        marginTop:'2%',
        backgroundColor:'#12b158'
      },
      '@media android':{
        backgroundColor:'#12b158',
        height: 1,
        marginTop:'-1%'
      }
    },
    userpassContainer:{
      '@media ios': {
        height:'4%',
        marginTop:'3%'
    },
    '@media android': {
        height:'4%',
        marginTop:'2%'
    }
    },
    signinbutton: {
      marginTop:'3%',
      justifyContent:'center',
      backgroundColor:'#12b158',
      height:'8%'
    },
    signinview:{
      alignItems:'center',
      justifyContent:'center'
    },
    signtext:{
      fontSize:18,
      color:'#ffffff',
      fontWeight: 'bold'
    },
    forgotview:{
      alignItems:'center',
      marginTop:'2%'
    },
    forgottext:{
      fontSize:12,
      color:'#0099ff',
      '@media android':{
        fontSize:14
      }
    }
});

module.exports = styles;
