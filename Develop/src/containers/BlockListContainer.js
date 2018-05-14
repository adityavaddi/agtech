import { connect } from 'react-redux';
import { blockOnSwipeDelete } from '../actions/NavigationActions';
import BlocksListHome from '../components/Blocks/BlocksListHome';

const mapStateToProps = (state) => { // state: not filtered yet
  //console.log('Block List  Container by akhil:: ',state.BlockReducer)
  if(state.BlockReducer.deleteBlockResponse!==undefined){

    var deletedObj = {}

    var blocksArray = state.BlockReducer.deleteBlockResponse.ranch;
    blocksArray = blocksArray.filter(item =>item != blocksArray[0]);
    blocksList = blocksArray
    selectedAccount = state.BlockReducer.deleteBlockResponse
    //console.log("deleted Obj by akhil",deletedObj);
    deletedObj = {blocksList,selectedAccount}
    return {
      deletedObj
    };
  }
  else{
    var deletedObj = {}
    blocksList = state.navigationReducer.blocksList
    selectedAccount = state.navigationReducer.selectedAccount
    //console.log("deleted Obj by akhil",deletedObj);
    deletedObj = {blocksList,selectedAccount}
    return {
      deletedObj
    }
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      //createNewBlockInfo: (data) => dispatch(createNewBlockInfo(data))
      blockOnSwipeDelete:(data,selectedAccount) => dispatch(blockOnSwipeDelete(data,selectedAccount))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlocksListHome);
