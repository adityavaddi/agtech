import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';

import { saveVineyardDeviceDetail,updateVineyardDeviceDetail} from '../actions/NavigationActions';


// Presentational component to connect to
import GateWeather from '../components/Devices/GateWeather';

//var isPressed = false;
const mapStateToProps = (state) => {
var isSavedSuccessful = false;
var isUpdateSuccessful = false;
var isSuccessful = false;

//console.log("the updated selected account with added device bool value::->",state.DeviceReducer);
    if(state.DeviceReducer.VinDeviceSuccessResponse !== undefined && state.DeviceReducer.VinDeviceSuccessResponse !=null){
      isSavedSuccessful = state.DeviceReducer.isSuccessful;
      isSuccessful = true;
        state.DeviceReducer.VinDeviceSuccessResponse=null;
      state.DeviceReducer.isSuccessful = false;
      var sobj = {isSuccessful,isSavedSuccessful}
      return sobj;
    }
    else  if(state.DeviceReducer.VinDeviceErrorResponse !== undefined && state.DeviceReducer.VinDeviceErrorResponse!=null){
        isSavedSuccessful = state.DeviceReducer.isSuccessful;
        isSuccessful = true
        state.DeviceReducer.VinDeviceErrorResponse=null;
        state.DeviceReducer.isSuccessful = false;
        var sobj = {isSuccessful,isSavedSuccessful}
        return sobj;
      }
    else if(state.DeviceReducer.VinDeviceUpdateResponse !== undefined && state.DeviceReducer.VinDeviceUpdateResponse!=null){
       // console.log('expecting response here ********');
      isUpdateSuccessful = state.DeviceReducer.isUpdateSuccessful;
      isSuccessful = true
        state.DeviceReducer.VinDeviceUpdateResponse=null;

      state.DeviceReducer.isUpdateSuccessful = false;
      var sobj = {isSuccessful,isUpdateSuccessful}
      return sobj;
    }
    else if(state.DeviceReducer.VinDeviceUpdateErrorResponse !== undefined && state.DeviceReducer.VinDeviceUpdateErrorResponse!=null){
        //console.log('expecting response here ********');
        isUpdateSuccessful = state.DeviceReducer.isUpdateSuccessful;
        isSuccessful = true
        state.DeviceReducer.VinDeviceUpdateResponse=null;

        state.DeviceReducer.isUpdateSuccessful = false;
        var sobj = {isSuccessful,isUpdateSuccessful}
        return sobj;
    }
    else{
       // console.log(' not expecting response here ********');
      var sobj = {isSavedSuccessful,isUpdateSuccessful}
      return sobj;
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        updateVineyardDeviceDetail: (data,dataModal) => dispatch(updateVineyardDeviceDetail(data,dataModal)),
        saveVineyardDeviceDetail: (data,dataModal) => dispatch(saveVineyardDeviceDetail(data,dataModal))
    };
};

// Connect container to presentational component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GateWeather);
