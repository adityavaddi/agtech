import React, {PropTypes} from 'react';
import {Text, View, StyleSheet,Dimensions} from 'react-native';
const {height,width} = Dimensions.get('window')

import EStyleSheet from 'react-native-extended-stylesheet';

const BlockHeader = (props) => {
		return (
				<View style={styles.mainCont}>
					<View style={styles.headerCont}>
							<View style={styles.blockNameCont}>
									<Text style={styles.blockText}>Blocks</Text>
							</View>
							<View style={styles.seperatorCont}>
									<View style={styles.seperator}/>
							</View>
							<View style={styles.countCont}>
									<Text style={styles.countText}>{props.blocksCount}</Text>
							</View>
					</View>
				</View>
		);
};


var styles = EStyleSheet.create({
    $imageDim : height/6,
    $fontSize : height/5,
    mainCont: {
      backgroundColor:'white',
    },
    headerCont: {
			width:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#F5F5F5',
      height:'8%',
			flexDirection:'row'
    },
		blockNameCont:{
			height:'8%',
			flex:3,
			alignItems:'flex-end',
      justifyContent:'center',
			//backgroundColor:'red'
		},
		blockText:{
			fontSize:20,
			fontFamily:'AvenirNext-Bold',
			//color:'#22B05C'
		},
		seperatorCont:{
			height:'8%',
			flex:1,
			alignItems:'center',
			justifyContent:'center',
			//backgroundColor:'blue'
		},
		seperator:{
			height:'4%',
			width: 2,
			backgroundColor:'lightgrey'
		},
		countCont:{
			height:'8%',
			flex:10,
      justifyContent:'center',
			//backgroundColor:'yellow'
		},
		countText:{
			fontSize:20,
			fontFamily:'AvenirNext-Bold',
			color:'#22B05C'
		}

})

export default BlockHeader;
