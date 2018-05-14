import {AsyncStorage,Alert} from 'react-native';

import Settings from '../store/setUp';
const settings = Settings.load();


export function updateVineyardDeviceApi(action) {

  var randomNumber = Math.floor((Math.random() * 1000000) + 1);
  //console.log("randomNumber",randomNumber);

  const vineyardDeviceModel = {
	 [action.data.id]:{
              "type":action.data.type,
              "id":action.data.id,
              "name":action.data.name,
              "serialNumber":action.data.serialNumber,
              "ancestorPath":null,
              "ancestor":null,
              "edited":action.data.edited,
              "attributes":null,
              "state":"active",
              "lastEditedTimestamp":1481650889434,
              "verificationStatus":null,
              "measuredEntity":null ,
              "location":action.data.location
	}
}
  // console.log("vineyard Device model from action",action);
  // console.log("vineyard Device model to push firebase",vineyardDeviceModel);

  var vineyardDeviceUrl = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/devices.json';
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
          body:JSON.stringify(vineyardDeviceModel)
        };
        // return null
  return(
          fetch(vineyardDeviceUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardDeviceUrl1)
                  .then((response) => response.json())
                  .then((json) => {
                      //updated selected account localy with server response
                    //  action.dataModal.devices.push(json)
                    //  var selectedAccount = action.dataModal
                    //console.log("updated selected account in api",json);

                    var localDevices = action.dataModal.devices
                    for(var key in localDevices){
                      //console.log("localDevices[key]",localDevices[key])
                      if(localDevices[key].id == json.id){
                        localDevices[key] = json
                      }
                    }
                    //console.log("local devices",localDevices);
                    action.dataModal.devices = localDevices;
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
