import { connect } from 'react-redux';
import Immutable from 'immutable';
import { pushDeviceList,deleteDevice } from '../actions/NavigationActions';
import DeviceListScreen from '../components/DeviceListScreen';
//import DeviceListScreenNew from '../components/DeviceListScreenNew';



const mapStateToProps = (state) => { // state: not filtered yet

  var isSuccessul = false;
  //console.log("the Device list container is",state.DeviceReducer.deleteResponse);

  if(state.DeviceReducer.deleteResponse !== undefined){
    var deletedAccount={};
    isDeleteSuccessful =  state.deleteFlag
    deletedAccount =state.DeviceReducer.deleteResponse;
    var deletedObject = {deletedAccount,isDeleteSuccessful}
    return{
      deletedObject
    }
  }
  else  if(state.DeviceReducer.deleteErrorResponse !== undefined){
    var deletedAccount={};
    isDeleteSuccessful = state.deleteFlag;
    state.DeviceReducer.isSuccessul = false;
    deletedAccount =state.DeviceReducer.deleteErrorResponse;
    var deletedObject  = { deletedAccount,isDeleteSuccessful};
    return{
      deletedObject
    }
  }
else{
  return{
    //devicesList:state.navigationReducer.selectedAccount.devices,
     selectedAccount:state.navigationReducer.selectedAccount
  }
}
};

const mapDispatchToProps = (dispatch) => {
    return {
      //onHeaderClick: (sectionID, expand) => dispatch(pushDeviceList(sectionID, expand)),
      onDeleteClick:(DeleteDeviceInfo,selectedAccount)=>dispatch(deleteDevice(DeleteDeviceInfo,selectedAccount))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeviceListScreen);
