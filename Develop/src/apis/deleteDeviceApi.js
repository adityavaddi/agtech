import {AsyncStorage,Alert} from 'react-native';

import Settings from '../store/setUp';
const settings = Settings.load();


export function deleteDeviceApi(action) {


   //console.log("vineyard Device model from action",action);
  // console.log("vineyard Device model to push firebase",vineyardDeviceModel);
    const deleteDeviceModel = {

          "state":"inactive"
    }

  var vineyardDeviceUrl = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/devices/'+action.data.id+'.json';
  var vineyardDeviceUrl1 = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/devices/'+action.data.id+'.json';


  // console.log("vineyardUrl",vineyardDeviceUrl);
  // console.log("vineyardUrl",vineyardDeviceUrl1);
        var obj = {
          method : 'PATCH',
          headers: {
             'Access-Control-Allow-Credentials': true,
             'Access-Control-Allow-Origin': '*',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify(deleteDeviceModel)
        };
       //return null
  return(
          fetch(vineyardDeviceUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardDeviceUrl1)
                  .then((response) => response.json())
                  .then((json) => {

                    if(json.type == "gateway"){
                          action.dataModal.devicesCount.gateway = action.dataModal.devicesCount.gateway-1;
                      }
                      else if(json.type == "weatherstation"){
                          action.dataModal.devicesCount.weatherstation = action.dataModal.devicesCount.weatherstation-1;
                      }
                      else {
                        action.dataModal.devicesCount.flowmeter = action.dataModal.devicesCount.flowmeter-1;
                      }

                    var localDevices = action.dataModal.devices
                    var activeDevices = []
                    for(var key in localDevices){
                      //console.log("localDevices[key]",localDevices[key])
                      if(localDevices[key].id == json.id){
                        localDevices[key] = json
                      }
                      if(localDevices[key].state == 'active'){
                        activeDevices.push(localDevices[key])
                      }
                    }
                    // console.log("local devices",localDevices);
                    // console.log("local devices",activeDevices);
                    action.dataModal.devices = activeDevices;
                    var selectedAccount = action.dataModal;
                    //console.log("selectedAccount in APi model",selectedAccount);
                    return selectedAccount;

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
