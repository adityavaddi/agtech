import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './styles/vineyardDetail';
import {actionSavedVineyard,actionShowMap} from '../constants/actionRoutes';
class VineyardDetail extends Component {
  constructor(props) {
      super(props);
      this.state={
          vineyardName : '',
          vineyardDesc : '',
          refresh: false,
          showLoading: ''
        };
  }
  saveNewVineyardDetail(){

       var data = {
        VineyardCoordinates:this.props.VineCoordinates,
        VineName:this.state.vineyardName,
        VineDesc:this.state.vineyardDesc,
        selectedAccount: this.props.selectedAccount
       }
          //    var vineyardModel= {VineyardCoordinates:this.props.selectedAccount.ranch.measuredEntity.measuredEntityBoundaries, VineName:this.state.vineyardName, VineDesc:this.state.vineyardDesc, accountnumber:this.props.selectedAccount.accountNumber, renderMode:actionShowMap.route.renderMode};
    //this.props.selectedAccount.ranch.measuredEntity={VineyardCoordinates:this.props.selectedAccount.ranch.measuredEntityBoundaries, VineName:this.state.vineyardName, VineDesc:this.state.vineyardDesc, accountnumber:this.props.selectedAccount.accountNumber, renderMode:actionShowMap.route.renderMode}
//console.log("selectedAccount at this point is &&&&&&&&&&", this.props);
this.setState({showLoading : 'start'});
   this.props.saveVineyard(data);

  }
  _renderLoading(){
      if(this.props.isSuccessfulVineyard ){
        actionShowMap.route.renderMode ='savedVineyard';
        actionShowMap.selectedAccount= this.props.polygonPayload;
      this.props._handleNavigate(actionShowMap);
            this.setState({showLoading : 'stop'});
    }

      return(
        <View style={styles.spinnerview} ref="spinnerView">
          <Image
            style={{height:50,width:50}}
            source={require('../../icons/loading.gif')}
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
         <View style={styles.designimage}>
             <Image source = {require('../../icons/app-logo.png')}/>
               <View style={styles.photoicon}>
               <TouchableHighlight onPress={()=>{
            }}>
                 <Image source = {require('../../icons/photo.png')} />
                </TouchableHighlight>
               </View>
         </View>
               <View style={styles.nameCont}>
                  <Text style={styles.userInput}> VINEYARD NAME </Text>
                  <TextInput
                         style={styles.userInputText}
                         placeholder='Vineyard Name'
                         value={this.state.vineyardName}
                         onChangeText = {(vineyardName)=>{this.setState({vineyardName}); }}
                         autoCapitalize='none'
                         autoCorrect={false}
                         placeholderTextColor='#d0d0e2'
                       />
               </View>
               <View style={styles.seperator}/>
               <View>
                   <Text style={styles.userInput}> DESCRIPTION </Text>
                   <TextInput
                          style={styles.userInputText}
                          placeholder='DESCRIPTION'
                          value={this.state.vineyardDetail}
                          onChangeText = {(vineyardDesc)=>{this.setState({vineyardDesc}); }}
                          autoCapitalize='none'
                          autoCorrect={false}
                          placeholderTextColor='#d0d0e2'
                          numberOfLines={10}
                     />
               </View>
               <View style={styles.seperator}/>

       </View>
     </View>
    );
  }
}
export default VineyardDetail;
