import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_BLOCK_SOIL_INFO,
    SAVE_BLOCK_SOIL_INFO_SUCCESS,
    SAVE_BLOCK_SOIL_INFO_FAIL
} from '../constants/actionTypes';

import { createBlockSoilInfoApi as createBlockSoilInfo  } from '../apis/createBlockSoilInfoApi';

function* BlockSoilInfoDataSave(action) {
        try {
          //console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockSoilInfo, action);
            yield put({
                type: SAVE_BLOCK_SOIL_INFO_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   blockSoilInfoResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: SAVE_BLOCK_SOIL_INFO_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                blockSoilInfoErrorResponse: response,
            }
        });
    }
}

export function* saveBlockSoilInfoData() {
    yield* takeEvery(SAVE_BLOCK_SOIL_INFO, BlockSoilInfoDataSave);
}
