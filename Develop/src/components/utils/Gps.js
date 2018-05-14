import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';


class Geolocation extends Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    latitude : '',
    longitude : '',

  };

  watchID: ?number = null;

  userlocation (callback){
    navigator.geolocation.getCurrentPosition(
      (position) => {
            
        callback({latitude : position.coords.latitude.toString(),
                   longitude : position.coords.longitude.toString()
         });
      },
      );
    
    }
     

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
export default Geolocation