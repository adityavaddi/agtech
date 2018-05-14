import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_KEY_DATES,
    UPDATE_BLOCK_KEY_DATES_SUCCESS,
    UPDATE_BLOCK_KEY_DATES_FAIL
} from '../constants/actionTypes';

import { createBlockKeyDatesApi as createBlockKeyDates  } from '../apis/createBlockKeyDatesApi';

function* BlockKeyDatesDataUpdate(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockKeyDates, action);
            yield put({
                type: UPDATE_BLOCK_KEY_DATES_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   updateblockKeyDatesResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_KEY_DATES_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                updateblockKeyDatesErrorResponse: response,
            }
        });
    }
}

export function* updateBlockkeyDatesData() {
    yield* takeEvery(UPDATE_BLOCK_KEY_DATES, BlockKeyDatesDataUpdate);
}
