import { connect } from 'react-redux';
import { searchAccounts,clearSearchAccounts } from '../actions/NavigationActions';
import SearchAccounts from '../components/SearchAccounts';
var    SearchModelObject       = require('../dataModel/SearchModelObject');

const mapStateToProps = (state) => {
      let listProps = {
          listData: [],
          isDataLoaded:false,
          error:'',
          searchText:''
      };
    //  console.log("state in search Container", state);
      if(state.searchReducer.searchErrorResponse !== undefined){
        listProps.error= state.searchReducer.searchErrorResponse;
      }

      if(state.searchReducer.searchResponse !== undefined) {
        //set state to allcounts
        //console.log('Container searchResponse:: ',state.searchReducer.searchResponse)
         const allAccounts = state.searchReducer.searchResponse.account;

        for(var key in allAccounts ){

          var accountDeatails = new SearchModelObject({
            accountName : allAccounts[key].accountName ,
            accountNumber :allAccounts[key].accountRef ,
            address:allAccounts[key].address,
            contact:allAccounts[key].firstName + allAccounts[key].lastName,
            phone : allAccounts[key].phoneNumber,
            email : allAccounts[key].email,
            devices:((allAccounts[key].ranch.devices ==="")?null:allAccounts[key].ranch.devices),
            devicesCount:((allAccounts[key].ranch.devices ==="")?null:allAccounts[key].ranch.devices),
            ranch:((allAccounts[key].ranch.measuredEntity ==="")?null:allAccounts[key].ranch.measuredEntity),
            ranchId:allAccounts[key].ranch.ranchId,
            ranchAddress:allAccounts[key].ranch.address
          })

          listProps.listData.push(accountDeatails)
        }
          //console.log("listProps in search container", listProps.listData);
        listProps.isDataLoaded =true;
        listProps.searchText = state.searchReducer.searchText;
        //console.log('Search container:listProps: ',state.searchReducer)

      }
      //console.log('Search container:listProps: ',listProps)
      return listProps;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchClick: (data) => dispatch(searchAccounts(data)),
        onSearchClear: () => dispatch(clearSearchAccounts()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchAccounts);
