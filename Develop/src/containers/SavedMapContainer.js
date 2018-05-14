import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';
//import { saveMap } from '../actions/navigationActions';

// Presentational component to connect to
import SavedMapHome from '../components/map/SavedMapHome';

// state/data
const mapStateToProps = (state) => { // state: not filtered yet
    return {
      getPolygonPoints:state.MapReducer
    };
};
// action/behavior
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
// Connect container to presentational component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedMapHome);
