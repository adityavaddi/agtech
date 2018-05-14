
import * as navigationActions from "../NavigationActions"
import * as actionTypes from "../../constants/actionTypes"


describe('Navigation Actions with routes and types', () => {

  it('should create an action to signIn', () => {
    const route = {
      key: 'signin',
      title: 'Sign In'
    }
    const data = {};
    const expectedAction = {
      type: actionTypes.SIGN_IN,
      route,data
    }
    expect(navigationActions.signIn(route,data)).toEqual(expectedAction)
  })

  it('should create an action to push account details', () => {
    const route = {
      key: 'pushAccountDetail',
      title: 'ACCOUNT INFO'
    }
    const expectedAction = {
      type: actionTypes.PUSH_ACCOUNT_DETAIL,
      route
    }
    expect(navigationActions.pushAccountDetail(route)).toEqual(expectedAction)
  })


  it('should create an action to Push Add Device', () => {
    const route = {
      key: 'pushAddDevice',
      title: 'ADD DEVICE'
    }
    const expectedAction = {
      type: actionTypes.PUSH_ADD_DEVICE,
      route
    }
    expect(navigationActions.pushAddDevice(route)).toEqual(expectedAction)
  })

  it('should create an action to Push device List', () => {
    const route = {
      key: 'pushDeviceList',
      title: 'Show Devices'
    }
    const data = {};
    const expectedAction = {
      type: actionTypes.PUSH_SHOW_DEVICE,
      route,data
    }
    expect(navigationActions.pushDeviceList(route,data)).toEqual(expectedAction)
  })
  it('should create an action to get devices', () => {
    const route = {
      key: 'getDevices',
      title: 'DEVICES'
    }
    const expectedAction = {
      type: actionTypes.GET_DEVICES,
      route
    }
    expect(navigationActions.getDevices(route)).toEqual(expectedAction)
  })
  it('should create an action to Map Home', () => {
    const route = {
      key: 'MapHome',
      title: 'DESIGN'
    }
    const data = {}
    const expectedAction = {
      type: actionTypes.DISPLAY_MAP,
      route,data
    }
    expect(navigationActions.MapHome(route,data)).toEqual(expectedAction)
  })
  it('should create an action to search Accounts', () => {
    const data = {}
    const expectedAction = {
      type: actionTypes.SEARCH,
      data
    }
    expect(navigationActions.searchAccounts(data)).toEqual(expectedAction)
  })
 })
