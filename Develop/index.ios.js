'use strict';

import React from 'react';
import { AppRegistry,Alert } from 'react-native';
import App from './src';
import setUp from './src/store/setUp';
//console.log("We are in index",setUp.load());
// from src folder, App and setUp modules execute first
AppRegistry.registerComponent('AgtechMobileApp', () => App, setUp);
