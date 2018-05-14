import { connect } from 'react-redux';
import { saveBlockMap } from '../actions/NavigationActions';
import BlockInfo from '../components/Blocks/blockInfo';

const mapStateToProps = (state) => {
  // state: not filtered yet
    if(state.BlockReducer.blockSuccessResponse !== undefined){
     var selectedAccount={};
     isBlockSuccessful =   state.BlockReducer.isSuccessfulBlock
     state.BlockReducer.isSuccessfulBlock = false;
     //blockCoordinates = state.navigationReducer.blockCoordinates;
     selectedAccount  =  state.BlockReducer.blockSuccessResponse.selectedAccount;
     blockID   = state.BlockReducer.blockSuccessResponse.blockID;
     var blockObject = {selectedAccount,isBlockSuccessful,blockID,blockCoordinates}
     return{
       blockObject
     }
   }
    else{
      //console.log("we are in else by akhil");
      // var selectedAccount = {}
      // var blockObject={};
      //   selectedAccount = state.navigationReducer.selectedAccount;
         blockCoordinates = state.navigationReducer.blockCoordinates;
        // blockObject = {selectedAccount,blockCoordinates}
        return {
          blockCoordinates
        };
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
      saveBlockMap: (data) => dispatch(saveBlockMap(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockInfo);
