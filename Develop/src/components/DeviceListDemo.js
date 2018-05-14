import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
   ListView,
   TouchableHighlight,
   ActivityIndicator,
   RefreshControl,
   Text,
   View
} from 'react-native';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
//var partners = './mockdata.json';
 var partners = [{title: 'President', name: '1'}, {title: 'Manager', name: '2'}, {title: 'CEO', name: '3'}
                   , {title: 'CEO', name: '4'}, {title: 'CEO', name: '5'}, {title: 'CEO', name: '6'}
                       , {title: 'CEO', name: '7'}, {title: 'CEO', name: '8'}, {title: 'CEO', name: '9'}
                           , {title: 'CEO', name: '10'}, {title: 'CEO', name: '11'}, {title: 'CEO', name: '12'}
                               , {title: 'CEO', name: '13'}, {title: 'CEO', name: '14'}, {title: 'CEO', name: '15'}
                                    , {title: 'CEO', name: '16'}, {title: 'CEO', name: '17'}, {title: 'CEO', name: '18'}]

class DeviceListDemo extends React.Component {

  constructor(props){
    super(props)
  	this.state = {
    	dataSource: [1,2,3,4,5,6,7,8]
    }
  }

  // loadMore(timeInterval) {
  //   this.setTimeout(
  //     () => { console.log('I do not leak!'); },
  //     timeInterval
  //   );
  // }

  _partners(){
    var dataBlob = []
    for (var i = 0; i < partners.length; i++) {
      //dataBlob.push(partners[i].title);
      dataBlob.push(partners[i].name);
    }
    console.log("dataBlob------", dataBlob);
    return dataBlob;
  }

  _renderRow = (rowData) => {
    console.log('Each Row',rowData);
  	return (
      <TouchableHighlight style={{ height:60, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor: 'green', flexDirection:'row', alignItems: 'center' }}>
      	<Text style={{marginLeft:25 }}>{rowData}</Text>
      </TouchableHighlight>
    )
  }

  onEndReached(){
      var initialData = []

      for(var i = 0; i < this.state.dataSource.length +10 ;i++ ){
          initialData.push(i)
      }

      this.setState({
        dataSource : initialData
      })

    //     var partners = this.partners;
    //     if(this._renderRow !== partners) {
    //       this._renderRow = this._renderRow+5;
    //     }

  }

  render() {
    console.log('Partners: ', this._partners() )
    return (
      <View style={styles.container}>
       	<ListView
         enableEmptySections = {true}
      	 dataSource={ds.cloneWithRows(this.state.dataSource)}
         initialListSize = {20}
      	 renderRow={ this._renderRow }
         onEndReachedThreshold = {1000}
         onEndReached ={()=>{this.onEndReached()}}
         renderFooter = {()=><View><ActivityIndicator animating={this.state.animating} style={{height:70}} size="large"/></View>}
          />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },

});

export default DeviceListDemo;
