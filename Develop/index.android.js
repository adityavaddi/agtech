'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src';
import setUp from './src/store/setUp';
// from src folder, App and setUp modules execute first
AppRegistry.registerComponent('AgtechMobileApp', () => App, setUp);
