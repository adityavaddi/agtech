import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';

import { saveVineyard } from '../actions/NavigationActions';


// Presentational component to connect to
import VineyardDetail from '../components/VineyardDetail';


const mapStateToProps = (state) => {
  //console.log("state in VineyardContainer", state);
  var VineCoordinates= state.navigationReducer.VineCoordinates;
  var isSuccessfulVineyard =false;
    if(state.MapReducer.polygonPayload !== undefined){
      isSuccessfulVineyard = state.MapReducer.isSuccessfulVineyard;
      //console.log("isSuccessfulVineyard::  ",isSuccessfulVineyard);
      var polygonPayload = state.MapReducer.polygonPayload;
    }
    return {isSuccessfulVineyard , polygonPayload, VineCoordinates};

}
const mapDispatchToProps = (dispatch) => {
    return {
        saveVineyard: (data) => dispatch(saveVineyard(data))
    };
};
// Connect container to presentational component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VineyardDetail);
