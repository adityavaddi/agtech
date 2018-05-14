
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ListView,
  Image,
  Alert
} from 'react-native';

import {actionPushAccountDetail} from '../../constants/actionRoutes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchAccounts from '../SearchAccounts';

import AccountRow from '../list-row/AccountRow';

import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

var mockData = {
listData:
   [ { accountName: 'hahn',
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
               { name: 'youngVineyard', value: 'false' } ] } ] },
     { accountName: 'hann agri',
       accountNumber: '1234567890124',
       contact: 'Hahn AgriWines',
       email: 'hahnagri@gmail.com',
       phone: '9835617863',
       address:
        { street: 'downtown',
          city: 'sanjose',
          state: 'California',
          zip: '95126',
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
             [ { soilAt: '1', clay: '30', sand: '70', stone: '10' },
               { soilAt: '2', clay: '40', sand: '60', stone: '10' },
               { soilAt: '3', clay: '45', sand: '45', stone: '10' } ],
            measuredEntityObjectives:
             [ { name: 'premiumRedWines', value: 'false' },
               { name: 'whiteWines', value: 'true' },
               { name: 'fruityWines', value: 'true' },
               { name: 'youngVineyard', value: 'true' } ] } ] },
     { accountName: 'Verizon',
       accountNumber: '123456743490123',
       contact: 'AbbasBagsara',
       email: 'verizon@gmail.com',
       phone: '9835613456',
       address:
        { street: 'Sylvan Road',
          city: 'Waltham',
          state: 'MA',
          zip: '02452',
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
               { name: 'youngVineyard', value: 'false' } ] } ] } ],
  isDataLoaded: true,
  error: '',
  searchText: 'Gg',
 }
describe('Testing <SearchAccounts /> UI Content', () => {

   const wrapper = shallow(<SearchAccounts {...mockData}/>);
   it('SearchAccounts must not be empty', () => {
      expect(wrapper.isEmpty()).to.equal(false);
   });

   it('Should have 1 TextInput , 1 ListView and 1 TouchableOpacity Components', () => {
      expect(wrapper.find(TextInput)).to.have.length(1);
      expect(wrapper.find(TouchableOpacity)).to.have.length(1);
      expect(wrapper.find(ListView)).to.have.length(1);
   });

   it('Renders a ListView  With row data', () => {
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
     const dataSource = ds.cloneWithRows(mockData);

     expect(wrapper.contains(
       <ListView
         dataSource={dataSource}
         renderRow={() => {}}
       />
     ))
   });


   it('State values should be set with default values initially', () => {
     expect(wrapper.state('isTextChanged')).to.equal(false);
     expect(wrapper.state('isListShowResults')).to.equal(false);
     expect(wrapper.state('textInputFocus')).to.equal(false);
     expect(wrapper.state('searchText')).to.equal('');

   });

   it('About must be passed with correct State values', () => {
       expect(wrapper.state().isTextChanged).to.be.defined;
       expect(wrapper.state().isListShowResults).to.be.defined;
       expect(wrapper.state().textInputFocus).to.be.defined;
       expect(wrapper.state().searchText).to.be.defined;
   });

   it('Function Testing for checking the functions',() => {
     expect(wrapper.instance().showSearchResults).to.not.equal(null);
     expect(wrapper.instance().renderSearchResultsView).to.not.equal(null);
     expect(wrapper.instance().renderCloseButton).to.not.equal(null);
     expect(wrapper.instance()._renderLoading).to.not.equal(null);
     expect(wrapper.instance().renderRow).to.not.equal(null);
   });

   it('About must be passed with correct State values', () => {
       // To be defined
       expect(wrapper.props._handleNavigate).to.be.defined;
       expect(wrapper.props.listData).to.be.defined;
   });


});
