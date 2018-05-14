# Container example (VisibleAccountList)
-----------------------------------------
import { connect } from 'react-redux';
// Import actions
//import { setVisibilityFilter } from '../actions';
// Import selector if needed
// import { AccountFilter } from '../selectors'
// Presentational component to connect to
import AccountList from '../components/modal/AccountList';

// state/data (use selector to filter state if needed)
const mapStateToProps = (state, ownProps) => ({});
// action/behavior
const mapDispatchToProps = (dispatch, ownProps) => ({});

// Connect container to presentational component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList);
