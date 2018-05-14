import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ListView,
  ScrollView,
  Animated,
  Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window')
class Inflate extends Component{
    constructor(props){
        super(props);
        this.contentHeight
        this.state = {
            content : new Animated.Value(0),
            icon  : new Animated.Value(0)
        };
    }

    _toggle = () => {
      if(this.state.content._value == 0) {
        Animated.spring(
            this.state.content,
            {
                toValue: this.contentHeight,
                friction: 10
            }
        ).start(()=>{this.state.content.setValue(this.contentHeight)});

        Animated.spring(
            this.state.icon,
            {
                toValue: 100
            }
        ).start()


      } else {
          Animated.spring(
              this.state.content,
              {
                  toValue: 0,
                  friction: 10
              }
          ).start(()=>{this.state.content.setValue(0)});

          Animated.spring(
              this.state.icon,
              {
                  toValue: 0
              }
          ).start()
      }
    }

    componentWillReceiveProps = (newProps) => {
      // A change is detected  only if the number of children mismatch and Inflate decrease by one child height.
      if(this.props.children.length != newProps.children.length){
        Animated.spring(
            this.state.content,
            {
                toValue: this.contentHeight - this.contentHeight/this.props.children.length,
                friction: 10
            }
        ).start();
      }
    }

    _content = () => {
      return(
        <View style={{flex:1}}>
          <ScrollView scrollEnabled = {true}>
              <View style= {{flex:1}} ref = 'childViews' onLayout = {(e)=>{ this.contentHeight = e.nativeEvent.layout.height}}>
                  {this.props.children}
              </View>
          </ScrollView>
        </View>
      );
    }

    render(){
      //console.log('Props to Inflate', this.props);
        return (
          <View key ={this.props.headerTitle}>
            <Animated.View
                style={[{height:height/15,width:width}]}>
                <TouchableHighlight onPress = {()=> { this._toggle() }}>
                    <View style={{flexDirection:'row',backgroundColor:'#f5f5f5'}}>
                        <View style={{height:height/15,flex: 15,justifyContent:'center',marginLeft:height/40}}>
                            <Text style={{fontSize:height/40,fontFamily:'AvenirNext-Bold'}}>{this.props.headerTitle}</Text>
                        </View>
                        <View style={{height:height/15,flex:1,alignItems:'center',justifyContent:'center'}}>
          									<View style={{height:height/30,width: 2,backgroundColor:'lightgrey'}}/>
          							</View>
          							<View style={{height:height/15,flex:1,justifyContent:'center'}}>
          									<Text style={{fontSize:height/40,fontFamily:'AvenirNext-Bold',color:'#22B05C'}}>{this.props.count}</Text>
          							</View>
                        <View style={{height:height/15,width:width - width/1.15,justifyContent:'center'}}>
                              <View style={{height:height/15,width:width - width/1.15,justifyContent:'center',alignItems:'center'}}>
                                  <Animated.Image style= {{height:30,width:30,
                                    transform:[
                                    {
                                      rotate:this.state.icon.interpolate({
                                          inputRange: [0, 100],
                                          outputRange: ['0deg','90deg']
                                      })
                                    }
                                  ]}} source={require('../../../icons/icon-arrow-right.png')}/>
                              </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </Animated.View>
            <Animated.View
                style={[{height:this.state.content,width:width,overflow:'hidden'}]}>
                  {this._content()}
            </Animated.View>
          </View>
        );
    }
}

Inflate.propTypes = {
  headerTitle : React.PropTypes.string,
  count : React.PropTypes.number
 },

Inflate.defaultProps = {
   headerTitle : 'SAMPLE',
   count : 0
}

export default Inflate
