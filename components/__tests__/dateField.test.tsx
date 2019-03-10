import { mount, shallow } from 'enzyme';
import React from 'react';
import DateField from '../DateField';

const fakeAreErrorStylesActive = false;
const fakeIsErrorValid = false;
const fakeIsRangeValid = false;
const fakeFieldName = 'arrivalDate';
const fakeFieldValue = '2019/03/09';
const fakeTypeOfMethod = () => { 'newValue'; };

describe('<DateField />', () => {

  it('Mounts correctly', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the React Native TextInput component', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    const textInput = wrapper.find('TextInput');
    expect(textInput.exists()).toBe(true);
  });

  it('Has a prop of areErrorStylesActive provided to it', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.prop('areErrorStylesActive')).not.toBeNull();
  });

  it('Has a prop of isErrorValid provided to it', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.prop('isErrorValid')).not.toBeNull();
  });

  it('Has a prop of isRangeValid provided to it', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.prop('isRangeValid')).not.toBeNull();
  });

  it('Has a prop of fieldName provided to it with a non-zero value', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.prop('fieldName')).not.toHaveLength(0);
  });

  it('Has a prop of fieldValue provided to it with a non-zero value', () => {
    const wrapper = mount(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ fakeTypeOfMethod }
      />
    );
    expect(wrapper.prop('fieldValue')).not.toHaveLength(0);
  });

  it('Should run our typeOfMethod function to React Native\'s TextInput', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <DateField
        areErrorStylesActive={ fakeAreErrorStylesActive }
        isErrorValid={ fakeIsErrorValid }
        isRangeValid={ fakeIsRangeValid }
        fieldName={ fakeFieldName }
        fieldValue={ fakeFieldValue }
        typeOfMethod={ mockFunction }
      />
    );
    const textInput = wrapper.find('TextInput');
    textInput.simulate('ChangeText', 'newName');
    expect(mockFunction).toHaveBeenCalled();
  });

});
