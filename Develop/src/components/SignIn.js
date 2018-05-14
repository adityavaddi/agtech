
import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  View
} from 'react-native';
//routes
import { actionHomeRoute ,actionProfileSearch} from '../constants/actionRoutes';
var logo = require('../../icons/vz-logo.png');
import styles from './styles/signIn';

class SignIn extends Component {
  constructor(props){
        super(props);
        this.state = {
         email: '', password: '',
        };
    }
  render() {
    return (
      <View style={styles.container}>
        <View>
                <View style={styles.image}>
                   <Image source={logo}/>
                </View>

                <View style={styles.signinheading}>
                  <Text style={styles.signinheadingstyle}>
                    Sign In
                  </Text>
                </View>

                <View style={styles.line}/>

                <View style={styles.usertextContainer}>

                <TextInput
                       style={styles.userInputText}
                       placeholder='Username'
                       autoCapitalize='none'
                       value={this.state.email}
                       onChangeText={(email) => this.setState({email})}
                       autoCorrect={false}
                       underlineColorAndroid='transparent'
                       placeholderTextColor='#d0d0e2'
                     />
                  <View style={styles.seperator}/>
                </View>

                <View style={styles.userpassContainer}>
                   <TextInput
                     style={styles.userInputText}
                     placeholder='Password'
                     value={this.state.password}
                     onChangeText={(password) => this.setState({password})}
                     autoCapitalize='none'
                     autoCorrect={false}
                     secureTextEntry = {true}
                     underlineColorAndroid='transparent'
                     placeholderTextColor='#d0d0e2'
                   />
                 <View style={styles.seperator}/>
               </View>

                <View style={styles.signinbutton}>
                  <TouchableOpacity onPress={()=>{//const signin = {
                    // type: 'signInSuccess',
                    // route: {
                    //   key: 'home',
                    //   title: 'Search Accounts'
                    // },
                    // data:{
                    //   'username': '',
                    //   'password': ''
                    // }
                  //}
                  if(this.state.email=='admin' && this.state.password=='admin'){
                          actionHomeRoute.data = {username: 'username', password: 'password'}
                  this.props._handleNavigate(actionHomeRoute);
                        } else {
                          Alert.alert('Please enter a username and password.');
                        }
                  }} label='Sign In'>
                    <View style={styles.signinview}>
                      <Text style={styles.signtext}>
                        Sign In
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.forgotview}>
                 <TouchableOpacity>
                   <Text style={styles.forgottext}>
                     Forgot Password?
                   </Text>
                  </TouchableOpacity>
                </View>

        </View>
      </View>
    );
  }
}

export default SignIn;
