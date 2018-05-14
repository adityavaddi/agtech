import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window')
class Inflate extends Component{
    constructor(props){
        super(props);
        this.contentHeight
        this.state = {
            animation : new Animated.Value(0),
            icon  : new Animated.Value(0)
        };
    }

    _toggle = () => {
      if(this.state.animation._value == 0) {
        Animated.spring(
            this.state.animation,
            {
                toValue: this.contentHeight,
                friction: 10
            }
        ).start(()=>{this.state.animation.setValue(this.contentHeight)});

        Animated.spring(
            this.state.icon,
            {
                toValue: 100
            }
        ).start()


      } else {
          Animated.spring(
              this.state.animation,
              {
                  toValue: 0,
                  friction: 10
              }
          ).start(()=>{this.state.animation.setValue(0)});

          Animated.spring(
              this.state.icon,
              {
                  toValue: 0
              }
          ).start()
      }
    }

    _content = () => {
      return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style= {{flex:1}} onLayout = {(e)=>{ this.contentHeight = e.nativeEvent.layout.height}}>
                    {this.props.children}
                </View>
            </ScrollView>
        </View>
      );

    }

    render(){
        return (
          <View>
            <Animated.View
                style={[{height:height/15,width:width}]}>
                <TouchableHighlight onPress = {()=> {this._toggle() }}>
                    <View style={{flexDirection:'row',backgroundColor:'yellow'}}>
                        <View style={{height:height/15,width:width/1.15,justifyContent:'center'}}>
                            <Text style={{marginLeft:height/50,fontWeight:'700',fontFamily:'AvenirNext-Bold',fontSize:height/35}}></Text>
                        </View>
                        <View style={{height:height/15,width:width - width/1.15,justifyContent:'center'}}>
                              <View style={{height:height/15,width:width - width/1.15,justifyContent:'center',alignItems:'center'}}>
                                  <Animated.Image style= {{height:30,width:30,
                                    transform:[
                                    {
                                      rotate:this.state.icon.interpolate({
                                          inputRange: [0, 100],
                                          outputRange: ['-90deg','0deg']
                                      })
                                    }
                                  ]}} source={require('./app/components/images/Arrowhead-Down-01-128.png')}/>
                              </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </Animated.View>
            <Animated.View
                style={[{height:this.state.animation,width:width,overflow:'hidden'}]}>
                  {this._content()}
            </Animated.View>
          </View>
        );
    }
}

export default Inflate;
