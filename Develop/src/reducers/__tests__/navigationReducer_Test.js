import  * as actionTypes from '../../constants/actionTypes'

import navigationState from '../navigationReducer'

  var MockObject ={
      index: 0,
      key: 'root',
      showNavHeader: true,
      routes: [{
          key: 'signin',
          title: 'Sign In'
      }]
    }
   describe("Navigation Reducers with Action types", ()=> {

    it("Should be initialState", ()=> {
     let reducer = navigationState(undefined,{});
     //console.log("reducer",reducer);
     expect(reducer).toEqual(MockObject);
    })

    it("Check the action type with SignInroute", ()=> {
      //console.log("DeviceNav",deviceNav);
      const route = {
        key: 'signin',
        title: 'Sign In'
      }
      const expectedAction = {
        type: actionTypes.SIGN_IN,
        route
      }
      //execute
      const newState = navigationState(MockObject,expectedAction)
      //console.log("newState",newState);
      //verify
      MockObject.index += 1
      MockObject.routes.push({"key":"signin","title":"Sign In"})
      //console.log("MockObject",MockObject);
      expect(newState).toEqual(MockObject)
    })


    it("Check the action type with Search", ()=> {
      //console.log("DeviceNav",deviceNav);
      const expectedAction = {
        type: actionTypes.PUSH_ACCOUNT_DETAIL,
        route: {
          key: 'pushAccountDetail',
          title: 'ACCOUNT INFO'
        }
      }
      //execute
      const newState = navigationState(MockObject,expectedAction)
      //console.log("newState",newState);
      MockObject.index += 1
      MockObject.routes.push({"key":"pushAccountDetail","title":"ACCOUNT INFO"})
      console.log("MockObject",MockObject);
      //verify
      expect(newState).toEqual(MockObject)
    })




    // it("Check the action type with Customer Info route", ()=> {
    //   //console.log("DeviceNav",deviceNav);
    //   const expectedAction = {
    //     type: actionTypes.GET_CUSTOMER_INFO_SUCCESS,
    //     route: {
    //         key: 'customer_info_success',
    //         title: 'CUSTOMER INFO  SUCCESS'
    //     }
    //   }
    //   //execute
    //
    //   const newState = navigationState(MockObject,expectedAction)
    //   //console.log("newState",newState);
    //   MockObject.index += 1
    //   MockObject.routes.push({"key":"customer_info_success","title":"CUSTOMER INFO  SUCCESS"})
    //   console.log("MockObject",MockObject);
    //   //verify
    //   expect(newState).toEqual(MockObject)
    // })
    //


    // it("Check the action type with Customer Info route", ()=> {
    //   //console.log("DeviceNav",deviceNav);
    //   const expectedAction = {
    //     type: actionTypes.GET_ORDER_INFO_SUCCESS,
    //     route: {
    //         key: 'orders_info_success',
    //         title: 'ORDER INFO  SUCCESS'
    //     }
    //   }
    //   //execute
    //
    //   const newState = navigationState(MockObject,expectedAction)
    //   //console.log("newState",newState);
    //   MockObject.index += 1
    //   MockObject.routes.push({"key":"orders_info_success","title":"ORDER INFO  SUCCESS"})
    //   console.log("MockObject",MockObject);
    //   //verify
    //   expect(newState).toEqual(MockObject)
    // })
    //
    //
    //
    // it("Check the action type with Customer Info route", ()=> {
    //   //console.log("DeviceNav",deviceNav);
    //   const expectedAction = {
    //     type: actionTypes.GET_CUSTOMER_INFO_SUCCESS,
    //     route: {
    //       key: 'deviceDetails',
    //       title: 'Device Detail'
    //       }
    //   }
    //   //execute
    //
    //   const newState = navigationState(MockObject,expectedAction)
    //   //console.log("newState",newState);
    //   MockObject.index += 1
    //   MockObject.routes.push({"key":"deviceDetails","title":"Device Detail"})
    //   console.log("MockObject",MockObject);
    //   //verify
    //   expect(newState).toEqual(MockObject)
    // })
    //
    //
    // it("Check the action type with POP route", ()=> {
    //   //console.log("DeviceNav",deviceNav);
    //   const expectedAction = {
    //     type: actionTypes.POP_ROUTE,
    //
    //   }
    //   //execute
    //
    //   const newState = navigationState(MockObject,expectedAction)
    //   //console.log("newState",newState);
    //   MockObject.index -= 1
    //   MockObject.routes.pop()
    //   console.log("MockObject",MockObject);
    //   //verify
    //   expect(newState).toEqual(MockObject)
    // })

    });
