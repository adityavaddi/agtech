import { connect } from 'react-redux';
import NavigationHandler from '../components/NavigationHandler';
import * as navigationActions from '../actions/NavigationActions';

const mapStateToProps = (state) => {
   //console.log("props in navigation Container##################", state);
    return {
          navigationState: state.navigationReducer
    };
};

export default connect(
    mapStateToProps,
    {
      pushRoute: (route, data) => navigationActions.push(route, data),
      popRoute: () => navigationActions.pop(),
      signIn:(route,data)=> navigationActions.signIn(route,data),
      searchProfile:(route,data)=> navigationActions.searchProfile(route,data),
      pushAddDevice:(route) => navigationActions.pushAddDevice(route),
      pushDeviceListDemo:(route,data) => navigationActions.pushDeviceListDemo(route,data),
      pushDeviceList:(route,data) => navigationActions.pushDeviceList(route,data),
      pushBlocksList:(route,data) => navigationActions.pushBlocksList(route,data),
      pushBlockProperty:(route,data) => navigationActions.pushBlockProperty(route,data),
      pushBlockDetails:(route,data) => navigationActions.pushBlockDetails(route,data),
      pushBlock:(route,data) => navigationActions.pushBlock(route,data),
      pushAccountDetail:(route, data) => navigationActions.pushAccountDetail(route, data),
      getDevices:(route, navigateFrom) => navigationActions.getDevices(route, navigateFrom),
      displayMap:(route,data,deviceDataModal, selectedAccount)=> navigationActions.displayMap(route,data,deviceDataModal,selectedAccount),
      pushVineyardDetail:(route,data)=> navigationActions.pushVineyardDetail(route,data),
      saveGatewayDetails:(route,data)=> navigationActions.saveGatewayDetails(route,data),
      savedVineyardDetail:(route,data)=> navigationActions.savedVineyardDetail(route,data),
      pushGateWeather:(route,data)=> navigationActions.pushGateWeather(route,data),
      pushFlowmeter:(route,data)=> navigationActions.pushFlowmeter(route,data),
      pushBlockMap:(route,data)=> navigationActions.pushBlockMap(route,data)
    }
)(NavigationHandler);
