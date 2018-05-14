import Settings from '../store/setUp';
const settings = Settings.load();

export function searchList(action) {
  // var randomNumber = Math.floor((Math.random() * 1000000) + 1);
  // console.log("randomNumber",randomNumber);
    const url = settings.fBgetCustomersURL;
    //console.log("firebase url called",url);
     const state={};
     return(
       fetch(url)
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log("responseJson",responseJson);
            return responseJson;
            })
         .catch((error) => {
           console.error(error);
         })
     );
};
