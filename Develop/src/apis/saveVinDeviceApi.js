import {AsyncStorage,Alert} from 'react-native';

import Settings from '../store/setUp';
const settings = Settings.load();


export function saveVineyardDeviceApi(action) {

  var randomNumber = Math.floor((Math.random() * 100000) + 1);
  //console.log("randomNumber",randomNumber);

  const vineyardDeviceModel = {
	 [randomNumber]:{
              "type":action.data.type,
              "id":randomNumber,//noneed
              "name":action.data.name,
              "serialNumber":action.data.serialNumber,
              "ancestorPath":null,//noneed
              "ancestor":null,//noneed
              "edited":action.data.edited,//noneed
              "attributes":null,//noneed
              "state":"active",
              "lastEditedTimestamp":1481650889434,//
              "verificationStatus":null,
              "measuredEntity":null , // add ranch id model here **imp
              "location":action.data.location,
              "catalogId":null//no need
	}
}
  //console.log("vineyard Device model from action",action);
  //console.log("vineyard Device model to push firebase",vineyardDeviceModel);

  var vineyardDeviceUrl = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/devices.json';
  var vineyardDeviceUrl1 = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/devices/'+randomNumber+'.json';

  // //console.log("vineyardUrl",vineyardUrl);
        var obj = {
          method : 'PATCH',
          headers: {
             'Access-Control-Allow-Credentials': true,
             'Access-Control-Allow-Origin': '*',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify(vineyardDeviceModel)
        };
  return(
          fetch(vineyardDeviceUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardDeviceUrl1)
                  .then((response) => response.json())
                  .then((json) => {
                      //updated selected account localy with server response
                      if(json.type == "gateway"){
                            action.dataModal.devicesCount.gateway = action.dataModal.devicesCount.gateway+1;
                          }
                          else if(json.type == "weatherstation"){
                            action.dataModal.devicesCount.weatherstation = action.dataModal.devicesCount.weatherstation+1;
                          }
                          else {
                          action.dataModal.devicesCount.flowmeter = action.dataModal.devicesCount.flowmeter+1;
                          }

                     action.dataModal.devices.push(json)

                     var selectedAccount = action.dataModal
                    //console.log("updated selected account in api",action.dataModal);

                    return selectedAccount
                  })
                  .catch((error) => {
                    console.error('Error',error)
                  })
                )
            })
            .catch((error)=>{
              console.error('Error',error)
            })
  )
};
