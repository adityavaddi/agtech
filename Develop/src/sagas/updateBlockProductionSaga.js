import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_PRODUCTION_OBJ,
    UPDATE_BLOCK_PRODUCTION_OBJ_SUCCESS,
    UPDATE_BLOCK_PRODUCTION_OBJ_FAIL
} from '../constants/actionTypes';

import { createBlockProductionApi as createBlockProduction  } from '../apis/createBlockProductionApi';

function* BlockProductionDataUpdate(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockProduction, action);
            yield put({
                type: UPDATE_BLOCK_PRODUCTION_OBJ_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   updateblockProductionResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_PRODUCTION_OBJ_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                updateblockProductionErrorResponse: response,
            }
        });
    }
}

export function* updateBlockProductionData() {
    yield* takeEvery(UPDATE_BLOCK_PRODUCTION_OBJ, BlockProductionDataUpdate);
}
