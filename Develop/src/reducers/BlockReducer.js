import  * as actionTypes from '../constants/actionTypes';

import Immutable from 'immutable';



export default (state = {}, action) => {// do not assign routes array to state
  //console.log("state in BlockReducer", action);

  switch (action.type) {
      case actionTypes.CREATE_BLOCK_SUCCESS:
      state = Immutable
                  .fromJS(state)
                  .set('blockSuccessResponse', action.payload.blockSuccessResponse)
                  .set('isSuccessfulBlock', true)
                  .toJS();
                  //console.log("state in block success", state.blockSuccessResponse);

        return state;
        case actionTypes.CREATE_BLOCK_FAIL:
        state = Immutable
                .fromJS(state)
                .set('blockErrorResponse', action.payload.blockErrorResponse)
                .set('isSuccessfulBlock', false)
                .toJS();
        return state;

        case actionTypes.SAVE_BLOCK_PARAMETER_SUCCESS:
        state = Immutable
                    .fromJS(state)
                    .set('blockParameterResponse', action.payload.blockParameterResponse)
                    .set('isBlockParameter', true)
                    .toJS();
                    //console.log("state in block success", state.blockParameterResponse);

          return state;
          case actionTypes.SAVE_BLOCK_PARAMETER_FAIL:
          state = Immutable
                  .fromJS(state)
                  .set('blockParameterErrorResponse', action.payload.blockParameterErrorResponse)
                  .set('isBlockParameter', false)
                  .toJS();
          return state;

          case actionTypes.SAVE_BLOCK_PRODUCTION_OBJ_SUCCESS:
          state = Immutable
                      .fromJS(state)
                      .set('blockProductionResponse', action.payload.blockProductionResponse)
                      .set('isBlockProduction', true)
                      .toJS();
                      //console.log("state in block success", state.blockParameterResponse);
            return state;
            case actionTypes.SAVE_BLOCK_PRODUCTION_OBJ_FAIL:
            state = Immutable
                    .fromJS(state)
                    .set('blockProductionErrorResponse', action.payload.blockProductionErrorResponse)
                    .set('isBlockProduction', false)
                    .toJS();
            return state;

            case actionTypes.SAVE_BLOCK_SOIL_INFO_SUCCESS:
            state = Immutable
                        .fromJS(state)
                        .set('blockSoilInfoResponse', action.payload.blockSoilInfoResponse)
                        .set('isBlockSoilInfo', true)
                        .toJS();
                        //console.log("state in block success", state.blockParameterResponse);
              return state;
              case actionTypes.SAVE_BLOCK_SOIL_INFO_FAIL:
              state = Immutable
                      .fromJS(state)
                      .set('blockSoilInfoErrorResponse', action.payload.blockSoilInfoErrorResponse)
                      .set('isBlockSoilInfo', false)
                      .toJS();
              return state;

              case actionTypes.SAVE_BLOCK_ANNUAL_VAR_SUCCESS:
              state = Immutable
                          .fromJS(state)
                          .set('blockAnnualResponse', action.payload.blockAnnualResponse)
                          .set('isBlockAnnual', true)
                          .toJS();
                          //console.log("state in block success", state.blockParameterResponse);
                return state;
                case actionTypes.SAVE_BLOCK_ANNUAL_VAR_FAIL:
                state = Immutable
                        .fromJS(state)
                        .set('blockAnnualErrorResponse', action.payload.blockAnnualErrorResponse)
                        .set('isBlockAnnual', false)
                        .toJS();
                return state;


                case actionTypes.SAVE_BLOCK_KEY_DATES_SUCCESS:
                state = Immutable
                            .fromJS(state)
                            .set('blockKeyDatesResponse', action.payload.blockKeyDatesResponse)
                            .set('isBlockKeyDates', true)
                            .toJS();
                            //console.log("state in block success", state.blockParameterResponse);
                  return state;
                  case actionTypes.SAVE_BLOCK_KEY_DATES_FAIL:
                  state = Immutable
                          .fromJS(state)
                          .set('blockKeyDatesErrorResponse', action.payload.blockKeyDatesErrorResponse)
                          .set('isBlockKeyDates', false)
                          .toJS();
                  return state;

                  //Update the Block Parameter.
                  case actionTypes.UPDATE_BLOCK_PARAMETER_SUCCESS:
                  state = Immutable
                              .fromJS(state)
                              .set('updateblockParameterResponse', action.payload.updateblockParameterResponse)
                              .set('isUpdateBlockParameter', true)
                              .toJS();
                              //console.log("state in block success", state.updateblockParameterResponse);

                    return state;
                    case actionTypes.UPDATE_BLOCK_PARAMETER_FAIL:
                    state = Immutable
                            .fromJS(state)
                            .set('updateblockParameterErrorResponse', action.payload.updateblockParameterErrorResponse)
                            .set('isUpdateBlockParameter', false)
                            .toJS();
                    return state;

                    case actionTypes.UPDATE_BLOCK_PRODUCTION_OBJ_SUCCESS:
                    state = Immutable
                                .fromJS(state)
                                .set('updateblockProductionResponse', action.payload.updateblockProductionResponse)
                                .set('isUpdateBlockProduction', true)
                                .toJS();
                                //console.log("state in block success", state.blockParameterResponse);
                      return state;
                      case actionTypes.UPDATE_BLOCK_PRODUCTION_OBJ_FAIL:
                      state = Immutable
                              .fromJS(state)
                              .set('updateblockProductionErrorResponse', action.payload.updateblockProductionErrorResponse)
                              .set('isUpdateBlockProduction', false)
                              .toJS();
                      return state;

                      case actionTypes.UPDATE_BLOCK_SOIL_INFO_SUCCESS:
                      state = Immutable
                                  .fromJS(state)
                                  .set('updateblockSoilInfoResponse', action.payload.updateblockSoilInfoResponse)
                                  .set('isUpdateBlockSoilInfo', true)
                                  .toJS();
                                  //console.log("state in block success", state.updateblockSoilInfoResponse);
                        return state;
                        case actionTypes.UPDATE_BLOCK_SOIL_INFO_FAIL:
                        state = Immutable
                                .fromJS(state)
                                .set('updateblockSoilInfoErrorResponse', action.payload.updateblockSoilInfoErrorResponse)
                                .set('isUpdateBlockSoilInfo', false)
                                .toJS();
                        return state;

                        case actionTypes.UPDATE_BLOCK_ANNUAL_VAR_SUCCESS:
                        state = Immutable
                                    .fromJS(state)
                                    .set('updateblockAnnualResponse', action.payload.updateblockAnnualResponse)
                                    .set('isUpdateBlockAnnual', true)
                                    .toJS();
                                    //console.log("state in block success", state.blockParameterResponse);
                          return state;
                          case actionTypes.UPDATE_BLOCK_ANNUAL_VAR_FAIL:
                          state = Immutable
                                  .fromJS(state)
                                  .set('updateblockAnnualErrorResponse', action.payload.updateblockAnnualErrorResponse)
                                  .set('isUpdateBlockAnnual', false)
                                  .toJS();
                          return state;


                          case actionTypes.UPDATE_BLOCK_KEY_DATES_SUCCESS:
                          state = Immutable
                                      .fromJS(state)
                                      .set('updateblockKeyDatesResponse', action.payload.updateblockKeyDatesResponse)
                                      .set('isUpdateBlockKeyDates', true)
                                      .toJS();
                                      //console.log("state in block success", state.blockParameterResponse);
                            return state;
                            case actionTypes.UPDATE_BLOCK_KEY_DATES_FAIL:
                            state = Immutable
                                    .fromJS(state)
                                    .set('updateblockKeyDatesErrorResponse', action.payload.updateblockKeyDatesErrorResponse)
                                    .set('isUpdateBlockKeyDates', false)
                                    .toJS();
                            return state;

                            case actionTypes.DELETE_BLOCK_SUCCESS:
                            state = Immutable
                                        .fromJS(state)
                                        .set('deleteBlockResponse', action.payload.deleteBlockResponse)
                                        .set('isDeleteBlock', true)
                                        .toJS();
                                        //console.log("state in block delete success by akhil", state.deleteBlockResponse);
                              return state;
                              case actionTypes.DELETE_BLOCK_FAIL:
                              state = Immutable
                                      .fromJS(state)
                                      .set('deleteBlockErrorResponse', action.payload.deleteBlockErrorResponse)
                                      .set('isDeleteBlock', false)
                                      .toJS();
                              return state;

    default:
      return state;
  }
}
