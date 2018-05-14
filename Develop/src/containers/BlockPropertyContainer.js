import { connect } from 'react-redux';
import { pushBlockProperty } from '../actions/NavigationActions';
import BlocksProperty from '../components/Blocks/blocksProperty';

const mapStateToProps = (state) => { // state: not filtered yet
  //console.log('Block Property  Container by akhil :: ',state)
    return {
      //blockID:state.navigationReducer.blockID,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlocksProperty);
