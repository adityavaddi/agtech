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
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AccountRow from './list-row/AccountRow';
import dismissKeyboard from 'react-native-dismiss-keyboard';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SearchAccounts extends Component {

    constructor(props) {
        super(props);
        this.state={
            searchText : '',
            isTextChanged:false,
            textInputFocus: false,
            isListShowResults:false
        };
    }
    componentDidMount(){
      if(this.props.isDataLoaded){
        this.setState({
          searchText:this.props.searchText
        });
      }
    }

    renderRow(Item, sectionID, rowID) {
      var style ={'backgroundColor': rowID %2 ? '#f5f5f5' : '#ffffff'};
        return (
            <View style={style}>
              <TouchableOpacity onPress={()=> {
                actionPushAccountDetail.data  = Item;
                 this.props._handleNavigate(actionPushAccountDetail)}}>
                  {<AccountRow data={Item}
                    _handleNavigate={this.props._handleNavigate}
                    />}
              </TouchableOpacity>
            </View>
        );
    }
    showSearchResults()
    {
        dismissKeyboard();
        if(this.state.searchText.length > 0){
          this.props.onSearchClear();

          this.props.onSearchClick(this.state.searchText);
          this.setState({isListShowResults:true});
        }else if(this.props.isDataLoaded){
          this.props.onSearchClear();
          this.setState({isListShowResults:false});
        }
        this.setState({textInputFocus:false});
    }

    renderSearchResultsView()
    {

      var count = this.props.listData.length;
      var message = count == 0 ? 'No results found': 'matches for \''+this.state.searchText+'\'';
        if(this.props.isDataLoaded) {

          return(
               <View style={{flex:1}}>
                  <View style={{flex:1, backgroundColor: '#f5f5f5',flexDirection:'row'}}>
                  <Text style={styles.resultsDisplayCountText}>{count}</Text>
                      <Text style={styles.resultsDisplayTitle}> {message}</Text>
                  </View>
                  <View style={{flex:10}}>
                      <ListView
                          dataSource={
                            new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).
                            cloneWithRows(this.props.listData)
                          }
                          renderRow={this.renderRow.bind(this)} enableEmptySections={true}
                      />
                  </View>
                </View>
          )
       }

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
        this.setState({isListShowResults:false});

        return <View/>;
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
      if(this.state.isListShowResults && !this.props.isDataLoaded){
        return this._renderLoading();
      }
        return (
            <View style={styles.searchView}>
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
                      underlineColorAndroid='transparent'
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
              <View style={styles.emptySpace}/>
                {this.renderSearchResultsView()}
            </View>
        );
    }
  }

// export home component
export default SearchAccounts;
