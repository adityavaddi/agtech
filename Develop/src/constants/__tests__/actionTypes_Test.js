import * as actionTypes from "../actionTypes"


describe('Constants for different Action types', () => {

    it('PUSH_ROUTE is defined', () => {
      expect(actionTypes.PUSH_ROUTE).toBe('PUSH_ROUTE');
    });
    it('POP_ROUTE is defined', () => {
      expect(actionTypes.POP_ROUTE).toBe('POP_ROUTE');
    });
    it('SIGN_IN is defined', () => {
      expect(actionTypes.SIGN_IN).toBe('SIGN_IN');
    });
    it('SIGNIN_SUCCESS is defined', () => {
      expect(actionTypes.SIGNIN_SUCCESS).toBe('SIGNIN_SUCCESS');
    });
    it('SIGNIN_ERROR is defined', () => {
      expect(actionTypes.SIGNIN_ERROR).toBe('SIGNIN_ERROR');
    });
    it('SEARCH is defined', () => {
      expect(actionTypes.SEARCH).toBe('SEARCH');
    });
    it('SEARCH_SUCCESS is defined', () => {
      expect(actionTypes.SEARCH_SUCCESS).toBe('SEARCH_SUCCESS');
    });
    it('SEARCH_FAIL is defined', () => {
      expect(actionTypes.SEARCH_FAIL).toBe('SEARCH_FAIL');
    });
    it('PUSH_ACCOUNT_DETAIL is defined', () => {
      expect(actionTypes.PUSH_ACCOUNT_DETAIL).toBe('PUSH_ACCOUNT_DETAIL');
    });
    it('GET_DEVICES is defined', () => {
      expect(actionTypes.GET_DEVICES).toBe('GET_DEVICES');
    });
    it('GET_DEVICES_SUCCESS is defined', () => {
      expect(actionTypes.GET_DEVICES_SUCCESS).toBe('GET_DEVICES_SUCCESS');
    });
    it('GET_DEVICES_FAIL is defined', () => {
      expect(actionTypes.GET_DEVICES_FAIL).toBe('GET_DEVICES_FAIL');
    });
    it('PUSH_ADD_DEVICE is defined', () => {
      expect(actionTypes.PUSH_ADD_DEVICE).toBe('PUSH_ADD_DEVICE');
    });
    it('PUSH_DEVICE_LIST is defined', () => {
      expect(actionTypes.PUSH_DEVICE_LIST).toBe('PUSH_DEVICE_LIST');
    });
    it('GET_ORDERS is defined', () => {
      expect(actionTypes.GET_ORDERS).toBe('GET_ORDERS');
    });
    it('DISPLAY_MAP is defined', () => {
      expect(actionTypes.DISPLAY_MAP).toBe('DISPLAY_MAP');
    });
    it('HEADER_CLICK is defined', () => {
      expect(actionTypes.HEADER_CLICK).toBe('HEADER_CLICK');
    });

    });
