
import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_VIN_DEVICE,
    SAVE_VIN_DEVICE_SUCCESS,
    SAVE_VIN_DEVICE_FAIL
} from '../constants/actionTypes';


import { saveVineyardDeviceApi as saveDeviceData  } from '../apis/saveVinDeviceApi';

function* VinDeviceSave(action) {
        try {
          //console.log('saveVineyard device saga: SAGA:: ',action)
        const response = yield call(saveDeviceData,action);
            yield put({
                type: SAVE_VIN_DEVICE_SUCCESS,
                route: {
                  key: 'displayMap',
                  title: 'DESIGN',

                  //accountnumber:action.data.accountNumber
                },
                payload: {
                   VinDeviceSuccessResponse: response
                }
            });
            //console.log("search Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_VIN_DEVICE_FAIL,
            route: {
              key: 'MapFail',
              title: 'DESIGN',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                 VinDeviceErrorResponse: response,
            }
        });
    }
}

export function* saveVineyardDeviceData() {
    yield* takeEvery(SAVE_VIN_DEVICE, VinDeviceSave);
}
