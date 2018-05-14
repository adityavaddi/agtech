import React, {PropTypes,Component} from 'react';
import {View, StyleSheet} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
import styles from '../styles/block';
import AnnualVariables from './annualVariables';
import BlockParameter from './blockParameter';
import KeyDates from './keyDates';
import ProObjectives from './proObjectives';
import SoilInfo from './soilInfo';

class BlockDetails extends Component {

  render() {
    //console.log('Block Details props by akhil::: ',this.props)
    if(this.props.selectedblockType === 'blockParameter'){
      return (<BlockParameter {...this.props} />)
    }
    else if(this.props.selectedblockType === 'proObjectives'){
      return (<ProObjectives {...this.props} />)
    }
    else if(this.props.selectedblockType === 'soilInfo'){
      return (<SoilInfo {...this.props} />)
    }
    else if(this.props.selectedblockType === 'annulaVariables'){
      return (<AnnualVariables {...this.props} />)
    }else{
      return (<KeyDates {...this.props} />)
    }


  }
}

export default BlockDetails;
