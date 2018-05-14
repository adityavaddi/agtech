// import node modules
import { NavigationExperimental } from 'react-native';
import Immutable from 'immutable';
// import project files
import  * as actionTypes from '../constants/actionTypes';
import  { actionSignInRoute } from '../constants/actionRoutes';
// global initialization
const { StateUtils: NavigationStateUtils } = NavigationExperimental;
const initialState = actionSignInRoute;


// export navigation reducer pure function
export default (state = initialState, action) => {

      switch (action.type) {

            // *kaustubh: below switch case not used yet by any dispatch
            // case actionTypes.PUSH_ROUTE:
            //     if (state.routes[state.index].key === (action.route && action.route.key))
            //         return state;
            //     return NavigationStateUtils.push(state, action.route);

            case actionTypes.POP_ROUTE:
                if (state.index === 0 || state.routes.length === 1)
                    return state;
                return NavigationStateUtils.pop(state);

            case actionTypes.SIGNIN_SUCCESS:
                if (state.routes[state.index].key === (action.route && action.route.key)) return state

                return NavigationStateUtils.push(state, action.route);

            //*kaustubh: not needed, commenting as of now
            // case actionTypes.SIGNIN_ERROR:
            //     return NavigationStateUtils.push(state, action.route);

            case actionTypes.PUSH_ADD_DEVICE:
              if (state.routes[state.index].key === (action.route && action.route.key)) return state
                return NavigationStateUtils.push(state, action.route)

            case actionTypes.PUSH_DEVICE_LIST_DEMO:
              if (state.routes[state.index].key === (action.route && action.route.key)) return state
                return NavigationStateUtils.push(state, action.route)

            case actionTypes.PUSH_GATE_WEATHER_DEVICE:
            //  console.log("action.route in PUSH_GATE_WEATHER_DEVICE", action.data);
              state.deviceInfo = action.data;
            //  console.log("After in state.deviceInfo",state.deviceInfo);

              state.selectedAccount = action.route.selectedAccount;
              if(NavigationStateUtils.has(state,action.route.key)){
                return NavigationStateUtils.jumpTo(state,  action.route.key)
              }
              return NavigationStateUtils.push(state, action.route,action.data);

              case actionTypes.PUSH_FLOWMETER:
                state.deviceInfo = action.data;
                state.selectedAccount = action.route.selectedAccount;
                if(NavigationStateUtils.has(state,action.route.key)){
                  return NavigationStateUtils.jumpTo(state,  action.route.key)
                }
                return NavigationStateUtils.push(state, action.route,action.data);


            case actionTypes.PUSH_SHOW_BLOCKS_LIST:
            //   var blocksArray = action.data;
            //   blocksArray.shift();
               //console.log("Blocks array in navigation reducer:;",action);
              state.blocksList = action.data;
              state.selectedAccount = action.route.selectedAccount;
              if(NavigationStateUtils.has(state,action.route.key)){
                return NavigationStateUtils.jumpTo(state,  action.route.key)
              }
              return NavigationStateUtils.push(state, action.route,action.data);

            case actionTypes.PUSH_SHOW_BLOCK:
            //state.blockInfo = action.data;
            state.selectedAccount = action.data;
            if(NavigationStateUtils.has(state,action.route.key)){
              return NavigationStateUtils.jumpTo(state,  action.route.key)
            }
            return NavigationStateUtils.push(state, action.route,action.data);


            case actionTypes.PUSH_SHOW_BLOCKS_PROPERTY:
            //console.log("PUSH_SHOW_BLOCKS_PROPERTY",action);
            if(action.data.actionType == 'edit'){
                  state.selectedAccount = action.data.selectedAccount;
                  state.selectedBlock   = action.data.selectedBlock;
                  state.actionType      = action.data.actionType;
                  state.blockparammeterSaved = false;
                  state.blockproductionSaved = false;
                  state.blockSoilSaved  = false;
                  state.blockAnnualSaved  = false;
                  state.blockKeyDatesSaved  = false;
            }
            else{
                  state.selectedAccount = action.data;
                  state.blockID = action.route.blockID;
                  state.blockparammeterSaved = action.route.blockparammeterSaved;
                  state.blockproductionSaved = action.route.blockproductionSaved;
                  state.blockSoilSaved  = action.route.blockSoilSaved;
                  state.blockAnnualSaved  = action.route.blockAnnualSaved;
                  state.blockKeyDatesSaved  = action.route.blockKeyDatesSaved;
            }

            if(NavigationStateUtils.has(state,action.route.key)){
              return NavigationStateUtils.jumpTo(state,  action.route.key)
            }
            return NavigationStateUtils.push(state, action.route,action.data);

            case actionTypes.PUSH_SHOW_BLOCK_DETAILS:
            //console.log("PUSH_SHOW_BLOCK_DETAILS",action);
            if(action.actionType == 'edit'){
                  state.selectedblockType = action.data.selectedblockType;
                  state.actionType = action.actionType;
                  state.blockInfo = action.data.blockInfo;
            }
            else{
            state.selectedblockType = action.data.selectedblockType;
            state.blockInfo = action.data.blockInfo;
            }



            if(NavigationStateUtils.has(state,action.route.key)){
              return NavigationStateUtils.jumpTo(state,  action.route.key)
            }
            return NavigationStateUtils.push(state, action.route,action.data);




            case actionTypes.PUSH_SHOW_DEVICE:

              state.devicesList = action.data;
              if(NavigationStateUtils.has(state,action.route.key)){
                return NavigationStateUtils.jumpTo(state, action.route.key)
              }
              return NavigationStateUtils.push(state, action.route,action.data);

            case actionTypes.PUSH_ACCOUNT_DETAIL:
              state.selectedAccount = action.data;
              //console.log("selectedAccount in PUSH_ACCOUNT_DETAIL", state.selectedAccount);
              if (state.routes[state.index].key === (action.route && action.route.key)) return state

              return NavigationStateUtils.push(state, action.route);


              case actionTypes.PUSH_BLOCK_MAP:
              //state.selectedAccount.ranch.measuredEntityBoundaries= action.data;
              state.blockCoordinates= action.data;
                return NavigationStateUtils.push(state, action.route, action.data);

              case actionTypes.PUSH_VINEYARD_DETAIL:
            //  console.log("action.route in PUSH_VINEYARD_DETAIL", action.route);
              //state.selectedAccount = action.route.selectedAccount;
              state.VineCoordinates= action.data;
            //  console.log("state. selectedAccount in PUSH_VINEYARD_DETAIL", state.selectedAccount);
                return NavigationStateUtils.push(state, action.route, action.data);

              // case actionTypes.SAVE_VINEYARD:
              // state.selectedAccount = action.data;
              //   return NavigationStateUtils.push(state, action.route, action.data);

            case actionTypes.DISPLAY_MAP:
                state.selectedAccount = action.selectedAccount;
                state.deviceDataModal = action.deviceDataModal;
                // for(var i=0;i<state.routes.length;i++){
                //     if(action.route.key==state.routes[i].key){
                //      state.routes.splice(i, 1);
                //    }
                //  }
                 if(NavigationStateUtils.has(state,action.route.key)){
                   //console.log("we are in jumpTo", state);
                   return NavigationStateUtils.jumpTo(state, action.route.key)
                 }
                 //console.log("other case of jumpTo", state);
                return NavigationStateUtils.push(state, action.route,action.data,action.deviceDataModal, action.selectedAccount);

            //*kaustubh: not needed, commenting as of now
            // case actionTypes.GET_DEVICES_SUCCESS:
            //     return NavigationStateUtils.push(state,action.route);
            // case actionTypes.GET_VINEYARD_SUCCESS:
            //      state.selectedAccount = action.data;
            //      for(var i=0;i<state.routes.length;i++){
            //          if(action.route.key==state.routes[i].key){
            //           state.routes.splice(i, 1);
            //         }
            //       }
            //     // console.log("state in navigationReducer getPolygon", state);
            //   return NavigationStateUtils.push(state,action.route);

                // case actionTypes.SEARCH_SUCCESS:
                // console.log("state,action.route",state,action.route);
                //     return NavigationStateUtils.push(state,action.route);

            //Map


            default:
                return state;
      } // switch end
} // function end
