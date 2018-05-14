

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  View,
  Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');
import styles from '../styles/blocks/blockparameterStyles';
import EStyleSheet from 'react-native-extended-stylesheet';
var DismissKeyboard = require('dismissKeyboard');
import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

class BlockParameter extends Component {

  constructor(props){
      super(props);
      this.state = {
          area : '',
          grapeVariety :  '',
          rowOrientation :  '',
          rowSpacing :  '',
          interRowSpacing :  '',
          dripEmitterSpacing :  '',
          dripEmitterFlowRate :  '',
          showLoading: ''
      };
  }
  componentWillMount(){
    if(this.props.actionType === 'edit'){
      this.setState({
        area : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[0].value:" ",
        grapeVariety :  this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[1].value:" ",
        rowOrientation : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[2].value:" ",
        rowSpacing : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[3].value:" ",
        interRowSpacing : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[4].value:" ",
        dripEmitterSpacing : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[5].value:" ",
        dripEmitterFlowRate : this.props.blockData.measuredEntityProperties!==undefined?this.props.blockData.measuredEntityProperties[6].value:" "
      })
    }
  }

  saveBlockDetailsInfo(){
    var dataArray = []
    var data = {
      area : this.state.area,
      grapeVariety :  this.state.grapeVariety,
      rowOrientation :  this.state.rowOrientation,
      rowSpacing :  this.state.rowSpacing,
      interRowSpacing :  this.state.interRowSpacing,
      dripEmitterSpacing :  this.state.dripEmitterSpacing,
      dripEmitterFlowRate :  this.state.dripEmitterFlowRate,
    }

    //console.log('Saving ...blockParameter::: ',data)
    dataArray.push({name:"Area(Acres)",value:data.area})
    dataArray.push({name:"GrapeVariety",value:data.grapeVariety})
    dataArray.push({name:"Row Orientation",value:data.rowOrientation})
    dataArray.push({name:"Row Spacing(ft)",value:data.rowSpacing})
    dataArray.push({name:"Inter Row Spacing(ft)",value:data.interRowSpacing})
    dataArray.push({name:"Drip emitter Spacing",value:data.dripEmitterSpacing})
    dataArray.push({name:"Drip emitter flow rate",value:data.dripEmitterFlowRate})

    //console.log('Saving ...blockParameter Array::: ',dataArray)

    if(this.props.actionType == 'edit')
    {
      this.setState({showLoading : 'start'});
      this.props.updateBlockParametersInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }
    else{
      this.setState({showLoading : 'start'});
      this.props.saveBlockParametersInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }
  }


  _renderLoading(){
    //console.log("render loading this.props by akhil::",this.props);
    if((this.props.blockObject!=undefined) && (this.props.blockObject.isBlockParameter)){
          this.setState({showLoading : 'stop'});

          actionPushBlocksProperty.route.blockparammeterSaved = true ;
          actionPushBlocksProperty.data = this.props.blockObject.selectedAccount;
            this.props._handleNavigate(actionPushBlocksProperty);
          }

          else if((this.props.updatedBlockObject!=undefined) && (this.props.updatedBlockObject.isUpdateBlockParameter)){
                  this.setState({showLoading : 'stop'});

                  //actionPushBlocksProperty.route.blockparammeterSaved = true ;
                  actionPushBlocksProperty.data = this.props.updatedBlockObject.selectedAccount;
                    this.props._handleNavigate(actionPushBlocksProperty);
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

    //console.log('Rendering ...blockParameter by akhil::: ',this.props)
    if(this.state.showLoading === 'start'){
      return this._renderLoading();
    }

    return (
    <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
      <View style={styles.container}>

            <View style={styles.topCont1}>
              <Text style={styles.topContstyles}>
                Block Parameters
              </Text>
            </View>

            <View>
               <View style={styles.rowCont}>
                   <View>
                      <Text style={styles.topCont}> AREA(ACRES) </Text>
                        <TextInput
                          style={styles.subcont}
                          onChangeText={(area) => this.setState({area})}
                          value = {this.state.area}
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
                      <Text style={styles.topCont}> GRAPE VARIETY </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(grapeVariety) => this.setState({grapeVariety})}
                        value = {this.state.grapeVariety}
                        underlineColorAndroid='transparent'
                        clearButtonMode = { 'while-editing'}
                        />
                        <View style={styles.seperator}/>
                   </View>
               </View>
            </View>

            <View style={styles.nameCont}>
               <View style={styles.rowCont}>
                   <View>
                      <Text style={styles.topCont}> ROW ORIENTATION </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(rowOrientation) => this.setState({rowOrientation})}
                        value = {this.state.rowOrientation}
                        underlineColorAndroid='transparent'
                        clearButtonMode = { 'while-editing'}
                        />
                        <View style={styles.seperator}/>
                   </View>

                     <View style={styles.rowimage}>
                        <Image style={styles.arrow} source = {require('../../../icons/arrow-down-drop.png')}/>
                     </View>
               </View>
            </View>

            <View>
               <View style={styles.rowCont}>
                   <View>
                      <Text style={styles.topCont}> ROW SPACING (FEET) </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(rowSpacing) => this.setState({rowSpacing})}
                        value = {this.state.rowSpacing}
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
                      <Text style={styles.topCont}> INTER-ROW SPACING (FEET) </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(interRowSpacing) => this.setState({interRowSpacing})}
                        value = {this.state.interRowSpacing}
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
                      <Text style={styles.topCont}> DRIP EMITTERS SPACING (FEET) </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(dripEmitterSpacing) => this.setState({dripEmitterSpacing})}
                        value = {this.state.dripEmitterSpacing}
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
                      <Text style={styles.topCont}> DRIP EMITTER FLOW RATE </Text>
                      <TextInput
                        style={styles.subcont}
                        onChangeText={(dripEmitterFlowRate) => this.setState({dripEmitterFlowRate})}
                        value = {this.state.dripEmitterFlowRate}
                        underlineColorAndroid='transparent'
                        clearButtonMode = { 'while-editing'}
                        />
                        <View style={styles.seperator}/>
                   </View>
               </View>
            </View>

      </View>
      </TouchableWithoutFeedback>
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

export default BlockParameter;
