
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import styles from '../styles/blocks/blockStyles';
import {actionPushBlockDetails, actionShowMap} from '../../constants/actionRoutes';

class BlocksProperty extends Component {
  constructor(props) {
      super(props);

  }
  componentDidMount()
  {
    //console.log("we are in componentDidMount");
  //this._handleBackKey () ;
  }

  _handleBackKey () {

      for(var i=0;i<this.props.navigationState.routes.length;i++){
        //console.log("_handleBackKey ", this.props.navigationState.routes[i].key);
        if('pushBlockMap'==this.props.navigationState.routes[i].key || 'displayMap'==this.props.navigationState.routes[i].key || 'displayMap1'==this.props.navigationState.routes[i].key ||'pushBlockDetails'==this.props.navigationState.routes[i].key){
          this.props.navigationState.routes.splice(i, 1);
        }
      }
    }

  saveNewBlockProperties(){
actionShowMap.selectedAccount= this.props.selectedAccount;
actionShowMap.route.renderMode ='savedBlock';
this.props._handleNavigate(actionShowMap);
  }
  render() {
    var ranch ;
    var tempBlockInfo;
    this._handleBackKey();
    //console.log('Blocks Property through edit:::  by akhil',this.props)
    if(this.props.actionType=='edit'){
      ranch = this.props.selectedAccount.ranch
      for(var key in ranch )
      {
        if(ranch[key].id == this.props.selectedBlock.id){
          tempBlockInfo = ranch[key];
        }
      }

    }
    else{
      ranch = this.props.selectedAccount.ranch
      for(var key in ranch )
      {
        if(ranch[key].id == this.props.blockID){
          tempBlockInfo = ranch[key];
        }
      }
    }
    return (
      <View style={styles.container}>
       <View>

         <View style={styles.designimage}>
             <Image style={styles.imagesize} source = {require('../../../icons/account-icon.png')}/>
               <View style={styles.photoicon}>
                 <Image style={styles.photosize} source = {require('../../../icons/icon-camera.png')}/>
               </View>
         </View>

          <View style={styles.seperator}/>
              <TouchableOpacity onPress={() => {
                actionPushBlockDetails.route.title = 'Block Parameter';

                var data = {
                  selectedblockType : 'blockParameter',
                  blockInfo:tempBlockInfo,
                  selectedAccount:this.props.selectedAccount,
                };

                actionPushBlockDetails.data = data;
                actionPushBlockDetails.actionType = 'edit';
                if(this.props.blockparammeterSaved == false){
                this.props._handleNavigate(actionPushBlockDetails)}}}>
                 <View style={styles.nameCont}>
                      <Text style={styles.textstyles}>
                        Block Parameters
                      </Text>
                    <View style={styles.arrow}>
                      <Image style={styles.arrowsize} source = {require('../../../icons/arrow-right-grey.png')}/>
                    </View>
                   </View>
              </TouchableOpacity>

               <View style={styles.seperator}/>


               <TouchableOpacity onPress={() => {
                 actionPushBlockDetails.route.title = 'Production Objectives';
                 var data ={
                   selectedblockType : 'proObjectives',
                   blockInfo:tempBlockInfo,
                   selectedAccount:this.props.selectedAccount
                 };

                 actionPushBlockDetails.data = data;
                 actionPushBlockDetails.actionType = 'edit';
                  if(this.props.blockproductionSaved == false){
                 this.props._handleNavigate(actionPushBlockDetails)}}}>
                 <View style={styles.nameCont}>
                    <Text style={styles.textstyles}>
                      Production Objectives
                    </Text>
                    <View style={styles.arrow}>
                      <Image style={styles.arrowsize} source = {require('../../../icons/arrow-right-grey.png')}/>
                    </View>
                 </View>
               </TouchableOpacity>

               <View style={styles.seperator}/>

               <TouchableOpacity onPress={() => {
                 actionPushBlockDetails.route.title = 'Soil Information';

                 var data ={
                   selectedblockType : 'soilInfo',
                   blockInfo:tempBlockInfo,
                   selectedAccount:this.props.selectedAccount
                 };

                  actionPushBlockDetails.data = data;
                  actionPushBlockDetails.actionType = 'edit';
                  if(this.props.blockSoilSaved == false){
                 this.props._handleNavigate(actionPushBlockDetails)}}}>
                 <View style={styles.nameCont}>
                    <Text style={styles.textstyles}>
                      Soil Information
                    </Text>
                    <View style={styles.arrow}>
                      <Image style={styles.arrowsize} source = {require('../../../icons/arrow-right-grey.png')}/>
                    </View>
                 </View>
               </TouchableOpacity>

               <View style={styles.seperator}/>

               <TouchableOpacity onPress={() => {
                 actionPushBlockDetails.route.title = 'Annual Variables';
                 var data ={
                   selectedblockType : 'annulaVariables',
                   blockInfo:tempBlockInfo,
                   selectedAccount:this.props.selectedAccount
                 };

                    actionPushBlockDetails.data = data;
                    actionPushBlockDetails.actionType = 'edit';
                    if(this.props.blockAnnualSaved == false){
                 this.props._handleNavigate(actionPushBlockDetails)}}}>
                 <View style={styles.nameCont}>
                    <Text style={styles.textstyles}>
                      Annual Variables
                    </Text>
                    <View style={styles.arrow}>
                      <Image style={styles.arrowsize} source = {require('../../../icons/arrow-right-grey.png')}/>
                    </View>
                 </View>
               </TouchableOpacity>

               <View style={styles.seperator}/>

               <TouchableOpacity onPress={() => {
                 actionPushBlockDetails.route.title = 'Key Dates';
                 var data ={
                   selectedblockType : 'keyDates',
                   blockInfo:tempBlockInfo,
                   selectedAccount:this.props.selectedAccount
                 };

                    actionPushBlockDetails.data = data;
                    actionPushBlockDetails.actionType = 'edit';
                    if(this.props.blockKeyDatesSaved == false){
                 this.props._handleNavigate(actionPushBlockDetails)}}}>
                 <View style={styles.nameCont}>
                    <Text style={styles.textstyles}>
                      Key Dates
                    </Text>
                    <View style={styles.arrow}>
                      <Image style={styles.arrowsize} source = {require('../../../icons/arrow-right-grey.png')}/>
                    </View>
                 </View>
               </TouchableOpacity>

               <View style={styles.seperator}/>

       </View>
     </View>
    );
  }
}

export default BlocksProperty;
