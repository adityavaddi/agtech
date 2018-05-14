import 'react-native';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';


import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//import { actionPushAddDevice,actionPushDeviceList,actionPushShowBlocks } from '../../../constants/actionRoutes';
var profileLogo = require('../../../icons/profile-logo.png');
import LeftDrawer from '../LeftDrawer';

describe('Testing <LeftDrawer /> UI Content', () => {

   const wrapper = shallow(<LeftDrawer />);

  it('should render two <Image /> components', () => {
    expect(wrapper.find(Image)).to.have.length(1);

  });

  it('should render 5 <Text/> components', () => {
    expect(wrapper.find(Text)).to.have.length(5);
    expect(wrapper.find(Text).containsMatchingElement(<Text>Sign Out</Text>)).to.equal(true);
    expect(wrapper.find(Text).containsMatchingElement(<Text>Profile</Text>)).to.equal(true);
    expect(wrapper.find(Text).containsMatchingElement(<Text>Password</Text>)).to.equal(true);
    expect(wrapper.find(Text).containsMatchingElement(<Text>Settings</Text>)).to.equal(true);
  });

  it('LeftDrawer must be passed with correct State values', () => {
      // To be defined
      expect(wrapper.props._handleNavigate).to.be.defined;
  });


  it('should have a 4 Buttons', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(4);
    expect(wrapper.find(TouchableOpacity).containsMatchingElement(<Text>Sign Out</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity).containsMatchingElement(<Text>Profile</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity).containsMatchingElement(<Text>Password</Text>)).to.equal(true);
    expect(wrapper.find(TouchableOpacity).containsMatchingElement(<Text>Settings</Text>)).to.equal(true);

  });


});
