// import node modules
import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image,
  Alert
} from 'react-native';
// import project files
import {actionPushAccountDetail} from '../constants/actionRoutes';
import styles from './styles/searchAccounts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dismissKeyboard from 'react-native-dismiss-keyboard';


class SearchProfile extends Component {

    constructor(props) {
        super(props);
        this.state={
            searchText : '',
            isTextChanged:false,
            textInputFocus: false,
        };
    }

    showSearchResults()
    {
        dismissKeyboard();
        if(this.state.searchText.length > 0){
          this.props.onSearchClick(this.state.searchText);
        }else if(this.props.isDataLoaded){
          this.props.onSearchClear();
        }
        this.setState({textInputFocus:false});
    }


    renderCloseButton(){
      if(this.state.textInputFocus){
        return (
          <View style={styles.iconRightView}>
            <TouchableOpacity underlayColor='#eeeeee' onPress={() => {this.setState({
              searchText:''})}}>
               <Icon name={'close'} size={35} color= {"rgb(34,176,92)"}/>
            </TouchableOpacity>
          </View>
        )
      }else {
        <View />
      }
    }
    _renderLoading(){
      if(this.props.isDataLoaded ){
        return ;
      }
        return(
          <View style={styles.spinnerview} ref="spinnerView">
            <Image
              style={{height:50,width:50}}
              source={require('../../icons/loading.gif')}
              />
          </View>
        );
    }

    render() {
      //console.log('renderSearchResultsView:: ',this.props.searchText)
        return (
            <View style={styles.searchView}>
            <View style={styles.profileimage}>
              <Image source = {require('../../icons/profile-logo.png')} style={{backgroundColor:'rgb(204,204,204)',borderRadius:65}}/>
              <Text style={styles.profileName}>John Appleseed</Text>
            </View>

              <View style={styles.searchBarView}>
                  <View style={styles.iconLeftView}>
                    <TouchableOpacity underlayColor='#eeeeee' onPress={() => {this.showSearchResults()}}>
                       <Icon name={'search'} size={35} color= {"rgb(34,176,92)"}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.textInputView}>
                    <TextInput ref='searchTextRef'
                      style={styles.textInput}
                      placeholder="Account Name or Account Number"
                      returnKeyType='go'
                      value={this.state.searchText}
                      onChangeText = {(searchText)=>{this.setState({searchText}); }}
                      selectTextOnFocus ={false}
                      onSubmitEditing ={() => {
                        this.setState({isTextChanged : true, textInputFocus: false});
                       }}
                      onFocus = {() => {this.setState({textInputFocus: true});}}
                      />
                  </View>
                  {this.state.searchText != '' ? this.renderCloseButton(): null}
              </View>
                <View style={styles.goButton}>
                  <TouchableOpacity underlayColor='#eeeeee' onPress={() => {this.showSearchResults()}}>
                     <Text style={{color:'#ffffff',fontSize:20,fontWeight: 'bold',}}>Go</Text>
                  </TouchableOpacity>
                </View>

            </View>
        );
    }
  }

// export home component
export default SearchProfile;
