import  * as actionTypes from '../../constants/actionTypes'

import deviceNav from '../searchReducer'

var searchMockData = require('../../../MockData/searchMock.json');


describe("Search reducers to get the search results", ()=> {
 let state = {};
 it("Should be initialState", ()=> {
  let reducer = deviceNav(undefined, {});
  expect(reducer).toEqual(state);
 })


 it("Check the action type with route", ()=> {
   //console.log("DeviceNav",deviceNav);
   const expectedAction = {
     type: actionTypes.SEARCH_SUCCESS,
     payload:{
       searchSuccessResponse:searchMockData,
       searchText:''
     }
   }
   //execute
   const newState = deviceNav(undefined,expectedAction)
   //console.log("newState",newState);
   //verify
   expect(newState).toEqual({ searchResponse: searchMockData, searchText:undefined})
 })
 it("Check the action type with failure route", ()=> {
   //console.log("DeviceNav",deviceNav);
   const expectedFailureAction = {
     type: actionTypes.SEARCH_FAIL,
     payload:{
       message:null
     }
   }
   //execute
   const newState = deviceNav(undefined,expectedFailureAction)
   //console.log("newState",newState);
   //verify
   expect(newState).toEqual({searchErrorResponse: null,searchText: "" })
 })
 });
