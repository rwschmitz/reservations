import React from 'react';
import { shallow } from 'enzyme';
import NameField from '../NameField';

const areErrorStylesActive =  false;
const isErrorValid =  false;
const fieldName =  'name';
const fieldValue =  'rudy';
const typeOfMethod = () => {};

describe('<NameField />', () => {
  it('Renders and displays properly', () => {
    const wrapper = shallow(
      <NameField
        areErrorStylesActive={ areErrorStylesActive }
        isErrorValid={ isErrorValid }
        fieldName={ fieldName }
        fieldValue={ fieldValue }
        typeOfMethod={ typeOfMethod }
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
