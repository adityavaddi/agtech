
import Immutable from 'immutable';
//Action types
import  * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => { // do not assign routes array to state
//console.log('Device Reducer:: ',action)
      switch (action.type) {


        case actionTypes.SAVE_VIN_DEVICE_SUCCESS:
          state = Immutable
                  .fromJS(state)
                  .set('VinDeviceSuccessResponse', action.payload.VinDeviceSuccessResponse)
                  .set('isSuccessful', true)
                  .toJS();
                  //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceSuccessResponse);
          return state;
          case actionTypes.SAVE_VIN_DEVICE_FAIL:
            state = Immutable
                    .fromJS(state)
                    .set('VinDeviceErrorResponse', action.payload.VinDeviceErrorResponse)
                    .set('isSuccessful', false)
                    .toJS();
                    //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceSuccessResponse);
            return state;

          case actionTypes.UPDATE_VIN_DEVICE_SUCCESS:
            state = Immutable
                    .fromJS(state)
                    .set('VinDeviceUpdateResponse', action.payload.VinDeviceUpdateResponse)
                    .set('isUpdateSuccessful', true)
                    .toJS();
                    console.log("DEvice reducer with Updated device data",action.payload.VinDeviceUpdateResponse);
            return state;

            case actionTypes.UPDATE_VIN_DEVICE_FAIL:
              state = Immutable
                      .fromJS(state)
                      .set('VinDeviceUpdateErrorResponse', action.payload.VinDeviceUpdateErrorResponse)
                      .set('isUpdateSuccessful', false)
                      .toJS();
                      //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceUpdateResponse);
              return state;

              case actionTypes.SAVE_BLOCK_DEVICE_SUCCESS:
                state = Immutable
                        .fromJS(state)
                        .set('BlockDeviceSuccessResponse', action.payload.BlockDeviceSuccessResponse)
                        .set('isBlockDeviceSuccessful', true)
                        .toJS();
                        //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceSuccessResponse);
                return state;
                case actionTypes.SAVE_BLOCK_DEVICE_FAIL:
                  state = Immutable
                          .fromJS(state)
                          .set('BlockDeviceErrorResponse', action.payload.BlockDeviceErrorResponse)
                          .set('isBlockDeviceSuccessful', false)
                          .toJS();
                          //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceSuccessResponse);
                  return state;

                case actionTypes.UPDATE_BLOCK_DEVICE_SUCCESS:
                  state = Immutable
                          .fromJS(state)
                          .set('BlockDeviceUpdateResponse', action.payload.BlockDeviceUpdateResponse)
                          .set('isUpdateBlockDeviceSuccessful', true)
                          .toJS();
                          //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceUpdateResponse);
                  return state;

                  case actionTypes.UPDATE_BLOCK_DEVICE_FAIL:
                    state = Immutable
                            .fromJS(state)
                            .set('BlockDeviceUpdateErrorResponse', action.payload.BlockDeviceUpdateErrorResponse)
                            .set('isUpdateBlockDeviceSuccessful', false)
                            .toJS();
                            //console.log("DEvice reducer with Updated device data",action.payload.VinDeviceUpdateResponse);
                    return state;

          case actionTypes.DELETE_DEVICE_SUCCESS:
            state = Immutable
                    .fromJS(state)
                    .set('deleteResponse', action.payload.deleteDeviceResponse)
                    .set('deleteFlag', true)
                    .toJS();
                    //console.log("DEvice reducer with deleted data",action.payload.deleteDeviceResponse);
            return state;

          case actionTypes.DELETE_DEVICE_FAIL:
            state = Immutable
                    .fromJS(state)
                    .set('deleteErrorResponse', action.payload.deleteErrorResponse)
                    .set('deleteFlag', false)
                    .toJS();
                  //console.log("DEvice reducer withOut akhil deleted data",action.payload.deleteErrorResponse);
            return state;
          default:
            return state;
      }
}
