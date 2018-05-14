
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
var { height, width } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles/blocks/keydateStyles';
import DatePicker from './index.js';
import {actionPushBlocksProperty, actionShowMap} from '../../constants/actionRoutes';

class KeyDates extends Component {
    constructor(props) {
      super(props);
      this.state= {
        budburst:'',
        fullBloom:'',
        veraison:'',
        harvest:'',
        leafFall:'',
        showLoading: ''
      };
    }

    componentWillMount(){
      if(this.props.actionType === 'edit'){
        this.setState({
          budburst : this.props.blockData.keyDates!==undefined?this.props.blockData.keyDates[0].value:"",
          fullBloom :  this.props.blockData.keyDates!==undefined?this.props.blockData.keyDates[1].value:"",
          veraison : this.props.blockData.keyDates!==undefined?this.props.blockData.keyDates[2].value:"",
          harvest : this.props.blockData.keyDates!==undefined?this.props.blockData.keyDates[3].value:"",
          leafFall : this.props.blockData.keyDates!==undefined?this.props.blockData.keyDates[4].value:"",
        })
      }
    }

    saveBlockDetailsInfo(){
      var dataArray = [];
      var data ={
        budburst:this.state.budburst,
        fullBloom:this.state.fullBloom,
        veraison:this.state.veraison,
        harvest:this.state.harvest,
        leafFall:this.state.leafFall,
      }
      //console.log('Saving .. KeyDates::: ',data)
      dataArray.push({name:"budburst",value:data.budburst})
      dataArray.push({name:"Full Bloom",value:data.fullBloom})
      dataArray.push({name:"Veraison",value:data.veraison})
      dataArray.push({name:"Harvest",value:data.harvest})
      dataArray.push({name:"Leaf Fall",value:data.leafFall})

      if(this.props.actionType == 'edit'){
        this.setState({showLoading : 'start'});
        this.props.updateKeydatesInfo(dataArray,this.props.blockData,this.props.selectedAccount)
      }else{
        this.setState({showLoading : 'start'});
        this.props.saveKeydatesInfo(dataArray,this.props.blockData,this.props.selectedAccount)
      }
    }
    _renderLoading(){
      //console.log("render loading this.props by akhil::",this.props);
      if((this.props.blockKeyDatesObject!=undefined) && (this.props.blockKeyDatesObject.isBlockKeyDates)){
            this.setState({showLoading : 'stop'});

            actionPushBlocksProperty.route.blockKeyDatesSaved = true ;
            actionPushBlocksProperty.data = this.props.blockKeyDatesObject.selectedAccount;
              this.props._handleNavigate(actionPushBlocksProperty);
            }

            else if((this.props.updateBlockKeyDatesObject!=undefined) && (this.props.updateBlockKeyDatesObject.isUpdateBlockKeyDates)){
                    this.setState({showLoading : 'stop'});
                    actionPushBlocksProperty.data = this.props.updateBlockKeyDatesObject.selectedAccount;
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
    //console.log('Rendering ...Keydates::: ',this.props.blockData)
    if(this.state.showLoading === 'start'){
      return this._renderLoading();
    }
    return (
      <View style={styles.container}>

            <View style={styles.topCont}>
              <Text style={styles.topContstyles}>
                Key Dates
              </Text>
            </View>

            <View style={styles.maincont}>
              <Text style={styles.mainstyles}>
                BUDBURST
              </Text>
              <DatePicker
                style={styles.innertext}
                date={this.state.budburst}
                format="MM/DD/YYYY"
                //minDate="2017-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(budburst) => {this.setState({budburst});}}
              />
            </View>

            <View style={styles.line}/>

            <View style={styles.maincont}>
              <Text style={styles.mainstyles}>
                FULL BLOOM
              </Text>
              <DatePicker
                style={styles.innertext}
                date={this.state.fullBloom}
                format="MM/DD/YYYY"
                placeholder="Select Date"
                //minDate="2017-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(fullBloom) => {this.setState({fullBloom});}}
             />
            </View>

            <View style={styles.line}/>

            <View style={styles.maincont}>
              <Text style={styles.mainstyles}>
                VERAISON
              </Text>
              <DatePicker
                style={styles.innertext}
                date={this.state.veraison}
                format="MM/DD/YYYY"
                //minDate="2017-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(veraison) => {this.setState({veraison});}}
              />
            </View>

            <View style={styles.line}/>

            <View style={styles.maincont}>
              <Text style={styles.mainstyles}>
                HARVEST
              </Text>
              <DatePicker
                style={styles.innertext}
                date={this.state.harvest}
                format="MM/DD/YYYY"
                //minDate="2017-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(harvest) => {this.setState({harvest});}}
              />
            </View>

            <View style={styles.line}/>

            <View style={styles.maincont}>
              <Text style={styles.mainstyles}>
                LEAF FALL
              </Text>
              <DatePicker
                style={styles.innertext}
                date={this.state.leafFall}
                format="MM/DD/YYYY"
                placeholder="Select Date"
                //minDate="2017-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(leafFall) => {this.setState({leafFall});}}
              />
            </View>

            <View style={styles.line}/>

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

export default KeyDates;
