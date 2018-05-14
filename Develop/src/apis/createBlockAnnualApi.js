import {AsyncStorage,Alert} from 'react-native';
import { getRanchProperties } from '../dataModel/RanchModelObject';

import Settings from '../store/setUp';
const settings = Settings.load();


export function createBlockAnnualApi(action) {

  //var randomNumber = Math.floor((Math.random() * 10000000) + 1);
  //console.log("randomNumber",randomNumber);
  const BlockAnnualDataModel = {
	 [action.blockData.id]:{
             "type": action.blockData.type,
             "name": action.blockData.name,//change
             "description": action.blockData.description,//change
             "ancestor":action.blockData.ancestor,
             "id":action.blockData.id,//
             "edited": action.blockData.edited,
             "lastEditedTimestamp": null,
             "state": action.blockData.state,
             "measuringDevices":action.blockData.measuringDevices!==undefined?action.blockData.measuringDevices:null,
             "measuredEntityProperties": action.blockData.measuredEntityProperties!==undefined ?action.blockData.measuredEntityProperties:null,
             "measuredEntityObjectives": action.blockData.measuredEntityObjectives!==undefined ?action.blockData.measuredEntityObjectives:null,
             "information":action.blockData.information!==undefined?action.blockData.information:null,
             "annual": action.data,
             "keyDates": action.blockData.keyDates!==undefined?action.blockData.keyDates:null,
             "measuredEntityLocation":action.blockData.measuredEntityLocation,//
             "measuredEntityBoundaries":action.blockData.measuredEntityBoundaries//
   }
}


   //console.log("Block model to push firebase",action);
  // console.log("Block model to push firebase with updated object",BlockParameterDataModel);
   var vineyardUrl = settings.firebaseBaseUrl+action.selectedAccount.accountNumber+'/ranch/measuredEntity.json';
   var vineyardUrl1 = settings.firebaseBaseUrl+action.selectedAccount.accountNumber+'/ranch/measuredEntity/'+action.blockData.id+'.json';

  //console.log("vineyardUrl",vineyardUrl,vineyardUrl1);

        var obj = {
          method : 'PATCH',
          headers: {
             'Access-Control-Allow-Credentials': true,
             'Access-Control-Allow-Origin': '*',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify(BlockAnnualDataModel)
        };
  return(
          fetch(vineyardUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardUrl1)
                  .then((response) => response.json())
                  .then((json) => {

                        var localRanch = action.selectedAccount.ranch
                        for(var key in localRanch){
                          if(localRanch[key].id == json.id){
                            localRanch[key] = json
                          }
                        }
                        var modifiedRanch = getRanchProperties(localRanch)
                        //console.log("modifiedRanch",modifiedRanch);
                        action.selectedAccount.ranch = modifiedRanch
                        var selectedAccount = action.selectedAccount;
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
