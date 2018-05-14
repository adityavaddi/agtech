/**
 * Created by sampaas on 1/13/17.
 */
import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';
import { saveBlockDeviceDetail, updateFlowMeter } from '../actions/NavigationActions';

// Presentational component to connect to
import Flowmeter from '../components/Devices/Flowmeter';

//var isPressed = false;
const mapStateToProps = (state) => { // state: not filtered yet
  var isSavedSuccessful = false;
  var isUpdateSuccessful = false;
  var isSuccessful = false;

  //console.log("the updated selected account with added device bool value::->",state.DeviceReducer.isUpdateSuccessul);
      if(state.DeviceReducer.BlockDeviceSuccessResponse !== undefined && state.DeviceReducer.BlockDeviceSuccessResponse!=null){
        isSavedSuccessful = state.DeviceReducer.isBlockDeviceSuccessful;
        isSuccessful = true
          state.DeviceReducer.BlockDeviceSuccessResponse=null;
        state.DeviceReducer.isBlockDeviceSuccessful = false;
        var sobj = {isSuccessful,isSavedSuccessful}
        return sobj;
      }
      else  if(state.DeviceReducer.BlockDeviceErrorResponse !== undefined &&state.DeviceReducer.BlockDeviceErrorResponse!=null ){
          isSavedSuccessful = state.DeviceReducer.isBlockDeviceSuccessful;
          isSuccessful = true;
          state.DeviceReducer.BlockDeviceErrorResponse=null;
          state.DeviceReducer.isBlockDeviceSuccessful = false;
          var sobj = {isSuccessful,isSavedSuccessful}
          return sobj;
        }
      else if(state.DeviceReducer.BlockDeviceUpdateResponse !== undefined && state.DeviceReducer.BlockDeviceUpdateResponse!=null){
        isUpdateSuccessful = state.DeviceReducer.isUpdateBlockDeviceSuccessful;
        isSuccessful = true;
         state.DeviceReducer.BlockDeviceUpdateResponse=null;
        state.DeviceReducer.isUpdateBlockDeviceSuccessful = false;
        var sobj = {isSuccessful,isUpdateSuccessful}
        return sobj;
      }
      else if(state.DeviceReducer.BlockDeviceUpdateErrorResponse !== undefined && state.DeviceReducer.BlockDeviceUpdateErrorResponse!=null){
          isUpdateSuccessful = state.DeviceReducer.isUpdateBlockDeviceSuccessful;
          isSuccessful = true;
          state.DeviceReducer.BlockDeviceUpdateErrorResponse=null;
          state.DeviceReducer.isUpdateBlockDeviceSuccessful = false;
          var sobj = {isSuccessful,isUpdateSuccessful}
          return sobj;
      }
      else{
        var sobj = {isSuccessful,isUpdateSuccessful}
        return sobj;
      }

};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFlowMeter: (data,dataModal) => dispatch(updateFlowMeter(data,dataModal)),
        saveBlockDeviceDetail: (data,dataModal) => dispatch(saveBlockDeviceDetail(data,dataModal))
    };
};



// Connect container to presentational component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flowmeter);
