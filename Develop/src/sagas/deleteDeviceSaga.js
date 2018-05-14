import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    DELETE_DEVICE,
    DELETE_DEVICE_SUCCESS,
    DELETE_DEVICE_FAIL
} from '../constants/actionTypes';


import { deleteDeviceApi as deviceDelete } from '../apis/deleteDeviceApi';

function* deleteTheDevice(action) {
        try {
          //console.log('Search: SAGA:: ',action)
        const response = yield call(deviceDelete, action);
            yield put({
                type: DELETE_DEVICE_SUCCESS,
                route: {
                    key: 'deleteDeviceSuccess',
                    title: 'DELETE SUCCESS'
                },
                payload: {
                   deleteDeviceResponse: response,
                  // deviceState: action.data
                }
            });
            //console.log("delete Device response",deleteDeviceResponse);
          }
    catch (error) {
        yield put({
            type: DELETE_DEVICE_FAIL,
            route: {
                key: 'deleteDeviceFail',
                title: 'DELETE FAIL'
            },
            payload: {
                error,
                deleteErrorResponse: response,
            }
        });
    }
}

export function* deviceToDelete() {
    yield* takeEvery(DELETE_DEVICE, deleteTheDevice);
}
