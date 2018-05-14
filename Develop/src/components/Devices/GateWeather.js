import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';
var { height, width } = Dimensions.get('window')

import Icon from 'react-native-vector-icons/MaterialIcons'
import EStyleSheet from 'react-native-extended-stylesheet';
import * as actionRoutes from '../../constants/actionRoutes';
import Geolocation from '../utils/Gps';
import {actionShowMap,actionPushDeviceList} from '../../constants/actionRoutes';


class GateWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            sNum : '',
            latitude : '',
            longitude : '',

            manuf : '',
            model :'',
            showLoading: '',
            isDataSaved : ''
        };
    }




    componentDidMount(){

    }

    _handleBackKey () {
        // console.log("action in _handleDuplicateKey", action);
        // console.log("_handleDuplicateKey navigationState", this.props.navigationState);
        for(var i=0;i<this.props.vineyardDeviceState.routes.length;i++){
        //  console.log("_handleDuplicateKey key", this.props.navigationState.routes[i].key);
          if('pushGateWeather'==this.props.vineyardDeviceState.routes[i].key){
          //  console.log("we are in _handleNavigate if condition");
            this.props.vineyardDeviceState.routes.splice(i, 1);
            break;
          }
        }
      }

    _renderLoading(){
        //console.log('on update incmong props to Gateweather page is ***************::: ',this.props);
      if(this.props.isSuccessful ){

          if(this.props.isSavedSuccessful){

            this.setState({showLoading : 'stop'});
            if(this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType === 'new'){
              this._handleBackKey();
              actionShowMap.route.renderMode ='savedVineyard';
              this.props.selectedAccount= this.props.vineyardDeviceState.selectedAccount;
              this.props._handleNavigate(actionShowMap);
            }
          }
        //console.log("_renderLoading ::: actionType :: ",this.props);
      else if(this.props.isUpdateSuccessful ) {

          this.setState({showLoading : 'stop'});
        if(this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
          this._handleBackKey();
          actionPushDeviceList.data  = this.props.vineyardDeviceState.selectedAccount.devices;
           this.props._handleNavigate(actionPushDeviceList);
        }
        }

        //  return <View/>;
      }
        return(
          <View style={styles.spinnerview} ref="spinnerView">
            <Image
              style={{height:50,width:50}}
              source={require('../../../icons/loading.gif')}
              />
          </View>
        );
    }

    componentWillMount(){

    }
    // componentWillUnmount()
    // {
    //   this.setState({showLoading : 'stop'});
    // }



  saveDeviceDetails(){
      //console.log('From Navigation to saveGateWay::: ',this.props);
      this.setState({isDataSaved : false});

      var dataModal =  {
              id: this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.id?this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.id:"",
              type: this.props.vineyardDeviceState.deviceInfo.deviceDataModal.deviceType,
              name: this.state.name,
              serialNumber: this.state.sNum,
              ancestorPath: null,
              ancestor: null,
              model: this.state.model?this.state.model:'N/A',
              manufacturer: this.state.manuf?this.state.manuf:'N/A',
              edited: this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType === 'edit' ? "updated": "added" ,
              location: {
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  elevation: ""
              }
        }
        var previousSelectedAccount= this.props.vineyardDeviceState.selectedAccount;

        if(this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
          this.setState({showLoading : 'start'});
          this.props.updateVineyardDeviceDetail(dataModal,previousSelectedAccount);
        }else{
          this.setState({showLoading : 'start'});

          this.props.saveVineyardDeviceDetail(dataModal,previousSelectedAccount);
        }
    }


    componentWillMount(){
      //console.log('Will Mount: deviceInfo:: ',this.props.vineyardDeviceState.deviceInfo)
        if(this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType === 'edit'){
          this.setState({
            name : this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.name,
            sNum :  this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.serialNumber.toString(),
            latitude : this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.location.latitude.toString(),
            longitude : this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.location.longitude.toString(),
            manuf : this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.manufacturer?this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.manufacturer:'N/A',
            model : this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.model?this.props.vineyardDeviceState.deviceInfo.deviceDataModal.selectedDevice.model:'N/A'
          })
        }
        else{
          //to check weather deviceinfo count to render the lat long in ui
          this.setState({
            //
             latitude : this.props.vineyardDeviceState.deviceInfo.newDeviceCoordinates.coordinates.latitude.toString(),
             longitude : this.props.vineyardDeviceState.deviceInfo.newDeviceCoordinates.coordinates.longitude.toString(),
          })
        }
      }

      renderTextField = (label,value) => {
        return (
          <View style = {styles.textFieldCont}>
            <View style={styles.labelCont}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <TextInput
              style={styles.textBox}
              onChangeText={(name) => this.setState({name})}
              value = {this.state.name}
              />
            <View style={styles.underLine}/>
          </View>
        )
      }

      _onFocus = (offSet) => {
          //Pushes the View by the offSet value
          this.refs.ScrollView.scrollTo({x:0,y:offSet,animated:false})
      }

      _onBlur = () => {
          //Scrollback to normal
          this.refs.ScrollView.scrollTo({x:0,y:0,animated:false})
      }

    render(){
      console.log("this.props in GateWeather",this.props);
          if(this.state.showLoading === 'start'){
            return this._renderLoading();
          }

          return (
            <ScrollView scrollEnabled = {false} contentContainerStyle={styles.mainCont} ref = 'ScrollView'>
                <View style={styles.topCont}>
                  {/* Assets replace the PlacHolder as they Available*/}
                  <Image style={styles.imgCont} source ={{uri:'https://placehold.it/350x150'}}/>
                </View>
                <View style={styles.bottomCont}>
                    <View style = {styles.nameCont}>
                        <View style={styles.labelCont}>
                            <Text style={styles.label}>NAME</Text>
                        </View>
                        <TextInput
                          style={styles.textBox}
                          underlineColorAndroid='transparent'
                          onChangeText={(name) => this.setState({name})}
                          value = {this.state.name}
                          clearButtonMode = { 'while-editing'}
                          />
                        <View style={styles.underLine}/>
                    </View>
                    <View style = {styles.sNumber}>
                        <View style = {styles.subSNumber}>
                            <View style = {styles.labelCont}>
                                <Text style = {styles.label}>SERIAL NUMBER</Text>
                            </View>
                            <TextInput
                              editable = {this.props.vineyardDeviceState.deviceInfo.actionType == 'edit'?false:true}
                              style = {styles.textBox}
                              underlineColorAndroid='transparent'
                              onChangeText={(sNum) => this.setState({sNum:Number(sNum)})}
                              value = {this.state.sNum}
                              clearButtonMode = { 'while-editing'}
                              />
                            <View style={styles.underLine}/>
                        </View>
                        <View style={styles.QRcont}>
                            <Icon name={'code'} size={height/20} color= {"#2BAF5B"}/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.cordCont}>
                            <View style={styles.latCont}>
                                <View style={styles.labelCont}>
                                    <Text style={styles.label}>LONGITUDE</Text>
                                </View>
                                <TextInput
                                  style={styles.textBox}
                                  underlineColorAndroid='transparent'
                                  onChangeText={(longitude) => this.setState({longitude:longitude.toString()})}
                                  value = {this.state.longitude}
                                  clearButtonMode = { 'while-editing'}
                                  />
                                  <View style={styles.underLine}/>
                            </View>

                            <View style={styles.lngCont}>
                                <View style={styles.labelCont}>
                                    <Text style={styles.label}>LATITUDE</Text>
                                </View>
                                <TextInput
                                  style={styles.textBox}
                                  underlineColorAndroid='transparent'
                                  onChangeText={(latitude) => this.setState({latitude:latitude.toString()})}
                                  value = {this.state.latitude}
                                  clearButtonMode = { 'while-editing'}
                                  />
                                  <View style={styles.underLine}/>
                            </View>

                            <View style={styles.locatCont}>
                            <TouchableOpacity  disabled={this.state.isDataSaved} onPress={() => {
                    (new Geolocation()).userlocation((gps) => {
                      this.setState({latitude:gps.latitude.toString(),longitude:gps.longitude.toString()})
                    })}}>

                    {
                      this.props.vineyardDeviceState.deviceInfo.deviceDataModal.actionType == 'new'?
                        <View/>
                      :
                        <Icon name={'location-on'} size={height/20} color= {"#2BAF5B"}/>
                      
                     }
                                </TouchableOpacity>
                            </View>

                            <View style={styles.nearMeCont}>
                            {/*
                            <TouchableOpacity onPress={() => {
                             this.props._handleNavigate(actionRoutes.actionShowMap)}}>
                                <Icon name={'near-me'} size={height/20} color= {"#2BAF5B"}/>
                                </TouchableOpacity>
                              */}
                            </View>

                        </View>
                    </View>

                    <View style = {styles.nameCont}>
                        <View style={styles.labelCont}>
                            <Text style={styles.label}>MODEL</Text>
                        </View>
                        <TextInput
                          style={styles.textBox}
                          onChangeText={(model) => this.setState({model})}
                          value = {this.state.model}
                          underlineColorAndroid='transparent'
                          onFocus = {() => {this._onFocus(height/10)}}
                          onBlur = {() => {this._onBlur()}}
                          clearButtonMode = { 'while-editing'}
                          />
                        <View style={styles.underLine}/>
                    </View>

                    <View style = {styles.nameCont}>
                        <View style={styles.labelCont}>
                            <Text style={styles.label}>MANUFACTURE</Text>
                        </View>
                        <TextInput
                          style = {styles.textBox}
                          underlineColorAndroid='transparent'
                          onChangeText = {(manuf) => this.setState({manuf})}
                          onFocus = {() => {this._onFocus(height/5)}}
                          value = {this.state.manuf}
                          onBlur = {() => {this._onBlur()}}
                          clearButtonMode = { 'while-editing'}
                          dataDetectorTypes = {['phoneNumber']}
                          />
                        <View style={styles.underLine}/>
                    </View>

                </View>
            </ScrollView>
          );
        }
}
  var styles = EStyleSheet.create({
      $imageDim : height/6,
      $fontSize : height/9,
      mainCont: {
        flex:1,
        //backgroundColor:'coral',
        alignItems:'center',
        marginTop: height/15
        //justifyContent:'center'
      },
      topCont: {
        alignItems:'center',
        justifyContent:'center',
        //backgroundColor:'tan',
        height:'25%'
      },
      imgCont:{
        height:'$imageDim',
        width:'$imageDim',
        borderRadius:'0.5 * $imageDim',
        backgroundColor:'lightgrey'
      },
      bottomCont :{
        flex:1,
        width:'90%'
      },
      nameCont:{
        height:'10%',
        width:'90%',
        //backgroundColor:'lightblue',
        marginTop:'1%',
        justifyContent:'center'
      },
      sNumber:{
        flexDirection:'row',
        height:'10%',
        //width:'70%',
        //backgroundColor:'lightblue',
        marginTop:'1%',
        //justifyContent:'center',
        //overflow:'hidden'
      },
      textBox:{
        height: '5%',
        //backgroundColor:'lightblue'
        fontSize: '0.25 * $fontSize',
        color:'#2F292B',
        '@media android': {
          height:'7%'
        }
      },
      labelCont:{
        height:'3%',
        //backgroundColor:'lightgreen',
        justifyContent:'center',
        '@media android':{
          marginLeft:'1%'
        }
      },
      label :{
        color:'#999999',
        fontFamily:'AvenirNext-Bold',
        fontWeight:'400',
        fontSize:'0.15 * $fontSize',
        '@media android':{
          fontSize:14
        }
      },
      underLine:{
        height:'0.15 * 1%',
        backgroundColor:'#2BAF5B',
        //width:'90%'
      },
      subSNumber:{
          width:'70%'
      },
      QRcont:{
        alignItems:'center',
        justifyContent:'flex-end',
        height:'8%',
        width:'20%',
        //backgroundColor:'tan'
      },
      latCont:{
        width:'30%',
        '@media android':{
            marginTop:'1%'
        }
      },
      lngCont:{
        width:'30%',
        marginLeft:20,
        '@media android':{
            marginTop:'1%'
        }
      },
      locatCont:{
        height:'8%',
        width:'15%',
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'tan'
      },
      nearMeCont:{
        height:'8%',
        width:'15%',
        alignItems:'center',
        justifyContent:'flex-end',
        //backgroundColor:'tan'
      },
      cordCont:{
        flexDirection:'row',
        //backgroundColor:'tan'
      },
    locatCont:{
      height:'8%',
      width:'15%',
      alignItems:'center',
      justifyContent:'flex-end',
      //backgroundColor:'tan'
    },
    nearMeCont:{
      height:'8%',
      width:'15%',
      alignItems:'center',
      justifyContent:'flex-end',
      //backgroundColor:'tan'
    },
    cordCont:{
      flexDirection:'row',
      //backgroundColor:'tan'
    },
    spinnerview: {
      flex:1,
      width:width,
      height:height,
      zIndex:99,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0.5)',//'$screens.detailView.colors.camerastatusview',
    },

  })
export default GateWeather
