import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    CREATE_BLOCK,
    CREATE_BLOCK_SUCCESS,
    CREATE_BLOCK_FAIL
} from '../constants/actionTypes';


import { createBlockApi as createBlock  } from '../apis/createBlockApi';

function* BlockDataSave(action) {
        try {
          //console.log('create Block::: SAGA:: ',action)
        const response = yield call(createBlock, action);
            yield put({
                type: CREATE_BLOCK_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'New Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockSuccessResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: CREATE_BLOCK_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'New Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockErrorResponse: response,
            }
        });
    }
}

export function* saveBlockData() {
    yield* takeEvery(CREATE_BLOCK, BlockDataSave);
}
