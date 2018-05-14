import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';
//import { saveMap } from '../actions/navigationActions';

import MapHome from '../components/map/MapHome';
const mapStateToProps = (state) => {
//console.log("state in MapContainer", state);
    let listProps = {
      listpolygonpoints: []
    };
      if(state.MapReducer.polygonPayload === undefined){
      }
      else {
          listProps.listpolygonpoints.push(state.MapReducer.polygonPayload)
      }
//console.log("list props in map containers", listProps);
      return listProps;
    };
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapHome);
