import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_ANNUAL_VAR,
    SAVE_BLOCK_ANNUAL_VAR_SUCCESS,
    SAVE_BLOCK_ANNUAL_VAR_FAIL
} from '../constants/actionTypes';

import { createBlockAnnualApi as createBlockAnnual  } from '../apis/createBlockAnnualApi';

function* BlockAnnualDataSave(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockAnnual, action);
            yield put({
                type: SAVE_BLOCK_ANNUAL_VAR_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockAnnualResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_ANNUAL_VAR_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockAnnualErrorResponse: response,
            }
        });
    }
}

export function* saveBlockAnnualData() {
    yield* takeEvery(SAVE_BLOCK_ANNUAL_VAR, BlockAnnualDataSave);
}
