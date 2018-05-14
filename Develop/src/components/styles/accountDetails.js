import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

var {
  height: deviceHeight,
  width:deviceWidth
} = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(245,245,245,0.999)'
    //backgroundColor:'#f5f5f5'
  },
  accountdetails:{
    flexDirection:'row',
    justifyContent:'center'
  },
  accountname: {
    fontSize:14,
    color: '#999999',
    marginTop:'4%'
  },
  profilesize:{
    height:100,
    width:100,
    //zIndex: 1
    //height:deviceHeight/4.5,
    //width:deviceWidth/2.5
  },
  accountnumber: {
    marginLeft:'3%',
    fontSize:20,
    marginTop:'3%',
    color:'#333333'
  },
  accountfamily: {
    fontSize: 22,
    color:'#333333',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center'
  },
  profileimage:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop:'10%'
  },
  imagesrow:{
    flexDirection:'row',
    marginLeft:'6%',
    marginTop:'5%'
  },
  accountinfo:{
    backgroundColor:'#ffffff'
  },
  imageview:{
    flex:2,
  },
  mapview: {
    marginTop:'1%',
    color:'#999999',
    marginLeft:'3%',
    fontWeight:'600'
  },
  textview: {
    marginTop:'1%',
    color:'#999999',
    marginLeft:'1%',
    fontWeight:'600'
  },
  line:{
    marginTop:'4%',
    backgroundColor:'#f5f5f5'
  },
  rowseperator:{
    height: 1,
    marginTop:'2%',
    backgroundColor:'#f5f5f5'
  },
  contactdetails:{
    color:'#999999',
    fontSize:13
  },
  listItem: {
    flexDirection: 'row',
    alignItems:'center'
  },
  inforow: {
    flex: 4,
    flexDirection:'row',
    alignItems: 'center',
    marginTop:'2%'
  },
  imageIconView: {
    flex:3,
    marginLeft:'5%'
  },
  addressview: {
    flex:4
 },
  accountcontactview: {
    flex:6
  },
  rowdatadevice: {
    fontSize: 15,
    fontWeight:'bold',
    color:'#333333'
  },
  locationView: {
    flex:1,
    alignItems:'center'
  },
});

module.exports = styles;
