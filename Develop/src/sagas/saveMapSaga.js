
import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SAVE_MAP,
    MAP_SAVE_SUCCESS,
    MAP_SAVE_FAIL
} from '../constants/actionTypes';


import { saveVineyardApi as saveData  } from '../apis/saveMapApi';

function* MapDataSave(action) {
        try {
        const response = yield call(saveData, action);
            //console.log('///////====>',response);
            yield put({
                type: MAP_SAVE_SUCCESS,
                route: {
                    key: 'mapSaveSuccess',
                    title: 'DISPLAY'
                },
                payload: {
                   mapSaveResponse: response
                }
            });
          }
    catch (error) {
        yield put({
            type: MAP_SAVE_FAIL,
            route: {
                key: 'mapSaveFail',
                title: 'DISPLAY'
            },
            payload: {
                error,
                mapSaveErrorResponse: response,
            }
        });
    }
}

export function* saveMapData() {
    yield* takeEvery(SAVE_MAP, MapDataSave);
}
