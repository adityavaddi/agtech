/* Hey Kaustubh, I have tweaked the code and broke down the UI and Data. Ashwin and
  I came up with a component called Inflate(Expand and Collapse), please do check and let me know if feel like
  a better way can be done.
  you code is still here just in case if you want to pull back:
  https://stash.verizon.com/projects/NPDIDS/repos/agtech-mobile-app/commits/52ebeb28e0adabd2c197e8856683acef811e902a#app/components/DeviceListScreen.js:
*/
import React, { Component } from 'react';
import { View, ScrollView, Dimensions, TouchableHighlight, Text, Image } from 'react-native';
import DeviceRow from './list-row/DeviceRow';
//import Inflate from './Inflate/Inflate';
import styles from './styles/deviceListScreenNew';
import DeviceListDemo from './DeviceListDemo';
import { actionPushGateWeather, actionPushDeviceListDemo } from '../constants/actionRoutes';
var { height, width } = Dimensions.get('window');

class DeviceListScreenNew extends Component {
  constructor(props){
    super(props)
    // A state is required as user might delete the Device and it should reflect on the UI
      this.state = {
        allDevicesSorted : []
      }
  }

  // This methods filter the Devices as per device Types and Sets a Label which is used as header for Inflate
  _filterDevices = (allDevices,allDevicesCount) => {

    var fMeters = []      // Flow Meters
    var sSensors = []     // Soil Sensors
    var wStations = []    // Weather Stations
    var gWays = []        // GateWays
    var other = []        // all othere Devices if availble any

    // Filter Devices and push in to individual buckets fmeters, sSensors , wStations
    for(var j in allDevices) {
      if(allDevices[j].state == 'active'){  // Active Devices are those which are not deleted by the user.
          if(allDevices[j].type == 'gateway'){
              gWays.push(allDevices[j])
          } else if(allDevices[j].type == 'weatherstation'){
              wStations.push(allDevices[j])
          } else if(allDevices[j].type == 'flowmeter'){
              fMeters.push(allDevices[j])
          } else {
              other.push(allDevices[j])
          } // Any Additional Device Types can be added here.
      }
    }
    /*
      type    : used as Header Lable which is clicked to Expand
      devices  : Actual Devices and their info
      allCount : All available Devices under the selected Account(not just which are passed but all available devices on this account on cloud)
    */
    allDevicesSorted = [
      {type: 'Gateways', devices: gWays, allCount: allDevicesCount.gateway} ,
      {type: 'Weather Stations', devices: wStations, allCount: allDevicesCount.weatherstation} ,
      {type: 'Flowmeters', devices: fMeters, allCount: allDevicesCount.flowmeter} ,
      {type: 'Others', devices: other, allCount: other.length}
      /*
        others are all which are fetched but not sure which
        category they fit into, or to handle deviceType string errors.
        ex: type: 'fowlmeter' instead of 'flowmeter' ends up here but does not break the code
        */
     ] // Any Additional Device Types can be added here.

     // Updating the State and reflecting on the UI.
     this.setState({
       allDevicesSorted : allDevicesSorted
     },()=>{console.log(this.state.allDevicesSorted)})
  }

  componentWillMount(){
    // Filter the Devices as Per DeviceType and Set bucket Labels
    console.log('Current Props',this.props.selectedAccount.devicesCount);
    this._filterDevices(this.props.selectedAccount.devices,this.props.selectedAccount.devicesCount)
  }

  // New Props after a Device is deleted
  componentWillReceiveProps = (newProps) => {

    console.log('New Props',newProps.selectedAccount.devicesCount);

    console.log("akhil is hitting herer",newProps);

    this._filterDevices(newProps.selectedAccount.devices,newProps.selectedAccount.devicesCount)
  }

  deviceOnPress = (selectedDevice) => {
    // This Method Triggers when a user press on a one of the Device row,
    // the argument is the device on which onPress was made
    //console.log('Device OnPress selectedDevice======>',selectedDevice.type);

    // Constructing a object that can be passed to next screen,
    // Action Type specify is user is creating a new device or editing a exisitng one.

    actionPushGateWeather.data.deviceDataModal  = {
          deviceType : selectedDevice.type,
          actionType : 'edit',
          selectedDevice : selectedDevice
        }
        actionPushGateWeather.route.title= (selectedDevice.type === 'gateway') ? "Gateway":"Weather Station";
        actionPushGateWeather.route.selectedAccount = this.props.selectedAccount;

    this.props._handleNavigate(actionPushGateWeather)
  }

  deviceOnSwipeDelete = (DeleteDeviceInfo) => {

    // This Method Triggers when a user press on the Delete Option on the PopUp,
    // the argument is the device on which swipe to delete had Pressed
      //console.log('deletedDevice : ',DeleteDeviceInfo)
      var selectedAccount = this.props.selectedAccount
      //console.log('RANCH ID : ',this.props.ranchId)

    this.props.onDeleteClick(DeleteDeviceInfo,selectedAccount)
  }

  render() {
  console.log("this props from deviceList screen",this.props);
      return (
        <View style={{flex:1,marginTop:65}}>
        {
          this.state.allDevicesSorted.map((eachKindofDevices,i)=>{
            console.log("eachKindofDevices------",eachKindofDevices );
              return(
                <View style={[{height:height/15,width:width,backgroundColor:'white'}]}>
                    <TouchableHighlight style={[{height:height/15,width:width}]} onPress = {()=> { this.props._handleNavigate(actionPushDeviceListDemo) }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:height/15,flex: 15,justifyContent:'center',marginLeft:height/40}}>
                                <Text style={{fontSize:height/40,fontFamily:'AvenirNext-Bold'}}>{eachKindofDevices.type}</Text>
                            </View>
                            <View style={{height:height/15,flex:1,alignItems:'center',justifyContent:'center'}}>
                                <View style={{height:height/30,width: 2}}/>
                            </View>
                            <View style={{height:height/15,flex:2,justifyContent:'center'}}>
                                <Text style={{fontSize:height/40,fontFamily:'AvenirNext-Bold',color:'#22B05C'}}>{eachKindofDevices.devices.length}</Text>
                            </View>
                            <View style={{height:height/15,width:width - width/1.15,justifyContent:'center'}}>
                                  <View style={{height:height/15,width:width - width/1.15,justifyContent:'center',alignItems:'center'}}>
                                      <Image style= {{height:30,width:30}}
                                        source={require('../../icons/icon-arrow-right.png')}/>
                                  </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
              )
          })
        }

        </View>
      )
  }
}

export default DeviceListScreenNew;
