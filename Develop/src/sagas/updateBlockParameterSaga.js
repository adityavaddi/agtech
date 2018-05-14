import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_PARAMETER,
    UPDATE_BLOCK_PARAMETER_SUCCESS,
    UPDATE_BLOCK_PARAMETER_FAIL
} from '../constants/actionTypes';

import { createBlockParameterApi as createBlockParameter  } from '../apis/createBlockParameterApi';

function* BlockParameterDataUpdate(action) {
        try {
         // console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockParameter, action);
            yield put({
                type: UPDATE_BLOCK_PARAMETER_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   updateblockParameterResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_PARAMETER_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                updateblockParameterErrorResponse: response,
            }
        });
    }
}

export function* updateBlockParameterData() {
    yield* takeEvery(UPDATE_BLOCK_PARAMETER, BlockParameterDataUpdate);
}
