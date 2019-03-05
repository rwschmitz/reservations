import React from 'react';
import { ActivityIndicator } from 'react-native';
import { shallow } from 'enzyme';
import LoadingSpinner from '../LoadingSpinner';

const copy: string = 'This is some test copy';

describe('<LoadingSpinner />', () => {
  it('Renders and displays properly', () => {
    const wrapper = shallow(<LoadingSpinner copy={ copy } />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the React Native ActivityIndicator component', () => {
    const wrapper = shallow(<LoadingSpinner copy={ copy } />);
    const activityIndicator = wrapper.find('ActivityIndicator');
    expect(activityIndicator.exists()).toBe(true);
  });

  it('Has some copy provided to it', () => {
    const wrapper = shallow(<LoadingSpinner copy={ copy } />);
    const providedContentLength = wrapper.find('Text').children().length;
    expect(providedContentLength).toBeGreaterThan(0);
  });
});
