
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

var { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/blocks/soilinfoStyles';

import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

var DismissKeyboard = require('dismissKeyboard');


class SoilInfo extends Component {

  constructor(props) {
  super(props);
  this.state = {
    clay: '',
    sand: '',
    stone:'',
    claySoilType24:'',
    sandSoilType24:'',
    stoneSoilType24:'',
    claySoilType36:'',
    sandSoilType36:'',
    stoneSoilType36: '',
    showLoading: ''
  };
}

componentWillMount(){
  if(this.props.actionType === 'edit'){
    this.setState({
      clay : this.props.blockData.information!==undefined?this.props.blockData.information[0].clay:" ",
      sand :  this.props.blockData.information!==undefined?this.props.blockData.information[0].sand:" ",
      stone : this.props.blockData.information!==undefined?this.props.blockData.information[0].stone:" ",
      claySoilType24 : this.props.blockData.information!==undefined?this.props.blockData.information[1].clay:" ",
      sandSoilType24 : this.props.blockData.information!==undefined?this.props.blockData.information[1].sand:" ",
      stoneSoilType24 : this.props.blockData.information!==undefined?this.props.blockData.information[1].stone:" ",
      claySoilType36 : this.props.blockData.information!==undefined?this.props.blockData.information[2].clay:" ",
      sandSoilType36 : this.props.blockData.information!==undefined?this.props.blockData.information[2].sand:" ",
      stoneSoilType36 : this.props.blockData.information!==undefined?this.props.blockData.information[2].stone:" ",
    })
  }
}


  saveBlockDetailsInfo(){
    var dataArray = []
    var data ={
      clay: this.state.clay,
      sand:  this.state.sand,
      stone: this.state.stone,
      claySoilType24: this.state.claySoilType24,
      sandSoilType24: this.state.sandSoilType24,
      stoneSoilType24: this.state.stoneSoilType24,
      claySoilType36: this.state.claySoilType36,
      sandSoilType36: this.state.sandSoilType36,
      stoneSoilType36:  this.state.stoneSoilType36,
    }
    //console.log('Saving .. SoilInfo::: ',data)
    dataArray.push({soilAt:"1",clay:data.clay,sand:data.sand,stone:data.stone})
    dataArray.push({soilAt:"2",clay:data.claySoilType24,sand:data.sandSoilType24,stone:data.stoneSoilType24})
    dataArray.push({soilAt:"3",clay:data.claySoilType36,sand:data.sandSoilType36,stone:data.stoneSoilType36})
    //console.log("data array at soil info by akhil::",dataArray);
    if(this.props.actionType == 'edit')
    {
      this.setState({showLoading : 'start'});
      this.props.updateSoilInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }
    else{
      this.setState({showLoading : 'start'});
      this.props.saveSoilInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }

  }


  _renderLoading(){
  //  console.log("render loading this.props by akhil::",this.props);
    if((this.props.blockSoilInfoObject!=undefined) && (this.props.blockSoilInfoObject.isBlockSoilInfo)){
          this.setState({showLoading : 'stop'});
          actionPushBlocksProperty.route.blockSoilSaved = true ;
          actionPushBlocksProperty.data = this.props.blockSoilInfoObject.selectedAccount;
            this.props._handleNavigate(actionPushBlocksProperty);
          }

          else if((this.props.updatedBlockSoilObject!=undefined) && (this.props.updatedBlockSoilObject.isUpdateBlockSoilInfo)){
                  this.setState({showLoading : 'stop'});
                  actionPushBlocksProperty.data = this.props.updatedBlockSoilObject.selectedAccount;
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
    //  console.log('Rendering ...Soil::: ',this.props.blockData)
      if(this.state.showLoading === 'start'){
        return this._renderLoading();
      }

    return (
    <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
      <View style={styles.container}>
          <View style={styles.topCont}>
            <Text style={styles.topContstyles}>
              Soil Information
            </Text>
          </View>

          <View style={styles.maincont}>
            <Text style={styles.maincontstyles}> SOIL TYPE(AT 12'') </Text>
          </View>
          <View style={styles.nameCont}>
              <Text style={styles.textstyles}> Clay </Text>
              <View style={styles.value}>
                <TextInput
                  style={styles.rightcont}
                  placeholder='37%'
                  underlineColorAndroid='transparent'
                  onChangeText={(clay) => this.setState({clay})}
                  value = {this.state.clay}
                  clearButtonMode = { 'while-editing'}
               />
             </View>
           </View>
           <View style={styles.line}/>

           <View style={styles.nameCont}>
               <Text style={styles.textstyles}> Sand </Text>
               <View style={styles.value}>
                 <TextInput
                   style={styles.rightcont}
                   placeholder='35%'
                   underlineColorAndroid='transparent'
                   onChangeText={(sand) => this.setState({sand})}
                   value = {this.state.sand}
                   clearButtonMode = { 'while-editing'}
                />
              </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.nameCont}>
                <Text style={styles.textstyles}> Stone </Text>
                <View style={styles.value}>
                  <TextInput
                    style={styles.rightcont}
                    placeholder='28%'
                    underlineColorAndroid='transparent'
                    onChangeText={(stone) => this.setState({stone})}
                    value = {this.state.stone}
                    clearButtonMode = { 'while-editing'}
                 />
               </View>
             </View>
             <View style={styles.line}/>

             <View style={styles.maincont}>
               <Text style={styles.maincontstyles}> SOIL TYPE(AT 24'') </Text>
             </View>
             <View style={styles.nameCont}>
                 <Text style={styles.textstyles}> Clay </Text>
                 <View style={styles.value}>
                   <TextInput
                     style={styles.rightcont}
                     placeholder='37%'
                     underlineColorAndroid='transparent'
                     onChangeText={(claySoilType24) => this.setState({claySoilType24})}
                     value = {this.state.claySoilType24}
                     clearButtonMode = { 'while-editing'}
                  />
                </View>
              </View>
              <View style={styles.line}/>

              <View style={styles.nameCont}>
                  <Text style={styles.textstyles}> Sand </Text>
                  <View style={styles.value}>
                    <TextInput
                      style={styles.rightcont}
                      placeholder='35%'
                      underlineColorAndroid='transparent'
                      onChangeText={(sandSoilType24) => this.setState({sandSoilType24})}
                      value = {this.state.sandSoilType24}
                      clearButtonMode = { 'while-editing'}
                   />
                 </View>
               </View>
               <View style={styles.line}/>

               <View style={styles.nameCont}>
                   <Text style={styles.textstyles}> Stone </Text>
                   <View style={styles.value}>
                     <TextInput
                       style={styles.rightcont}
                       placeholder='28%'
                       underlineColorAndroid='transparent'
                       onChangeText={(stoneSoilType24) => this.setState({stoneSoilType24})}
                       value = {this.state.stoneSoilType24}
                       clearButtonMode = { 'while-editing'}
                    />
                  </View>
                </View>
                <View style={styles.line}/>

                <View style={styles.maincont}>
                  <Text style={styles.maincontstyles}> SOIL TYPE(AT 36'') </Text>
                </View>
                <View style={styles.nameCont}>
                    <Text style={styles.textstyles}> Clay </Text>
                      <View style={styles.value}>
                        <TextInput
                          style={styles.rightcont}
                          placeholder='37%'
                          underlineColorAndroid='transparent'
                          onChangeText={(claySoilType36) => this.setState({claySoilType36})}
                          value = {this.state.claySoilType36}
                          clearButtonMode = { 'while-editing'}
                       />
                     </View>
                </View>
                 <View style={styles.line}/>

                 <View style={styles.nameCont}>
                     <Text style={styles.textstyles}> Sand </Text>
                     <View style={styles.value}>
                       <TextInput
                         style={styles.rightcont}
                         underlineColorAndroid='transparent'
                         placeholder='35%'
                         onChangeText={(sandSoilType36) => this.setState({sandSoilType36})}
                         value = {this.state.sandSoilType36}
                         clearButtonMode = { 'while-editing'}
                      />
                    </View>
                  </View>
                  <View style={styles.line}/>

                  <View style={styles.nameCont}>
                      <Text style={styles.textstyles}> Stone </Text>
                      <View style={styles.value}>
                        <TextInput
                          style={styles.rightcont}
                          underlineColorAndroid='transparent'
                          placeholder='28%'
                          onChangeText={(stoneSoilType36) => this.setState({stoneSoilType36})}
                          value = {this.state.stoneSoilType36}
                          clearButtonMode = { 'while-editing'}
                       />
                     </View>
                   </View>
                   <View style={styles.line}/>

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

export default SoilInfo;
