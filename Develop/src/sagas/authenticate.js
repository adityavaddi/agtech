// import node modules
import { takeEvery, takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
// import project files
import  * as actionTypes from '../constants/actionTypes'
//import { actionSignInFailureRoute, actionSignInSuccessRoute } from '../constants/actionRoutes';
//import { authenticateUSer as _auth } from '../apis/userAuth';

function* runAuth(action) {

    try {
          //call api only if back-end auth service or necessary mock is present
          //const response = yield call(_auth, action);
          yield put({
              type: actionTypes.SIGNIN_SUCCESS,
              route: action.route,
              payload: {
                  //authSuccessResponse: response // response only when back-end call done
                  data: action.data
              }
          });
    }
    catch (error) {
          yield put({
              type: actionTypes.SIGNIN_ERROR,
              // route: { // prevent going to next if sign in error
              //     key: 'home',
              //     title: 'Search Accounts'
              // },
              payload: {
                  error,
                  authErrorResponse: response
              }
          });
    }
}

export function* authenticate() {
    yield* takeEvery(actionTypes.SIGN_IN, runAuth);
}
