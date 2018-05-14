
import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_DEVICE,
    SAVE_BLOCK_DEVICE_SUCCESS,
    SAVE_BLOCK_DEVICE_FAIL
} from '../constants/actionTypes';


import { saveVineyardDeviceApi as saveDeviceData  } from '../apis/saveVinDeviceApi';

function* BlockDeviceSave(action) {
        try {
          //console.log('saveVineyard device saga: SAGA:: ',action)
        const response = yield call(saveDeviceData,action);
            yield put({
                type: SAVE_BLOCK_DEVICE_SUCCESS,
                route: {
                  key: 'displayMap',
                  title: 'DESIGN',

                  //accountnumber:action.data.accountNumber
                },
                payload: {
                   BlockDeviceSuccessResponse: response
                }
            });
            //console.log("search Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_DEVICE_FAIL,
            route: {
              key: 'MapFail',
              title: 'DESIGN',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                 BlockDeviceErrorResponse: response,
            }
        });
    }
}

export function* saveBlockDeviceData() {
    yield* takeEvery(SAVE_BLOCK_DEVICE, BlockDeviceSave);
}
