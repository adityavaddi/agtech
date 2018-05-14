import  * as actionTypes from '../constants/actionTypes';

import Immutable from 'immutable';



function mapPolygon (state = {}, action) { // do not assign routes array to state
  //console.log("state in MapReducer", action.type);

  switch (action.type) {
    case actionTypes.GET_VINEYARD_SUCCESS:
    state = Immutable
                .fromJS(state)
                .set('polygonPayload', action.payload.polygonSuccessResponse)
                .set('isSuccessfulVineyard', true)
                .toJS();
                //console.log("state in get Poly SUCCESS", state);
      return state;
      case actionTypes.GET_VINEYARD_FAIL:
      state = Immutable
              .fromJS(state)
              .set('polygonPayloadError', action.payload.polygonErrorResponse)
              .set('isSuccessfulVineyard', false)
              .toJS();
      return state;

      // case actionTypes.CREATE_BLOCK_SUCCESS:
      // state = Immutable
      //             .fromJS(state)
      //             .set('blockSuccessResponse', action.payload.blockSuccessResponse)
      //             .set('isSuccessfulBlock', true)
      //             .toJS();
      //             console.log("state in block success", state.MapReducer.blockSuccessResponse);
      //
      //   return state;
      //   case actionTypes.CREATE_BLOCK_FAIL:
      //   state = Immutable
      //           .fromJS(state)
      //           .set('blockErrorResponse', action.payload.blockErrorResponse)
      //           .set('isSuccessfulBlock', false)
      //           .toJS();
      //   return state;
    default:
      return state;
  }
}

export default mapPolygon;
