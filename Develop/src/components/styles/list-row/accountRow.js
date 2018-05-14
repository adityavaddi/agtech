import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({  container:{
		flex:1,
		paddingTop:'1%',
    paddingLeft:'3%',
		height:'15%',
  },
	contentView:{
		flex:1,
		flexDirection: 'row',
	},
  texttitle:{
    fontSize:10,
		flex:1,
		color:'gray',
  },
  textdescription:{
    fontSize:12,
		flex:2,
		color:'#333333'
  },
	row: {
		flexDirection: 'row',
	},
  devicename:{
    fontSize:17,
		paddingLeft:5,
		fontWeight:'bold',
  },
	headerImage:{
		height:50,
		width:50,

	},
  titleRow: {
		flex:1,
		flexDirection: 'row',
		paddingLeft:'1%',
		marginTop:'1%'
	},
	descriptionRow: {
		flex:4,
		flexDirection: 'row',
		paddingLeft:'1%',
	},

  line:{
    height: 1,
    backgroundColor:'gray'
  },
	rightArrow:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}
})
