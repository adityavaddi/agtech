import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_ANNUAL_VAR,
    UPDATE_BLOCK_ANNUAL_VAR_SUCCESS,
    UPDATE_BLOCK_ANNUAL_VAR_FAIL
} from '../constants/actionTypes';

import { createBlockAnnualApi as createBlockAnnual  } from '../apis/createBlockAnnualApi';

function* BlockAnnualDataUpdate(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockAnnual, action);
            yield put({
                type: UPDATE_BLOCK_ANNUAL_VAR_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   updateblockAnnualResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_ANNUAL_VAR_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                updateblockAnnualErrorResponse: response,
            }
        });
    }
}

export function* updateBlockAnnualData() {
    yield* takeEvery(UPDATE_BLOCK_ANNUAL_VAR, BlockAnnualDataUpdate);
}
