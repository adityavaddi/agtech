import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    usericon:{
        '@media ios': {
            marginLeft: 15
        },
        '@media android': {
            marginLeft: 10,
            marginTop: 10
        }
    },
    rightMenu : {
        '@media ios': {
            marginRight:20,
            marginTop:10
        },
       '@media android': {
            marginRight: 20,
            marginTop: 15
       }
    },
    leftMenu : {
        '@media ios': {
            marginLeft:50,
            marginTop:10
        },
       '@media android': {
            marginRight: 20,
            marginTop: 15
       }
    },
    leftcont: {
      '@media android':{
          marginTop:'2%'
      }
    },
    arrowcont:{
      '@media android': {
        marginTop:'1%'
      }
    },
    navigationHeader: {
        backgroundColor: 'rgb(34,176,92)',
        height: 60,

    },
    rightMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginRight: '2%'
    },
    leftMenu: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: '2%',

    },
    leftRightMenuText: {
      color: '#FFFFFF',
      fontSize:17
    }
});
