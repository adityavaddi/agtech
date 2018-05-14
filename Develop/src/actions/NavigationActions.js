import  * as actionTypes from '../constants/actionTypes';

export function push (route) {
  return {
    type: actionTypes.PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: actionTypes.POP_ROUTE
  }
}

export function signIn(route, data) {
  return {
    type: actionTypes.SIGN_IN,
    route, data
  }
}

export function pushAddDevice(route) {
    return {
      type: actionTypes.PUSH_ADD_DEVICE,
      route
    }
}

export function pushDeviceListDemo(route) {
    return {
      type: actionTypes.PUSH_DEVICE_LIST_DEMO,
      route
    }
}

export function pushGateWeather(route,data) {
//  console.log("route in pushGateWeather actions",route);
    return {
      type: actionTypes.PUSH_GATE_WEATHER_DEVICE,
      route,data
    }
}

export function pushFlowmeter(route,data) {
    return {
      type: actionTypes.PUSH_FLOWMETER,
      route,data
    }
}


export function saveVineyardDeviceDetail(data,dataModal) {
    return {
      type: actionTypes.SAVE_VIN_DEVICE,
      data,dataModal
    }
}

export function saveBlockDeviceDetail(data,dataModal) {
    return {
      type: actionTypes.SAVE_BLOCK_DEVICE,
      data,dataModal
    }
}

export function updateVineyardDeviceDetail(data,dataModal) {
    return {
      type: actionTypes.UPDATE_VIN_DEVICE,
      data,dataModal
    }
}

export function updateFlowMeter(data,dataModal) {
    return {
      type: actionTypes.UPDATE_BLOCK_DEVICE,
      data,dataModal
    }
}



export function pushDeviceList(route,data) {
    return {
      type: actionTypes.PUSH_SHOW_DEVICE,
      route,
      data
    }
}

export function pushBlocksList(route,data) {
    return {
      type: actionTypes.PUSH_SHOW_BLOCKS_LIST,
      route,
      data
    }
}

export function pushBlock(route,data) {
    return {
      type: actionTypes.PUSH_SHOW_BLOCK,
      route,
      data
    }
}

export function pushBlockProperty(route,data) {
    return {
      type: actionTypes.PUSH_SHOW_BLOCKS_PROPERTY,
      route,
      data,

    }
}
export function pushBlockDetails(route,data) {
    return {
      type: actionTypes.PUSH_SHOW_BLOCK_DETAILS,
      route,
      data
    }
}

export function pushAccountDetail(route,data) {
    return {
      type: actionTypes.PUSH_ACCOUNT_DETAIL,
      route,
      data
    }
}

//To get the Devices froom the AGtech Server
export function getDevices(route, navigateFrom) {
  return {
    type: actionTypes.GET_DEVICES,
    route, navigateFrom
  }
}

/////////To get Map
export function displayMap(route,data,deviceDataModal, selectedAccount) {
  // console.log("route in map: ",route);
  //  console.log("data: in map",data);
  //  console.log("selectedAccount in map navigation action", selectedAccount);
  return {
    type: actionTypes.DISPLAY_MAP,
    route, data, deviceDataModal, selectedAccount
    }
}

export function saveVineyard(data) {
    return {
      type: actionTypes.SAVE_VINEYARD,
      data
    }
}

export function saveBlockMap(data){
  //console.log("data in saveBlockMap navigation Actions", data);
  return{
    type: actionTypes.CREATE_BLOCK,
    data
  }
}

export function saveBlockParametersInfo(data,blockData,selectedAccount){

  return{
    type: actionTypes.SAVE_BLOCK_PARAMETER,
    data,blockData,selectedAccount
  }
}

export function saveProductionObjInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.SAVE_BLOCK_PRODUCTION_OBJ,
    data,blockData,selectedAccount
  }
}

export function saveSoilInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.SAVE_BLOCK_SOIL_INFO,
    data,blockData,selectedAccount
  }
}

export function saveAnnualVariablesInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.SAVE_BLOCK_ANNUAL_VAR,
    data,blockData,selectedAccount
  }
}
export function saveKeydatesInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.SAVE_BLOCK_KEY_DATES,
    data,blockData,selectedAccount
  }
}


//update methods for blovk parametres



export function updateBlockParametersInfo(data,blockData,selectedAccount){
  //console.log("it hits in navigation actions");
  return{
    type: actionTypes.UPDATE_BLOCK_PARAMETER,
    data,blockData,selectedAccount
  }
}

export function updateProductionObjInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.UPDATE_BLOCK_PRODUCTION_OBJ,
    data,blockData,selectedAccount
  }
}

export function updateSoilInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.UPDATE_BLOCK_SOIL_INFO,
    data,blockData,selectedAccount
  }
}

export function updateAnnualVariablesInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.UPDATE_BLOCK_ANNUAL_VAR,
    data,blockData,selectedAccount
  }
}

export function updateKeydatesInfo(data,blockData,selectedAccount){
  return{
    type: actionTypes.UPDATE_BLOCK_KEY_DATES,
    data,blockData,selectedAccount
  }
}



export function pushVineyard(route,data) {
    return {
      type: actionTypes.PUSH_VINEYARD,
      route,data
    }
}

export function pushVineyardDetail(route,data) {
  //  console.log("route in vineyard: ",route);
  //  console.log("data: in pushVineyardDetail",data);
    return {
      type: actionTypes.PUSH_VINEYARD_DETAIL,
      route,data
    }
}

export function pushBlockMap(route,data) {
    return {
      type: actionTypes.PUSH_BLOCK_MAP,
      route,data
    }
}

/////////For search action
export function searchAccounts(data) { // data: account searched
  return {
    type: actionTypes.SEARCH,
    data
  }
}

/////////For search action
export function searchWithProfile(data) { // data: account searched WITH PROFILE
  return {
    type: actionTypes.SEARCH_PROFILE,
    data
  }
}


export function clearSearchAccounts() { // data: account searched
  return {
    type: actionTypes.CLEAR_SEARCH,
  }
}

export function deleteDevice(data,dataModal) {
    return {
      type: actionTypes.DELETE_DEVICE,
      data,dataModal
    }
}

export function blockOnSwipeDelete(data,dataModal) {

    return {
      type: actionTypes.DELETE_BLOCK,
      data,dataModal
    }
}
// export function onHeaderClickAction(sectionID, expand) {
//   return {
//     type: actionTypes.HEADER_CLICK,
//     sectionID,
//     expand
//   };
// }
