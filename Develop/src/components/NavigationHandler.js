// import node modules
import React,{ Component } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  TouchableHighlight,
  Image,
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';
import Drawer from 'react-native-drawer';
// import project files
import RightDrawer from './drawer/RightDrawer';
import LeftDrawer from './drawer/LeftDrawer';

import SearchContainer from '../containers/SearchContainer';
 import DeviceListContainer from '../containers/DeviceListContainer';
 import MapContainer from '../containers/MapContainer';
 import BlockContainer from '../containers/BlockContainer';
 import BlockListContainer from '../containers/BlockListContainer';
 import BlockDetailsContainer from '../containers/BlockDetailsContainer';
 import BlockPropertyContainer from '../containers/BlockPropertyContainer';

 import VineyardContainer from '../containers/VineyardContainer';
 import DeviceContainer from '../containers/DeviceContainer';
 import SavedMapContainer from '../containers/SavedMapContainer';
  import FlowmeterContainer from '../containers/FlowMeterContainer';
import NavigationContainer from '../containers/NavigationContainer';

import SignIn from './SignIn';
import BlocksProperty from './Blocks/blocksProperty';

import SearchProfile from './SearchProfile';

import AddDevice from './AddDevice';
import DeviceListScreen from './DeviceListScreen';
import DeviceListDemo from './DeviceListDemo';
import Block from './Block';

import AccountDetails from './AccountDetails';

import styles from './styles/navigation';
import MapHome from './map/MapHome';
import VineyardDetail from './VineyardDetail';
import GateWeather from './Devices/GateWeather';
import SavedMapHome from './map/SavedMapHome';

// global initialization
const {
  Card: NavigationCard,
  StateUtils: NavigationStateUtils,
  Header: NavigationHeader,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental;



class NavigationHandler extends Component {
  _renderScene (props) {

        const { route } = props.scene;
        var isDataAvailable= false;
        // console.log("route key", route.key);
        // console.log("props in vineyard navigation", this.props);
        if (route.key ===  'search') {
            return <SearchContainer _handleNavigate={this._handleNavigate.bind(this)}/>;
        }
        if (route.key === 'signin') {
            return <SignIn _handleNavigate={this._handleNavigate.bind(this)}/>;
        }
        if (route.key === 'pushGateWeather') {
            return <DeviceContainer ref={component =>this._deviceContainer = component} _handleNavigate={this._handleNavigate.bind(this)} vineyardDeviceState={this.props.navigationState} />;
        }

        if (route.key === 'pushFlowmeter') {
          return <FlowmeterContainer ref={component =>this._flowmeterContainer = component} _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props.navigationState.selectedAccount} blockDeviceState={this.props.navigationState}/>;
        }

        if (route.key === 'pushAddDevice') {
            return <AddDevice />;
        }
        if (route.key === 'pushAccountDetail') {
            return <AccountDetails _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props.navigationState.selectedAccount}/>;
        }
        if (route.key === 'pushDeviceListDemo') {
            return <DeviceListDemo  _handleNavigate={this._handleNavigate.bind(this)} />;
          }

        if (route.key === 'pushDeviceList') {
          //console.log("this.props.push device list",this.props);
          return <DeviceListContainer  _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props.navigationState.selectedAccount}/>;
        }
        // if (route.key === 'pushBlock') {
        //   return <BlockContainer ref={component =>{this._blockInfoView = component}} _handleNavigate={this._handleNavigate.bind(this)}  selectedAccount={this.props.navigationState.selectedAccount} />;
        // }

        if (route.key === 'pushBlockProperty') {
          if(this.props.navigationState.actionType == 'edit'){
            return <BlockPropertyContainer ref={component =>{ this._blockPropertyView = component}} _handleNavigate={this._handleNavigate.bind(this)}  selectedAccount={this.props.navigationState.selectedAccount} navigationState={this.props.navigationState} _handleBackAction= {this._handleBackAction.bind(this)} selectedBlock={this.props.navigationState.selectedBlock}
            blockparammeterSaved={this.props.navigationState.blockparammeterSaved} blockproductionSaved={this.props.navigationState.blockproductionSaved}
            blockSoilSaved = {this.props.navigationState.blockSoilSaved} blockAnnualSaved = {this.props.navigationState.blockAnnualSaved}
            blockKeyDatesSaved = {this.props.navigationState.blockKeyDatesSaved} actionType = {this.props.navigationState.actionType}/>;
          }
          else{
            return <BlockPropertyContainer ref={component =>{ this._blockPropertyView = component}} _handleNavigate={this._handleNavigate.bind(this)}  selectedAccount={this.props.navigationState.selectedAccount} navigationState={this.props.navigationState} _handleBackAction= {this._handleBackAction.bind(this)} blockID={this.props.navigationState.blockID}
            blockparammeterSaved={this.props.navigationState.blockparammeterSaved} blockproductionSaved={this.props.navigationState.blockproductionSaved}
            blockSoilSaved = {this.props.navigationState.blockSoilSaved} blockAnnualSaved = {this.props.navigationState.blockAnnualSaved}
            blockKeyDatesSaved = {this.props.navigationState.blockKeyDatesSaved}/>;
          }

        }
        if (route.key === 'pushBlockDetails') {
          //console.log('pushBlockDetails::: ',this.props)
          if(this.props.navigationState.actionType == 'edit'){
            return <BlockDetailsContainer ref={component =>{ this._blockDetailsView = component}}  _handleNavigate={this._handleNavigate.bind(this)}  blockData={this.props.navigationState.blockInfo}  selectedblockType={this.props.navigationState.selectedblockType} selectedAccount={this.props.navigationState.selectedAccount} actionType={this.props.navigationState.actionType}/>;
          }else{
              return <BlockDetailsContainer ref={component =>{ this._blockDetailsView = component}}  _handleNavigate={this._handleNavigate.bind(this)}  blockData={this.props.navigationState.blockInfo} selectedblockType={this.props.navigationState.selectedblockType} selectedAccount={this.props.navigationState.selectedAccount} />;
          }
        }
        if (route.key === 'pushBlocksList') {
          //console.log('pushBlock:List  list by akhil::: ',this.props)
          return <BlockListContainer  _handleNavigate={this._handleNavigate.bind(this)} />;
        }
        if (route.key === 'displayMap' || route.key === 'displayMap1') {
            return <MapContainer mode={route}  ref={component =>{this._mapView = component}} _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props.navigationState.selectedAccount} blockData= {this.props.navigationState.blockInfo} deviceDataModal = {this.props.navigationState.deviceDataModal} navState= {this.props.navigationState}/>;
        }
        // if (route.key === 'vineyard') {
        //     return <VineyardContainer ref={component =>{this._vineyardView = component}}  _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props} _handleBackAction= {this._handleBackAction.bind(this)}/>;
        // }
        if (route.key === 'pushVineyard') {
        //  console.log("props in navigation vineyard ", this.props);
            return <VineyardContainer ref={component =>{this._vineyardView = component}}  _handleNavigate={this._handleNavigate.bind(this)} selectedAccount={this.props.navigationState.selectedAccount} _handleBackAction= {this._handleBackAction.bind(this)}/>;
        }
        if (route.key === 'pushBlockMap') {
            return <BlockContainer ref={component =>{this._blockInfoView = component}}  _handleNavigate={this._handleNavigate.bind(this)} blockCoordinates={this.props.navigationState.blockCoordinates} selectedAccount={this.props.navigationState.selectedAccount} _handleBackAction= {this._handleBackAction.bind(this)}/>;
        }
  }

  saveDeviceDetail() {
       this._deviceContainer._reactInternalInstance._renderedComponent._instance.saveDeviceDetails();
   }
   saveBlockDevice() {
  this._flowmeterContainer._reactInternalInstance._renderedComponent._instance.saveBlockDevice();
  }
   saveNewMapViewDetail() {
        this._mapView._reactInternalInstance._renderedComponent._instance.saveNewMapViewDetail();
    }
    saveNewVineyardDetail() {
        this._vineyardView._reactInternalInstance._renderedComponent._instance.saveNewVineyardDetail();
    }
    saveBlockInfo(){
        this._blockInfoView._reactInternalInstance._renderedComponent._instance.saveNewBlockInfo();
    }
    saveBlockProperties() {
        this._blockPropertyView._reactInternalInstance._renderedComponent._instance.saveNewBlockProperties();
    }
    saveBlockDetailsInfo(){
      //console.log('saveBlockDetailsInfo::: ',this._blockDetailsView._reactInternalInstance._renderedComponent._instance)
      var blockDetailsRef = this._blockDetailsView._reactInternalInstance._renderedComponent._instance;
        blockDetailsRef._reactInternalInstance._renderedComponent._instance.saveBlockDetailsInfo();
    }


  _handleBackAction () {
        if (this.props.navigationState.index === 0) {
            return;
        }
        this.props.popRoute();
  }

  _handleDuplicateKey (action) {
    // console.log("action in _handleDuplicateKey", action);
    // console.log("_handleDuplicateKey navigationState", this.props.navigationState);
    for(var i=0;i<this.props.navigationState.routes.length;i++){
    //  console.log("_handleDuplicateKey key", this.props.navigationState.routes[i].key);
      if(action.route.key==this.props.navigationState.routes[i].key){
      //  console.log("we are in _handleNavigate if condition");
        this.props.navigationState.routes.splice(i, 1);
      }
    }
  }

  _handleNavigate (action) { // decide action type for action
this._handleDuplicateKey(action);
      switch (action && action.type) { // here && operator avoids undefined error
          case 'home':
          case 'search':
              this.props.signIn(action.route, action.data);
              return true;
          case 'pushDeviceList':
              this.props.pushDeviceList(action.route, action.data);
              return true;
          case 'pushBlock':
              this.props.pushBlock(action.route, action.data);
              return true;
          case 'pushBlocksList':
              this.props.pushBlocksList(action.route, action.data);
              return true;
          case 'pushDeviceListDemo':
            this.props.pushDeviceListDemo(action.route, action.data);
            return true;
          case 'pushBlockProperty':
          if(action.data.actionType == 'edit'){
            this.props.pushBlockProperty(action.route, action.data);
          }
          else{
            this.props.pushBlockProperty(action.route, action.data);
          }
            return true;
          case 'pushFlowmeter':
            this.props.pushFlowmeter(action.route,action.data);
            return true;

          case 'pushBlockDetails':
            if(action.actionType == 'edit'){
              this.props.pushBlockDetails(action.route, action.data);
            }
            else{
              this.props.pushBlockDetails(action.route, action.data);
            }
              return true;
          case 'pushAddDevice':
              this.props.pushAddDevice(action.route);
              return true;
          case 'pushGateWeather':
              this.props.pushGateWeather(action.route,action.data);
              return true;
          case 'searchResults':
              this.props.searchAccounts(action.data);
              return true;
          case 'pushAccountDetail':
              this.props.pushAccountDetail(action.route,action.data);
              return true;
          case 'MapHome':
              this.props.displayMap(action.route, action.data, action.deviceDataModal, action.selectedAccount);
              return true;
          case 'pushVineyard':
              this.props.pushVineyardDetail(action.route,action.data);
              return true;
          case 'pushBlockMap':
              this.props.pushBlockMap(action.route,action.data);
              return true;
          default:
      }
  }

  _renderMap (action) {

    switch (action && action.type) { // here && operator avoids undefined error
      case 'MapHome':
          this.props.displayMap(action.route, action.data);
      default:
     }
  }

  _renderTitleComponent= (props) => {
//console.log(" we are in _renderTitleComponent", props);
      const title = props.scene.route.title;
      return <NavigationHeader.Title><Text style={{color:'#ffffff',fontWeight:'bold'}}>{title}</Text></NavigationHeader.Title>;
  }

  _renderRightComponent= (props) => {
    //console.log("props in _renderRightComponent", props);
      if(props.scene.route.key === 'signin') {
            return <View />;
      }
      if( props.scene.route.key === 'search'){
        return <TouchableHighlight style={{paddingRight:15}} onPress={()=> this.openDrawer() }>
                  <Image resizeMode='contain' style={styles.leftcont} source={require('../../icons/menu-icon.png')} />
               </TouchableHighlight>;
      }
      if(props.scene.route.key == 'pushAddDevice') {
            return (
                <View style={styles.rightMenu}>
                    <Text style={styles.leftRightMenuText}>Save</Text>
                </View>
            );
      }
      if(props.scene.route.key == 'pushFlowmeter') {
            return (
                <View style={styles.rightMenu}>
                <TouchableHighlight onPress={() => {
                  this.saveBlockDevice()}}>
                    <Text style={styles.leftRightMenuText}>{this.props.navigationState.deviceInfo.deviceDataModal.actionType === 'edit' ?  'Update' :'Save'}</Text>
                </TouchableHighlight>
                </View>
            );
      }

      if(props.scene.route.key == 'pushBlockProperty') {
            return (
                <View style={styles.rightMenu}>
                <TouchableHighlight onPress={() => {
                  this.saveBlockProperties()}}>
                    <Text style={styles.leftRightMenuText}>Next</Text>
                </TouchableHighlight>
                </View>
            );
      }

      if(props.scene.route.key == 'pushBlock') {
              return (
                  <View style={styles.rightMenu}>
                    <TouchableHighlight onPress={() => {
                      this.saveBlockInfo()}}>
                        <Text style={styles.leftRightMenuText}>Save</Text>
                    </TouchableHighlight>
                  </View>
              );
        }

        if(props.scene.route.key == 'pushBlockDetails') {
                return (
                    <View style={styles.rightMenu}>
                      <TouchableHighlight onPress={() => {
                        this.saveBlockDetailsInfo()}}>
                        <Text style={styles.leftRightMenuText}>{this.props.navigationState.actionType === 'edit' ?  'Update' :'Save'}</Text>
                      </TouchableHighlight>
                    </View>
                );
          }

      if(props.scene.route.key == 'pushGateWeather') {
              return (
                  <View style={styles.rightMenu}>
                    <TouchableHighlight onPress={() => {
                      this.saveDeviceDetail()}}>
                        <Text style={styles.leftRightMenuText}>{this.props.navigationState.deviceInfo.deviceDataModal.actionType === 'edit' ?  'Update' :'Save'}</Text>
                    </TouchableHighlight>
                  </View>
              );
        }
        if(props.scene.route.key == 'pushVineyard') {
                return (
                    <View style={styles.rightMenu}>
                      <TouchableHighlight onPress={() => {
                      this.saveNewVineyardDetail()}}>
                          <Text style={styles.leftRightMenuText}>Save</Text>
                      </TouchableHighlight>
                    </View>
                );
          }
          if(props.scene.route.key == 'pushBlockMap') {
                  return (
                      <View style={styles.rightMenu}>
                        <TouchableHighlight onPress={() => {
                        this.saveBlockInfo()}}>
                            <Text style={styles.leftRightMenuText}>Save</Text>
                        </TouchableHighlight>
                      </View>
                  );
            }

          if(props.scene.route.key == 'displayMap' || props.scene.route.key === 'displayMap1') {
            //console.log("we are in displayMap _renderRightComponent");
            if(props.scene.route.renderMode== 'map' || props.scene.route.renderMode== 'drawBlock'){
                  return (
                      <View style={styles.rightMenu}>
                        <TouchableHighlight onPress={() => {
                          this.saveNewMapViewDetail()
                        }}>
                            <Text style={styles.leftRightMenuText}>Save</Text>
                        </TouchableHighlight>
                      </View>
                  );
            }
            else if(props.scene.route.renderMode== 'deviceMap'){
              //console.log("props om deviceMap navigation", props);
              return (
                  <View style={styles.rightMenu}>
                    <TouchableHighlight onPress={() => {
                      this.saveNewMapViewDetail()
                    }}>
                        <Text style={styles.leftRightMenuText}>Next</Text>
                    </TouchableHighlight>
                  </View>
              );
            }
            else if(props.scene.route.renderMode== 'blockDevice'){
  //console.log("props om deviceMap navigation", props);
            return (
              <View style={styles.rightMenu}>
                <TouchableHighlight onPress={() => {
                  this.saveNewMapViewDetail()
                }}>
                <Text style={styles.leftRightMenuText}>Save</Text>
                </TouchableHighlight>
                </View>
              );
            }
          }


      if(props.scene.route.key == 'pushAccountDetail') {
            return (
              <TouchableHighlight style={{paddingRight:15}} onPress={()=> this.openDrawer() }>
                 <Image resizeMode='contain' style={styles.leftcont} source={require('../../icons/menu-icon.png')} />
              </TouchableHighlight>

            );
      }
      return <TouchableHighlight underlayColor='gray' style={styles.rightMenu} onPress={()=>  this.openDrawer() }>
                <Image resizeMode='contain' source={require('../../icons/menu.png')} />
             </TouchableHighlight>;
  }

  _renderLeftComponent= (props) => {
        if(props.scene.route.key === 'signin' || props.scene.route.key === 'search' || props.scene.route.key === 'pushAccountDetail') {
              return <View />;
        }
        if(props.scene.route.key == 'pushAddDevice') {
              return (
                  <View style={styles.leftMenu}>
                      <Text style={styles.leftRightMenuText}>Cancel</Text>
                  </View>
              );
        }

        return (
            <TouchableHighlight
                underlayColor='gray'
                style={styles.usericon}
                onPress={() => this._handleBackAction()}
            >
                <Image
                    resizeMode='contain'
                    style={styles.arrowcont}
                    source={
                        (props.scene.route.key === 'signin') ?
                        require('../../icons/user-login.png') :
                        require('../../icons/back-arrow.png')
                    }
                />
            </TouchableHighlight>
        );
  }


  openDrawer() {
      var selectedRouteIdnex = this.props.navigationState.index
      if(selectedRouteIdnex == 1 || selectedRouteIdnex == 2){
        this.refs.leftDrawerRef.open();
      }else{
        this.refs.rightDrawerRef.open();
      }
      //this.refs.drawerRef.open();
  }

  closeDrawer() {
      this.refs.drawerRef.close();
  }

  _closeRightDrawer(action) {
      this.refs.rightDrawerRef.close();
      this._handleNavigate(action);
  }

  _closeLeftDrawer(action) {
      this.refs.leftDrawerRef.close();
      this._handleNavigate(action);
  }

  toggleLeftDrawer(){

    const renderLeftDrawer =  (
        <LeftDrawer _handleNavigate={this._closeLeftDrawer.bind(this)} />
    );

    var drawerProperties  = {
      content:  renderLeftDrawer ,
      ref: 'leftDrawerRef', //this ref's are used to open and close the drawer from other components (drawerRef_right and drawerRef_left)
      openDrawerOffset: 0.2,
      panCloseMask: 0, // Device width Can be Used instead
      acceptTap:true,
      panOpenMask: Platform.OS =='ios' ? 0 : 50, // Because of this issue: https://github.com/root-two/react-native-drawer/issues/65 (Android, but figured it was transferable; no dice)
      type: 'overlay',
      side: 'right' ,
      onClose:() => {
         //console.log('Left Close Drawer::: ')
          this.refs.leftDrawerRef.close();
      }
    }
    return drawerProperties;

  }
  toggleRightDrawer(){

     const renderRightDrawer =  (
         <RightDrawer _handleNavigate={this._closeRightDrawer.bind(this)} selectedAccount={this.props.navigationState.selectedAccount}/>
     );

     var drawerProperties  = {
       content:  renderRightDrawer ,
       ref: 'rightDrawerRef', //this ref's are used to open and close the drawer from other components (drawerRef_right and drawerRef_left)
       openDrawerOffset: 0.2,
       panCloseMask: 0, // Device width Can be Used instead
       acceptTap:true,
       panOpenMask: 0, // Because of this issue: https://github.com/root-two/react-native-drawer/issues/65 (Android, but figured it was transferable; no dice)
       type: 'overlay',
       side: 'right' ,
       onClose:() => {
         //console.log('Right Close Drawer::: ')
           this.refs.rightDrawerRef.close();
       }
     }
     return drawerProperties;
  }

  // *Kaustubh: help - not able to separate out left and right menu components in navigation-bar folder
  // because not able to handle this._handleBackAction in LeftMenu.js or RightMenu.js
  // if someone can do it, please implement and use in below function
  _renderNavigationHeader = (props) => {
    //console.log("props in _renderNavigationHeader", props);
      //showNavHeader is initialized in actionSignInRoute in actionRoutes.js
      // change showNavHeader to false if you dont want to see nav bar

      if (props.scene.route.key === 'signin') {
        return <View />;
      }
    //  console.log("we are under if _renderNavigationHeader");
      return (
          <NavigationHeader
              ref='navigatorHeaderRef'
              {...props}
              style={styles.navigationHeader}
              renderTitleComponent={ this._renderTitleComponent }
              renderRightComponent={ this._renderRightComponent }
              renderLeftComponent={ this._renderLeftComponent }
          />
      );
  }


  render() {
      //this.setState({navHandelerRefresh: true})
    let { navigationState } = this.props;
    var selectedRouteIdnex = this.props.navigationState.index
    return(
      <Drawer {...((selectedRouteIdnex ==1 || selectedRouteIdnex == 2) ? this.toggleLeftDrawer(): this.toggleRightDrawer())} style={{paddingLeft: 100}}>

        <NavigationTransitioner
            ref='navigator'
            navigationState={navigationState}
            style={{flex:1}}
            render={props => (
                 <View style={{flex:1}}>
                    <NavigationCard
                        ref='navigationCardRef'
                        {...props}
                        key={props.scene.route.key}
                        renderScene={this._renderScene.bind(this)}
                        onNavigate={this._handleNavigate}
                    />
                    {this._renderNavigationHeader(props)}
                </View>
            )}
        />
      </Drawer>
    );
  } // return function end
} // NavigationRoot Component end

export default NavigationHandler;
