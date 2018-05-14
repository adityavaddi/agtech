
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/blocks/blockdetailStyles';
import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

class BlockInfo extends Component {
  constructor(props){
      super(props);
      this.state = {
          blockName : '',
          description :  '',
          showLoading: ''
      };
  }
  saveNewBlockInfo(){
    var data = {
      actionType : 'new',
      selectedBlock:{
        blockName: this.state.blockName,
        description: this.state.description,
      },
      blockCoordinates: this.props.blockCoordinates,
      selectedAccount: this.props.selectedAccount
    }
    this.setState({showLoading : 'start'});
    this.props.saveBlockMap(data);

    // actionPushBlocksProperty.data  = data;
    // actionPushBlocksProperty.route.title = this.state.blockName;
    //  this.props._handleNavigate(actionPushBlocksProperty);
    // actionShowMap.data = data;
    // actionShowMap.route.renderMode ='savedBlock';
    //  this.props._handleNavigate(actionShowMap);
  }

  _renderLoading(){

    if((this.props.blockObject!=undefined) && (this.props.blockObject.isBlockSuccessful)){
          this.setState({showLoading : 'stop'});
          actionPushBlocksProperty.route.blockID = this.props.blockObject.blockID;
          actionPushBlocksProperty.data = this.props.blockObject.selectedAccount;
            this.props._handleNavigate(actionPushBlocksProperty);
          }

      else{

      }
      //  return <View/>;
      return(
        <View style={spinnerStyles.spinnerview} ref="spinnerView">
          <Image
            style={{height:50,width:50}}
            source={require('../../../icons/loading.gif')}
            />
        </View>
      );
  }


  render() {
      if(this.state.showLoading === 'start'){
        return this._renderLoading();
      }

    return (
      <View style={styles.container}>
       <View>

         <View style={styles.blockimg}>
             <Image style={styles.imagesize} source = {require('../../../icons/but-blocks-off.png')}/>
               <View style={styles.photoicon}>
                 <Image style={styles.photosize} source = {require('../../../icons/icon-camera.png')}/>
               </View>
         </View>

            <View style={styles.mainCont}>
               <View style={styles.rowCont}>
                   <View>
                      <Text style={styles.topCont}> BLOCK NAME </Text>
                          <TextInput
                            style={styles.subcont}
                            onChangeText={(blockName) => this.setState({blockName})}
                            value = {this.state.blockName}
                            underlineColorAndroid='transparent'
                            clearButtonMode = { 'while-editing'}
                            />
                         <View style={styles.seperator}/>
                   </View>
               </View>
            </View>

            <View>
               <View style={styles.rowCont}>
                   <View>
                      <Text style={styles.topCont}> DESCRIPTION </Text>
                        <TextInput
                          style={styles.subcont}
                          onChangeText={(description) => this.setState({description})}
                          value = {this.state.description}
                          underlineColorAndroid='transparent'
                          clearButtonMode = { 'while-editing'}
                          />

                         <View style={styles.seperator}/>
                   </View>
               </View>
            </View>

       </View>
     </View>
    );
  }
}

var spinnerStyles = EStyleSheet.create({
  spinnerview: {
    flex:1,
    width:width,
    height:height,
    zIndex:99,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
  }

})

export default BlockInfo;
