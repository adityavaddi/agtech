import {AsyncStorage,Alert} from 'react-native';
import { getRanchProperties } from '../dataModel/RanchModelObject';

import Settings from '../store/setUp';
const settings = Settings.load();


export function createBlockApi(action) {

  var randomNumber = Math.floor((Math.random() * 100000000) + 1);
  //console.log("randomNumber",randomNumber);
  const BlockDataModel = {
	 [randomNumber]:{
             "type": "block",
             "name": action.data.selectedBlock.blockName,//change
             "description": action.data.selectedBlock.description,//change
             "ancestor": [
                 {
                   "id": action.data.selectedAccount.ranch[0].id,//action selected account ranch id
                   "name": action.data.selectedAccount.ranch[0].name,
                   "type": "vineyard",
                   "level": 0
                 }
             ],
             "id":randomNumber,//
             "edited": "added",
             "lastEditedTimestamp": null,
             "state": "active",
             "measuringDevices":null,
             "measuredEntityProperties": null,
             "measuredEntityObjectives": null,
             "information":null,
             "annual": null,
             "keyDates": null,
             "measuredEntityLocation":action.data.blockCoordinates[0],//
             "measuredEntityBoundaries":action.data.blockCoordinates//
   }
}
  //console.log("Block model to push firebase for block by akhil",action);
  var vineyardUrl = settings.firebaseBaseUrl+action.data.selectedAccount.accountNumber+'/ranch/measuredEntity.json';
  var vineyardUrl1 = settings.firebaseBaseUrl+action.data.selectedAccount.accountNumber+'/ranch/measuredEntity/'+randomNumber+'.json';

  //console.log("vineyardUrl",vineyardUrl);
        var value;
        var obj = {
          method : 'PATCH',
          headers: {
             'Access-Control-Allow-Credentials': true,
             'Access-Control-Allow-Origin': '*',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify(BlockDataModel)
        };
  return(
          fetch(vineyardUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardUrl1)
                  .then((response) => response.json())
                  .then((json) => {
                    var blockObj = {}
                    var selectedAccount ;
                    var blockID ;
                          if(json.state == 'active'){
                            action.data.selectedAccount.ranch.push(json)
                            var localRanch = action.data.selectedAccount.ranch

                            var modifiedRanch = getRanchProperties(localRanch)

                            action.data.selectedAccount.ranch = modifiedRanch
                            selectedAccount = action.data.selectedAccount;
                            blockID = json.id
                          }
                        blockObj= {selectedAccount,blockID}

                        return blockObj;

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
