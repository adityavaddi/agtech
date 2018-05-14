import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_DEVICE,
    UPDATE_BLOCK_DEVICE_SUCCESS,
    UPDATE_BLOCK_DEVICE_FAIL
} from '../constants/actionTypes';


import { updateVineyardDeviceApi as updateDeviceData  } from '../apis/updateVinDeviceApi';

function* BlockDeviceUpdate(action) {
        try {
          //console.log('saveVineyard device saga: SAGA:: ',action)
        const response = yield call(updateDeviceData,action);
            yield put({
                type: UPDATE_BLOCK_DEVICE_SUCCESS,
                route: {
                  key: 'displayMap',
                  title: 'DESIGN',

                  //accountnumber:action.data.accountNumber
                },
                payload: {
                   BlockDeviceUpdateResponse: response
                }
            });
            //console.log("search Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_DEVICE_FAIL,
            route: {
              key: 'MapFail',
              title: 'DESIGN',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                 BlockDeviceUpdateErrorResponse: response,
            }
        });
    }
}

export function* updateBlockDeviceData() {
    yield* takeEvery(UPDATE_BLOCK_DEVICE, BlockDeviceUpdate);
}
