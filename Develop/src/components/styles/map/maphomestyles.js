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
	image: {
		width:deviceWidth/5,
		height:deviceHeight/9
	},
	locationview: {
		position:'absolute',
		left:'2%',
		top:deviceHeight/10,
		zIndex:2
	},
	location: {
		width:deviceWidth/7,
		height:deviceHeight/12
	},
	zoomin: {
		position:'absolute',
		right:'2%',
		bottom:deviceHeight/8,
		zIndex:2
	},
	zoomout: {
		position:'absolute',
		right:'2%',
		bottom:deviceHeight/50,
		zIndex:2
	},
	pan: {
		position:'absolute',
		right:'20%',
		bottom:deviceHeight/50,
		zIndex:2
	},
	draw: {
		position:'absolute',
		left:'2%',
		bottom:deviceHeight/50,
		zIndex:2
	},
	undo: {
		position:'absolute',
		left:'20%',
		bottom:deviceHeight/50,
		zIndex:2
	},

});

module.exports = styles;
