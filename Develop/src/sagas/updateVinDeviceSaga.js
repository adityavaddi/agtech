import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_VIN_DEVICE,
    UPDATE_VIN_DEVICE_SUCCESS,
    UPDATE_VIN_DEVICE_FAIL
} from '../constants/actionTypes';


import { updateVineyardDeviceApi as updateDeviceData  } from '../apis/updateVinDeviceApi';

function* VinDeviceUpdate(action) {
        try {
          //console.log('saveVineyard device saga: SAGA:: ',action)
        const response = yield call(updateDeviceData,action);
            yield put({
                type: UPDATE_VIN_DEVICE_SUCCESS,
                route: {
                  key: 'displayMap',
                  title: 'DESIGN',

                  //accountnumber:action.data.accountNumber
                },
                payload: {
                   VinDeviceUpdateResponse: response
                }
            });
            //console.log("search Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_VIN_DEVICE_FAIL,
            route: {
              key: 'MapFail',
              title: 'DESIGN',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                 VinDeviceUpdateErrorResponse: response,
            }
        });
    }
}

export function* updateVineyardDeviceData() {
    yield* takeEvery(UPDATE_VIN_DEVICE, VinDeviceUpdate);
}
