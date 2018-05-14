import 'react-native';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';


import {
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import SignIn from '../SignIn';
import renderer from 'react-test-renderer';


describe('Testing <SignIn /> UI Content', () => {

   const wrapper = shallow(<SignIn />);

  it('should render two <TextInput /> components', () => {
    expect(wrapper.find(TextInput)).to.have.length(2);
  });

  it('should render three <Text/> components', () => {
    expect(wrapper.find(Text)).to.have.length(3);
    expect(wrapper.find(Text).containsMatchingElement(<Text>Forgot Password?</Text>)).to.equal(true);
  });

  it('should render one <Image/> component', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('should have a Sigin Button', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(2);
    expect(wrapper.find(TouchableOpacity).containsMatchingElement(<Text>Sign In</Text>)).to.equal(true);
  });


});
