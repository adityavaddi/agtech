import React, { Component } from 'react';
import { View,Dimensions,ScrollView } from 'react-native';

import BlockRow from '../list-row/BlockRow';
import BlockHeader from './BlockHeader';
var {height,width} = Dimensions.get('window')
import {actionPushBlocksProperty} from '../../constants/actionRoutes';

// @TODO Pass Actual Blocks Props, Until the actual props are passed, props variable is used
// var dummyProps = []
// for(var i = 1; i < 11; i++){
//   dummyProps.push({
//     "name": "Block A" + i,
//     "attributes": [
//       {
//         "name": "DEVICES",
//         "value": 10 * i
//       },
//       {
//         "name": "ROW",
//         "value": 2 * i
//       }
//     ]
//   })
// }

  deviceOnPress = (selectedBlock,props) => {
    //console.log("props on press for block::akhil",selectedBlock,props);
    // This Method Triggers when a user press on a one of the Block row,
    // the argument is the Block on which onPress was made
    var data = {
      actionType : 'edit',
      selectedBlock:selectedBlock,
      selectedAccount:props.deletedObj.selectedAccount
    }
    actionPushBlocksProperty.data  = data;
    actionPushBlocksProperty.route.title = selectedBlock.name;
    props._handleNavigate(actionPushBlocksProperty);

  }

  blockOnSwipeDelete = (deletedBlock,props) => {
    //console.log("block on swipe delete",deletedBlock,selectedAccount);
    // This Method Triggers when a user press on the Delete Option on the PopUp,
    // the argument is the Block on which swipe to delete had Pressed
    props.blockOnSwipeDelete(deletedBlock,props.deletedObj.selectedAccount)
  }

BlocksListHome = (props) => {
  // Using dummyProps Until the actual props are passed, props variable is used;
  //console.log("the props in block list home by akhil::",props);
  return(
    <ScrollView style={{marginTop:height/12}}>
        <BlockHeader blocksCount = {props.deletedObj.blocksList.length} {...props}/>
        {
           props.deletedObj.blocksList.map((eachBlock,i)=>{
            return <BlockRow {...props}
                      block={eachBlock}
                      onPress = {()=>{this.deviceOnPress(eachBlock,props)}}
                      onSwipe = {()=>{this.blockOnSwipeDelete(eachBlock,props)}}
                      key={i}/>
          })
        }
    </ScrollView>
  )
}

export default BlocksListHome
