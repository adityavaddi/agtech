import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_KEY_DATES,
    SAVE_BLOCK_KEY_DATES_SUCCESS,
    SAVE_BLOCK_KEY_DATES_FAIL
} from '../constants/actionTypes';

import { createBlockKeyDatesApi as createBlockKeyDates  } from '../apis/createBlockKeyDatesApi';

function* BlockKeyDatesDataSave(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockKeyDates, action);
            yield put({
                type: SAVE_BLOCK_KEY_DATES_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockKeyDatesResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_KEY_DATES_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockKeyDatesErrorResponse: response,
            }
        });
    }
}

export function* saveBlockKeyDatesData() {
    yield* takeEvery(SAVE_BLOCK_KEY_DATES, BlockKeyDatesDataSave);
}
