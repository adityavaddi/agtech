
import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_VINEYARD,
    GET_VINEYARD_SUCCESS,
    GET_VINEYARD_FAIL
} from '../constants/actionTypes';


import { saveVineyardApi as saveData  } from '../apis/saveVineyardApi';

function* MapDataSave(action) {
        try {
          //console.log('save vineyard: SAGA:: ',action)
        const response = yield call(saveData, action);
            yield put({
                type: GET_VINEYARD_SUCCESS,
                route: {
                  key: 'displayMap',
                  title: 'DESIGN',
                  renderMode: action.data.renderMode,
                  accountnumber:action.data.accountNumber
                },
                payload: {
                   polygonSuccessResponse: response
                }
            });
            //console.log("save vineyard Saga response",response);
          }
    catch (error) {
        yield put({
            type: GET_VINEYARD_FAIL,
            route: {
              key: 'MapFail',
              title: 'DESIGN',
              renderMode: action.data.renderMode,
              accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                polygonErrorResponse: response,
            }
        });
    }
}

export function* saveVineyardData() {
    yield* takeEvery(SAVE_VINEYARD, MapDataSave);
}
