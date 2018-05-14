import React, {PropTypes} from 'react';

import {View, StyleSheet,Image,Text} from 'react-native';
// Import reusable components if needed as below
// import NavButton from './NavButton';
import AccountRow from '../AccountRow';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

var imag = require('../../../icons/account-icon.png');
var rightArrow = require('../../../icons/icon-arrow-right.png');


var mockData =
   { accountName: 'hahn',
     accountNumber: '1234567890123',
     contact: 'Hahn NoirFamily',
     email: 'hahn@gmail.com',
     phone: '9835617865',
     address:
      { street: 'Floring Road',
        city: 'california',
        state: 'California',
        zip: '95720',
        country: 'USA' },
     devices:
      [ { name: 'GatewayNorth',
          type: 'gateway',
          id: '68a3806537e8ae6851bf5d54',
          serialNumber: 'GW628493',
          model: 'N/A',
          manufacturer: 'N/A',
          image: 'N/A',
          location: { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
          ancestor: null,
          attributes: null,
          measuredEntity:
           [ { id: '24b5806537e8ae6851bf3c65',
               name: 'HahnVines',
               type: 'vineyard',
               level: 0 },
             { id: '91z5806537e8ae6851bf3x31',
               name: 'northblock',
               type: 'block',
               level: 1 } ] },
        { name: 'weatherStationNorth',
          type: 'weatherstation',
          id: '86b3806537e8ae6851bf3c79',
          serialNumber: 'WS628493',
          model: 'N/A',
          manufacturer: 'N/A',
          image: 'N/A',
          location: { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
          ancestor:
           [ { id: '68a3806537e8ae6851bf5d54',
               name: 'GatewayNorth',
               type: 'gateway',
               level: 0 } ],
          attributes: null,
          measuredEntity:
           [ { id: '24b5806537e8ae6851bf3c65',
               name: 'HahnVines',
               type: 'vineyard',
               level: 0 },
             { id: '91z5806537e8ae6851bf3x31',
               name: 'northblock',
               type: 'block',
               level: 1 } ] },
        { name: 'FlowMeterNorth',
          type: 'flowmeter',
          id: '71y3806537e8ae6851bf6x61',
          serialNumber: 'FM628493',
          model: 'N/A',
          manufacturer: 'N/A',
          image: 'N/A',
          location: { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
          ancestorPath: '68a3806537e8ae6851bf5d54',
          ancestor:
           [ { id: '68a3806537e8ae6851bf5d54',
               name: 'GatewayNorth',
               type: 'gateway',
               level: 0 } ],
          attributes:
           [ { name: 'Row Number', value: '18' },
             { name: 'Drip count', value: '25' } ],
          measuredEntity:
           [ { id: '24b5806537e8ae6851bf3c65',
               name: 'HahnVines',
               type: 'vineyard',
               level: 0 },
             { id: '91z5806537e8ae6851bf3x31',
               name: 'northblock',
               type: 'block',
               level: 1 } ] },
        { name: 'FlowMeterSouth',
          type: 'flowmeter',
          id: '37v3206537e8ae6851bf7x72',
          serialNumber: 'FM12345',
          model: 'N/A',
          manufacturer: 'N/A',
          image: 'N/A',
          location: { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
          ancestorPath: '68a3806537e8ae6851bf5d54',
          ancestor:
           [ { id: '68a3806537e8ae6851bf5d54',
               name: 'GatewayNorth',
               type: 'gateway',
               level: 0 } ],
          attributes:
           [ { name: 'Row Number', value: '20' },
             { name: 'Drip count', value: '30' } ],
          measuredEntity:
           [ { id: '24b5806537e8ae6851bf3c65',
               name: 'HahnVines',
               type: 'vineyard',
               level: 0 },
             { id: '91z5806537e8ae6851bf3x31',
               name: 'northblock',
               type: 'block',
               level: 1 } ] } ],
     ranch:
      [ { name: 'HahnVines',
          type: 'vineyard',
          id: '24b5806537e8ae6851bf3c65',
          edited: 'edited',
          state: 'active',
          image: 'N/A',
          measuredEntityLocation: { latitude: '41.5', longitude: '87.5', elevation: '23.6' },
          ancestor: null,
          measuredEntityProperties: null,
          measuringDevices:
           [ { deviceId: '68a3806537e8ae6851bf5d54', deviceType: 'Gateway' },
             { deviceId: '86b3806537e8ae6851bf3c79',
               deviceType: 'WeatherStation' } ],
          annual:
           [ { germinationDate: 1481648066030,
               canopyHeight: '123',
               canopyWidth: '23',
               canopyPorosity: '34',
               coverCrop: 'dres',
               coverCropWidthStrip: '123edc',
               weedingOrSeneSceneDate: 1481649066030 } ],
          keyDates: null,
          measuredEntityBoundaries:
           [ { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
             { latitude: '51.5', longitude: '67.5', elevation: '22.6' },
             { latitude: '61.5', longitude: '57.5', elevation: '21.6' },
             { latitude: '71.5', longitude: '47.5', elevation: '20.6' },
             { latitude: '81.5', longitude: '37.5', elevation: '19.6' } ],
          soilInformation: null,
          measuredEntityObjectives:
           [ { name: 'premiumRedWines', value: 'true' },
             { name: 'whiteWines', value: 'true' },
             { name: 'fruityWines', value: 'false' },
             { name: 'youngVineyard', value: 'false' } ] },
        { name: 'northblock',
          type: 'block',
          id: '91z5806537e8ae6851bf3x31',
          edited: 'added',
          state: 'active',
          image: 'N/A',
          measuredEntityLocation: { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
          ancestor:
           [ { id: '24b5806537e8ae6851bf3c65',
               name: 'HahnVines',
               type: 'vineyard',
               level: 0 } ],
          measuredEntityProperties:
           [ { name: 'Area(Acres)', value: '12' },
             { name: 'GrapeVariety', value: 'whiteWine' },
             { name: 'Row Orientation', value: 'South East' },
             { name: 'Row Spacing(ft)', value: '2' },
             { name: 'Inter Row Spacing(ft)', value: '1' },
             { name: 'Drip emitter Spacing', value: '1.5' },
             { name: 'Drip emitter flow rate', value: '60' } ],
          measuringDevices:
           [ { deviceId: '71y3806537e8ae6851bf6x61',
               deviceType: 'flowMeter' },
             { deviceId: '37v3206537e8ae6851bf7x72',
               deviceType: 'flowMeter' } ],
          annual:
           [ { germinationDate: 1481648066030,
               canopyHeight: '123',
               canopyWidth: '23',
               canopyPorosity: '34',
               coverCrop: 'dres',
               coverCropWidthStrip: '123edc',
               weedingOrSeneSceneDate: 1481649066030 } ],
          keyDates:
           [ { name: 'budburst', value: 1481649066030 },
             { name: 'Full Bloom', value: 1481649066030 },
             { name: 'Veraison', value: 1481649066030 },
             { name: 'Harvest', value: 1481649066030 },
             { name: 'Leaf Fall', value: 1481649066030 } ],
          measuredEntityBoundaries:
           [ { latitude: '41.5', longitude: '77.5', elevation: '23.6' },
             { latitude: '51.5', longitude: '67.5', elevation: '22.6' },
             { latitude: '61.5', longitude: '57.5', elevation: '21.6' },
             { latitude: '71.5', longitude: '47.5', elevation: '20.6' },
             { latitude: '81.5', longitude: '37.5', elevation: '19.6' } ],
          soilInformation:
           [ { soilAt: '1', clay: '30', sand: '60', stone: '10' },
             { soilAt: '2', clay: '40', sand: '50', stone: '10' },
             { soilAt: '3', clay: '45', sand: '45', stone: '10' } ],
          measuredEntityObjectives:
           [ { name: 'premiumRedWines', value: 'true' },
             { name: 'whiteWines', value: 'false' },
             { name: 'fruityWines', value: 'false' },
             { name: 'youngVineyard', value: 'false' } ] } ] }


describe('Testing <AccountRow /> UI Content', () => {

   const wrapper = shallow(<AccountRow data={mockData}/>);
   it('AccountRow must not be empty', () => {
      expect(wrapper.isEmpty()).to.equal(false);
   });

   it('Should have 5 Text Components and 2 Image Components', () => {
      expect(wrapper.find(Text)).to.have.length(5);
      expect(wrapper.find(Image)).to.have.length(2);
   });

});
