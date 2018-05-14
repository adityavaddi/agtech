
import Immutable from 'immutable';
//Action types
import  * as actionTypes from '../constants/actionTypes';

export default (state = {}, action) => { // do not assign routes array to state
//console.log('Search reducer action payload:: ',action.payload)
      switch (action.type) {

          case actionTypes.SEARCH_SUCCESS:
            state = Immutable
                    .fromJS(state)
                    .set('searchResponse', action.payload.searchSuccessResponse)
                    .set('searchText', action.payload.searchtext)
                    .toJS();
                    //console.log("SEARCH_SUCCESS response", state);
            return state;

          case actionTypes.SEARCH_FAIL:
            state = Immutable
                    .fromJS(state)
                    .set('searchErrorResponse', action.payload.message)
                    .set('searchText', '')
                    .toJS();
            return state;

          case actionTypes.CLEAR_SEARCH:
          //console.log('Clear search')
            // get account detail from state using account index passed in action
            state = Immutable
                    .fromJS(state)
                    .set('searchResponse', undefined)
                    .set('searchText', '')
                    .toJS();
            return state;

          default:
            return state;
      }
}
