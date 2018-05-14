
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/blocks/proObjectiveStyles';
var switchON = require('../../../icons/icon-radio-on.png');
var switchOFF = require('../../../icons/icon-radio-off.png');
var DismissKeyboard = require('dismissKeyboard');
import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

class ProObjectives extends Component {

  constructor(props) {
  super(props);
  this.state = {
    others: '',
    premiumRedWine: false,
    redFruityWine:false,
    whiteWine:false,
    youngVineyard:false,
    showLoading: ''
  };
}

componentDidMount(){
      // this.setState({
      //   premiumRedWine:this.premiumRedWine,
      //   redFruityWine:this.redFruityWine,
      //   whiteWine:this.whiteWine,
      //   youngVineyard:this.youngVineyard
      // });
    }

componentWillMount(){
  if(this.props.actionType === 'edit'){
    this.setState({
      others : " ",
      premiumRedWine :  this.props.blockData.measuredEntityObjectives!==undefined?this.props.blockData.measuredEntityObjectives[0].value:" ",
      whiteWine : this.props.blockData.measuredEntityObjectives!==undefined?this.props.blockData.measuredEntityObjectives[1].value:" ",
      redFruityWine : this.props.blockData.measuredEntityObjectives!==undefined?this.props.blockData.measuredEntityObjectives[2].value:" ",
      youngVineyard : this.props.blockData.measuredEntityObjectives!==undefined?this.props.blockData.measuredEntityObjectives[3].value:" ",
    })
  }
}

  saveBlockDetailsInfo(){
    var dataArray = []
    var data = {
      others: this.state.others,
      premiumRedWine: this.state.premiumRedWine,
      redFruityWine:this.state.redFruityWine,
      whiteWine:this.state.whiteWine,
      youngVineyard:this.state.youngVineyard,
    }
    dataArray.push({name:"premiumRedWines",value:data.premiumRedWine})
    dataArray.push({name:"whiteWines",value:data.whiteWine})
    dataArray.push({name:"fruityWines",value:data.redFruityWine})
    dataArray.push({name:"youngVineyard",value:data.youngVineyard})
    //console.log('Saving .. ProObjectives::: ',dataArray)
    if(this.props.actionType == 'edit')
    {
      this.setState({showLoading : 'start'});
      this.props.updateProductionObjInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }
    else{
    this.setState({showLoading : 'start'});
    this.props.saveProductionObjInfo(dataArray,this.props.blockData,this.props.selectedAccount)
    }

  }



  _renderLoading(){
    //console.log("render loading this.props by akhil::",this.props);
    if((this.props.blockProdObject!=undefined) && (this.props.blockProdObject.isBlockProduction)){
          this.setState({showLoading : 'stop'});

          actionPushBlocksProperty.route.blockproductionSaved = true ;
          actionPushBlocksProperty.data = this.props.blockProdObject.selectedAccount;
            this.props._handleNavigate(actionPushBlocksProperty);
          }

      else if((this.props.updatedBlockProdObject!=undefined) && (this.props.updatedBlockProdObject.isUpdateBlockProduction)){
              this.setState({showLoading : 'stop'});


              actionPushBlocksProperty.data = this.props.updatedBlockProdObject.selectedAccount;
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
    console.log("this .props. Production Objectives by akhil::",this.props);
    if(this.state.showLoading === 'start'){
      return this._renderLoading();
    }

    return (
    <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
      <View style={styles.container}>
          <View style={styles.topCont}>
            <Text style={styles.topContstyles}>
              Production Objectives
            </Text>
          </View>

          <View style={styles.nameCont}>
              <Text style={styles.textstyles}>
                Premium Red Wine
              </Text>
              <View style={styles.arrow}>
                  <TouchableOpacity  onPress={()=> {this.setState({premiumRedWine:!this.state.premiumRedWine}) }} >
                    <Image style={styles.icon}
                        source={this.state.premiumRedWine == true?switchON:switchOFF} />
                  </TouchableOpacity>
              </View>
           </View>

           <View style={styles.seperator}/>

           <View style={styles.nameCont}>
               <Text style={styles.textstyles}>
                  Red Fruity Wine
               </Text>
               <View style={styles.arrow}>
                 <TouchableOpacity  onPress={()=> {this.setState({redFruityWine:!this.state.redFruityWine}) }} >
                   <Image style={styles.icon}
                       source={this.state.redFruityWine == true?switchON:switchOFF} />
                 </TouchableOpacity>
               </View>
            </View>

            <View style={styles.seperator}/>

            <View style={styles.nameCont}>
                <Text style={styles.textstyles}>
                  White Wine
                </Text>
                <View style={styles.arrow}>
                  <TouchableOpacity  onPress={()=> {this.setState({whiteWine:!this.state.whiteWine}) }} >
                    <Image style={styles.icon}
                        source={this.state.whiteWine == true?switchON:switchOFF} />
                  </TouchableOpacity>
                </View>
             </View>

             <View style={styles.seperator}/>

             <View style={styles.nameCont}>
                 <Text style={styles.textstyles}>
                   Young Vineyard
                 </Text>
                 <View style={styles.arrow}>
                   <TouchableOpacity  onPress={()=> {this.setState({youngVineyard:!this.state.youngVineyard}) }} >
                     <Image style={styles.icon}
                         source={this.state.youngVineyard == true?switchON:switchOFF} />
                   </TouchableOpacity>
                 </View>
              </View>

              <View style={styles.seperator}/>

              <View>
                 <View style={styles.rowCont}>
                     <View>
                            <TextInput
                              style={styles.lstcont}
                              placeholder='OTHER'
                              onChangeText={(canopyHeight) => this.setState({canopyHeight})}
                              value = {this.state.canopyHeight}
                              underlineColorAndroid='transparent'
                              clearButtonMode = { 'while-editing'}
                              />

                           <View style={styles.line}/>
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

export default ProObjectives;
