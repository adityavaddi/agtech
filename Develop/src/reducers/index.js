import { combineReducers } from 'redux'
import navigationReducer from './navigationReducer'
import searchReducer from './searchReducer'
import orderReducer from './orderReducer'
import MapReducer from './MapReducer'
import DeviceReducer from './DeviceReducer'
import BlockReducer from './BlockReducer'

const applicationReducers = {
  navigationReducer,
  searchReducer,
  MapReducer,
  DeviceReducer,
  BlockReducer
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
