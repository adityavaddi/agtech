import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#12b158'
  },
  image:{
    alignItems: 'center',
    marginTop:'8%'
  },
  menuItemText:{
    color:'white',
    fontSize: 20,
    marginLeft: '3%'
  },
  signoutText:{
    color:'white',
    fontSize: 20,
    fontWeight:'700'
  },
  profilesize:{
    width:width/5,
    height:height/9
  },
  ranchdesign:{
    flexDirection: 'row',
    marginLeft:'10%',
    marginTop:'6%',
  },
  rowdesign:{
    flexDirection: 'row',
    marginLeft:'10%',
		alignItems:'center',
  },
  count:{
    fontWeight:'800',
    color:'#12b158',
    marginTop:'1%',
    marginLeft:'3%',
    width:'3%'
  },
  line:{
    height: 1,
    marginTop:'3%',
    marginLeft:'5%',
		marginRight:'5%',
		marginBottom:'3%',
    width:'70%',
    backgroundColor:'rgba(255,255,255,0.5)',
  },
	lastrowdesign:{
 		marginTop:'15%',
    justifyContent:'center',
    alignItems:'center',
		height:'8%',
		backgroundColor:'rgba(0,0,0,0.5)'
	},
  profileName:{
    color:'white',
    fontSize:22,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:'2%',
    fontWeight: '700',
  }

});

module.exports = styles;
