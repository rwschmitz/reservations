import React from 'react';
import { mount } from 'enzyme';
import LoadingSpinner from '../LoadingSpinner';

const fakeCopy: string = 'This is some test copy';

describe('<LoadingSpinner />', () => {

  it('Mounts correctly', () => {
    const wrapper = mount(<LoadingSpinner copy={ fakeCopy } />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the React Native ActivityIndicator component', () => {
    const wrapper = mount(<LoadingSpinner copy={ fakeCopy } />);
    const activityIndicator = wrapper.find('ActivityIndicator');
    expect(activityIndicator.exists()).toBe(true);
  });

  it('Has copy provided to it', () => {
    const wrapper = mount(<LoadingSpinner copy={ fakeCopy } />);
    expect(wrapper.prop('copy')).not.toHaveLength(0);
  });

});
