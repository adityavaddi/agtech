import React,{Component} from 'react';
import {View, Text, TouchableOpacity,TouchableHighlight, StyleSheet } from 'react-native';
// project files
// import styles from './styles/button';

import styles from '../styles/button';
import Icon from 'react-native-vector-icons/MaterialIcons';

// export default ({label, onPress}) => (
//   <TouchableHighlight underlayColor='#35b5ff' onPress={onPress} style={styles.button}>
//     <Text style={styles.label}>{label}</Text>
//   </TouchableHighlight>
// );

class CloseButton extends Component {

    constructor(props) {
        super();
        this.state = {
          isTextChanged:false
        }
    }
    render(){
      console.log('Hello...',this.state.isTextChanged)
      return(
        <View isTextChanged={this.state.isTextChanged} style={{flex:1,marginRight: 75,backgroundColor: this.state.isTextChanged? 'red':'blue',height:200,width:200}}>
            <TouchableOpacity underlayColor='#eeeeee' onPress={() => {
                console.log('Pressed....')
            }}>
                <Icon name={'close'} size={35} color= {"rgb(34,176,92)"}/>
            </TouchableOpacity>
        </View>

      )
    }
}

export default CloseButton;
