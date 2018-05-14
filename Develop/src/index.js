// import node modules
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
// import project files
import globalStyles from './components/styles/global';
import configureStore from './store/configureStore';
import NavigationContainer from './containers/NavigationContainer';
import sagas from './sagas';
import setUp from './store/setUp';
// global initialization
EStyleSheet.build(globalStyles);
const store = configureStore();
sagas.forEach(saga => store.runSaga(saga));
// export App component
export default () => (
    <Provider store={store}>
      <NavigationContainer/>
    </Provider>
);
