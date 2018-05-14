import EStyleSheet from 'react-native-extended-stylesheet';
import { Image } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    marginTop: 10
  },
  listItem: {
    flexDirection: 'row',
    height: '10%',
    alignItems:'center',
    backgroundColor: '#ffffff',
    // shadowColor:'#000000',
    // shadowOffset:{width: 0, height: 1},
    // shadowRadius:3,
    // shadowOpacity:0.2,
  },
  seperator: {
    height:2,
    width:'100%',
    backgroundColor:'#ecefef',
  },
  imageIconView: {
    flex:1,
    alignItems:'center'
  },
  deviceNameView: {
      flex:4
  },
  rowdatadevice: {
    fontSize: 19,
    fontWeight: '600'
  },
  toggleView: {
    flex:1,
    alignItems:'center'
  },
  deviceON: {
    width: '10%',
    height: '10%',
    resizeMode: Image.resizeMode.contain,
    shadowColor:'#000000',
    shadowOffset:{width: 0, height: 1},
    shadowRadius:3,
    shadowOpacity:0.2,
    //borderRadius: 50
  },
  clickableView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line:{
    height: 1,
    backgroundColor:'#f5f5f5'
  }
})

EStyleSheet.build(styles);

module.exports = styles;
