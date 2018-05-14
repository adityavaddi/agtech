import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    DELETE_BLOCK,
    DELETE_BLOCK_SUCCESS,
    DELETE_BLOCK_FAIL
} from '../constants/actionTypes';


import { deleteBlockApi as deleteBlock } from '../apis/deleteBlockApi';

function* deleteTheBlock(action) {
        try {

        const response = yield call(deleteBlock, action);
            yield put({
                type: DELETE_BLOCK_SUCCESS,
                route: {
                    key: 'deleteBlockSuccess',
                    title: 'DELETE SUCCESS'
                },
                payload: {
                   deleteBlockResponse: response,
                  // deviceState: action.data
                }
            });
            //console.log("delete Device response",deleteDeviceResponse);
          }
    catch (error) {
        yield put({
            type: DELETE_BLOCK_FAIL,
            route: {
                key: 'deleteBlockFail',
                title: 'DELETE FAIL'
            },
            payload: {
                error,
                deleteBlockErrorResponse: response,
            }
        });
    }
}

export function* deleteBlockData() {
    yield* takeEvery(DELETE_BLOCK, deleteTheBlock);
}
