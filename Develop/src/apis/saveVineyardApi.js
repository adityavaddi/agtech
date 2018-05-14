import {AsyncStorage,Alert} from 'react-native';
import { getRanchProperties } from '../dataModel/RanchModelObject';

import Settings from '../store/setUp';
const settings = Settings.load();


export function saveVineyardApi(action) {

  var randomNumber = Math.floor((Math.random() * 100000) + 2);
  //console.log("randomNumber",randomNumber);

  const vineyardDataModel = {
	 [randomNumber]:{
			     "type": "vineyard",
            "name": action.data.VineName,
            "description":action.data.VineDesc,
            "ancestor": null,//noneed
            "id":randomNumber,//noneed
            "edited": "edited",//noneed
            "lastEditedTimestamp": 1481646934993,//noneed
            "state": "active",
            "measuringDevices":null,//noneed
            "measuredEntityProperties": null,//noneed
            "measuredEntityObjectives":null,//noneed
            "information": null,//noneed
            "annual":null,//noneed
            "keyDates": null,//noneed
            "measuredEntityLocation": action.data.VineyardCoordinates[0],
            "measuredEntityBoundaries": action.data.VineyardCoordinates
	}
}
  //console.log("vineyard model to push firebase by aditya",action);

  var vineyardUrl = settings.firebaseBaseUrl+action.data.selectedAccount.accountNumber+'/ranch/measuredEntity.json';
  //var vineyardUrl1 = settings.firebaseBaseUrl+action.data.accountnumber+'.json';
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
          body:JSON.stringify(vineyardDataModel)
        };
  return(
          fetch(vineyardUrl,obj)
            .then((res)=>res.json())
            .then((responseData) => {
              return(
                fetch(vineyardUrl1)
                  .then((response) => response.json())
                  .then((json) => {
                    //console.log("json in saveVineyard API", );
                     action.data.selectedAccount.ranch.push(json);
                     var localRanch = action.data.selectedAccount.ranch
                     var modifiedRanch = getRanchProperties(localRanch)
                     //console.log("modifiedRanch",modifiedRanch);
                     action.data.selectedAccount.ranch = modifiedRanch
                     var selectedAccount= action.data.selectedAccount;
                  
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
