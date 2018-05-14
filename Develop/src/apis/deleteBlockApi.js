import {AsyncStorage,Alert} from 'react-native';
import { getRanchProperties } from '../dataModel/RanchModelObject';

import Settings from '../store/setUp';
const settings = Settings.load();


export function deleteBlockApi(action) {


   //console.log("vineyard Device model from action",action);
  // console.log("vineyard Device model to push firebase",vineyardDeviceModel);
    const deleteBlockModel = {

          "state":"inactive"
    }

  var vineyardDeviceUrl = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/measuredEntity/'+action.data.id+'.json';
  var vineyardDeviceUrl1 = settings.firebaseBaseUrl+action.dataModal.accountNumber+'/ranch/measuredEntity/'+action.data.id+'.json';


  // console.log("vineyardUrl",vineyardDeviceUrl);
  // console.log("vineyardUrl",vineyardDeviceUrl1);
        var obj = {
          method : 'PATCH',
          headers: {
             'Access-Control-Allow-Credentials': true,
             'Access-Control-Allow-Origin': '*',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify(deleteBlockModel)
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

                    var localRanch = action.dataModal.ranch
                    var activeRanch = []
                    for(var key in localRanch){
                      //console.log("localDevices[key]",localDevices[key])
                      if(localRanch[key].id == json.id){
                        localRanch[key] = json
                      }
                      if(localRanch[key].state == 'active'){
                        activeRanch.push(localRanch[key])
                      }
                    }
                    // console.log("local devices",localDevices);
                    // console.log("local devices",activeDevices);
                    var modifiedRanch = getRanchProperties(activeRanch)
                    action.dataModal.ranch = modifiedRanch;
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
