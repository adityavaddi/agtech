import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_PRODUCTION_OBJ,
    SAVE_BLOCK_PRODUCTION_OBJ_SUCCESS,
    SAVE_BLOCK_PRODUCTION_OBJ_FAIL
} from '../constants/actionTypes';

import { createBlockProductionApi as createBlockProduction  } from '../apis/createBlockProductionApi';

function* BlockProductionDataSave(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockProduction, action);
            yield put({
                type: SAVE_BLOCK_PRODUCTION_OBJ_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockProductionResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_PRODUCTION_OBJ_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockProductionErrorResponse: response,
            }
        });
    }
}

export function* saveBlockProductionData() {
    yield* takeEvery(SAVE_BLOCK_PRODUCTION_OBJ, BlockProductionDataSave);
}
