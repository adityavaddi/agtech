import { connect } from 'react-redux';
import { saveBlockParametersInfo,saveProductionObjInfo,saveSoilInfo,saveAnnualVariablesInfo,saveKeydatesInfo,updateBlockParametersInfo,updateProductionObjInfo,updateSoilInfo,updateAnnualVariablesInfo,updateKeydatesInfo} from '../actions/NavigationActions';

import BlockDetails from '../components/Blocks/blockDetails';


const mapStateToProps = (state) => { // state: not filtered yet
  //console.log('Block Details Container:: ',state)

    if(state.BlockReducer.blockParameterResponse !== undefined && state.BlockReducer.isBlockParameter){
      var selectedAccount={};
      isBlockParameter =   state.BlockReducer.isBlockParameter
      state.BlockReducer.isBlockParameter = false;
      selectedAccount   =   state.BlockReducer.blockParameterResponse;
      var blockObject = {selectedAccount,isBlockParameter}
      return{
        blockObject
      }
    }

    else if(state.BlockReducer.blockProductionResponse !== undefined && state.BlockReducer.isBlockProduction){
      //console.log("we are in block Production response");
      var selectedAccount={};
      isBlockProduction =   state.BlockReducer.isBlockProduction
      state.BlockReducer.isBlockProduction = false;
      selectedAccount   =   state.BlockReducer.blockProductionResponse;
      var blockProdObject = {selectedAccount,isBlockProduction}
      return{
        blockProdObject
      }
    }

    else if(state.BlockReducer.blockSoilInfoResponse !== undefined && state.BlockReducer.isBlockSoilInfo){
      //console.log("we are in block SoilInfo response");
      var selectedAccount={};
      isBlockSoilInfo =   state.BlockReducer.isBlockSoilInfo
      state.BlockReducer.isBlockSoilInfo = false;
      selectedAccount   =   state.BlockReducer.blockSoilInfoResponse;
      var blockSoilInfoObject = {selectedAccount,isBlockSoilInfo}
      return{
        blockSoilInfoObject
      }
    }

    else if(state.BlockReducer.blockAnnualResponse !== undefined && state.BlockReducer.isBlockAnnual){
      //console.log("we are in block Annual response");
      var selectedAccount={};
      isBlockAnnual =   state.BlockReducer.isBlockAnnual
      state.BlockReducer.isBlockAnnual = false;
      selectedAccount   =   state.BlockReducer.blockAnnualResponse;
      var blockAnnualObject = {selectedAccount,isBlockAnnual}
      return{
        blockAnnualObject
      }
    }

    else if(state.BlockReducer.blockKeyDatesResponse !== undefined && state.BlockReducer.isBlockKeyDates){
      //console.log("we are in block Keydates response");
      var selectedAccount={};
      isBlockKeyDates =   state.BlockReducer.isBlockKeyDates
      state.BlockReducer.isBlockKeyDates = false;
      selectedAccount   =   state.BlockReducer.blockKeyDatesResponse;
      var blockKeyDatesObject = {selectedAccount,isBlockKeyDates}
      return{
        blockKeyDatesObject
      }
    }

    else if(state.BlockReducer.updateblockParameterResponse !== undefined && state.BlockReducer.isUpdateBlockParameter){
      var selectedAccount={};
      isUpdateBlockParameter =   state.BlockReducer.isUpdateBlockParameter
      state.BlockReducer.isUpdateBlockParameter = false;
      selectedAccount   =   state.BlockReducer.updateblockParameterResponse;
      var updatedBlockObject = {selectedAccount,isUpdateBlockParameter}
      return{
        updatedBlockObject
      }
    }

    else if(state.BlockReducer.updateblockProductionResponse !== undefined && state.BlockReducer.isUpdateBlockProduction){
      var selectedAccount={};
      isUpdateBlockProduction =   state.BlockReducer.isUpdateBlockProduction
      state.BlockReducer.isUpdateBlockProduction = false;
      selectedAccount   =   state.BlockReducer.updateblockProductionResponse;
      var updatedBlockProdObject = {selectedAccount,isUpdateBlockProduction}
      return{
        updatedBlockProdObject
      }
    }

    else if(state.BlockReducer.updateblockSoilInfoResponse !== undefined && state.BlockReducer.isUpdateBlockSoilInfo){
        console.log("we  are in updates soil info blockData");
      var selectedAccount={};
      isUpdateBlockSoilInfo =   state.BlockReducer.isUpdateBlockSoilInfo
      state.BlockReducer.isUpdateBlockSoilInfo = false;
      selectedAccount   =   state.BlockReducer.updateblockSoilInfoResponse;
      var updatedBlockSoilObject = {selectedAccount,isUpdateBlockSoilInfo}
      return{
        updatedBlockSoilObject
      }
    }

    else if(state.BlockReducer.updateblockAnnualResponse !== undefined && state.BlockReducer.isUpdateBlockAnnual){
      //console.log("we are in block Annual response");
      var selectedAccount={};
      isUpdateBlockAnnual =   state.BlockReducer.isUpdateBlockAnnual
      state.BlockReducer.isUpdateBlockAnnual = false;
      selectedAccount   =   state.BlockReducer.updateblockAnnualResponse;
      var updatedBlockAnnualObject = {selectedAccount,isUpdateBlockAnnual}
      return{
        updatedBlockAnnualObject
      }
    }

    else if(state.BlockReducer.updateblockKeyDatesResponse !== undefined && state.BlockReducer.isUpdateBlockKeyDates){
      //console.log("we are in block Keydates response");
      var selectedAccount={};
      isUpdateBlockKeyDates =   state.BlockReducer.isUpdateBlockKeyDates
      state.BlockReducer.isUpdateBlockKeyDates = false;
      selectedAccount   =   state.BlockReducer.updateblockKeyDatesResponse;
      var updateBlockKeyDatesObject = {selectedAccount,isUpdateBlockKeyDates}
      return{
        updateBlockKeyDatesObject
      }
    }


    return{

    }

};

const mapDispatchToProps = (dispatch) => {
    return {
      saveBlockParametersInfo: (data,blockData,selectedAccount) => dispatch(saveBlockParametersInfo(data,blockData,selectedAccount)),
      saveProductionObjInfo: (data,blockData,selectedAccount) => dispatch(saveProductionObjInfo(data,blockData,selectedAccount)),
      saveSoilInfo: (data,blockData,selectedAccount) => dispatch(saveSoilInfo(data,blockData,selectedAccount)),
      saveAnnualVariablesInfo: (data,blockData,selectedAccount) => dispatch(saveAnnualVariablesInfo(data,blockData,selectedAccount)),
      saveKeydatesInfo: (data,blockData,selectedAccount) => dispatch(saveKeydatesInfo(data,blockData,selectedAccount)),

      //Update the block parameters
      updateBlockParametersInfo: (data,blockData,selectedAccount) => dispatch(updateBlockParametersInfo(data,blockData,selectedAccount)),
      updateProductionObjInfo: (data,blockData,selectedAccount) => dispatch(updateProductionObjInfo(data,blockData,selectedAccount)),
      updateSoilInfo: (data,blockData,selectedAccount) => dispatch(updateSoilInfo(data,blockData,selectedAccount)),
      updateAnnualVariablesInfo: (data,blockData,selectedAccount) => dispatch(updateAnnualVariablesInfo(data,blockData,selectedAccount)),
      updateKeydatesInfo: (data,blockData,selectedAccount) => dispatch(updateKeydatesInfo(data,blockData,selectedAccount)),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockDetails);
