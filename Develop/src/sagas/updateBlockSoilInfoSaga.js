import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    UPDATE_BLOCK_SOIL_INFO,
    UPDATE_BLOCK_SOIL_INFO_SUCCESS,
    UPDATE_BLOCK_SOIL_INFO_FAIL
} from '../constants/actionTypes';

import { createBlockSoilInfoApi as createBlockSoilInfo  } from '../apis/createBlockSoilInfoApi';

function* BlockSoilInfoDataUpdate(action) {
        try {
          console.log('create BlockParameter::: SAGA:: ',action)
        const response = yield call(createBlockSoilInfo, action);
            yield put({
                type: UPDATE_BLOCK_SOIL_INFO_SUCCESS,
                route: {
                   key: 'pushBlockMap',
                   title: 'Block',
                  // renderMode: action.data.renderMode,
                  // accountnumber:action.data.accountNumber
                },
                payload: {
                   updateblockSoilInfoResponse: response
                }
            });
            //console.log("save block Saga response",response);
          }
    catch (error) {
        yield put({
            type: UPDATE_BLOCK_SOIL_INFO_FAIL,
            route: {
              key: 'pushBlockMap',
              title: 'Block',
              // renderMode: action.data.renderMode,
              // accountnumber:action.data.accountNumber
            },
            payload: {
                error,
                updateblockSoilInfoErrorResponse: response,
            }
        });
    }
}

export function* updateBlockSoilInfoData() {
    yield* takeEvery(UPDATE_BLOCK_SOIL_INFO, BlockSoilInfoDataUpdate);
}
