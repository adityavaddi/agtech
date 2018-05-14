
import { takeEvery,takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from '../constants/actionTypes';


//import { searchList as search } from '../apis/searchAccountsApi';
import { searchList as fbsearch } from '../apis/searchAccountsApi';

function* searchAccountsList(action) {
        try {
          //console.log('Search: SAGA:: ',action)
        const response = yield call(fbsearch, action);
            yield put({
                type: SEARCH_SUCCESS,
                route: {
                    key: 'searchSuccess',
                    title: 'SEARCH SUCCESS'
                },
                payload: {
                   searchSuccessResponse: response,
                   searchtext: action.data
                }
            });
            //console.log("search Saga response",response);
          }
    catch (error) {
        yield put({
            type: SEARCH_FAIL,
            route: {
                key: 'searchFail',
                title: 'SEARCH FAIL'
            },
            payload: {
                error,
                searchErrorResponse: response,
            }
        });
    }
}

export function* listOfAccounts() {
    yield* takeEvery(SEARCH, searchAccountsList);
}
