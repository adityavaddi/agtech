import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_PARAMETER,
    SAVE_BLOCK_PARAMETER_SUCCESS,
    SAVE_BLOCK_PARAMETER_FAIL
} from '../constants/actionTypes';

import { createBlockParameterApi as createBlockParameter  } from '../apis/createBlockParameterApi';

function* BlockParameterDataSave(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockParameter, action);
            yield put({
                type: SAVE_BLOCK_PARAMETER_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockParameterResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_PARAMETER_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockParameterErrorResponse: response,
            }
        });
    }
}

export function* saveBlockParameterData() {
    yield* takeEvery(SAVE_BLOCK_PARAMETER, BlockParameterDataSave);
}
