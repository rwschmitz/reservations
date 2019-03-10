import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import React from 'react';
import wait from 'waait';
import AddReservation, { ADD_RESERVATION_MUTATION } from '../AddReservation';
import { TextInput } from 'react-native';

const fakeReservation = {
  fakeReservationDetails: {
    name: 'First Last',
    hotelName: 'Some Hotel',
    arrivalDate: '03/09/2019',
    departureDate: '03/10/2019'
  },
  isArrivalValid: true,
  isDepartureValid: true,
  isRangeValid: true,
  areErrorsPresent: false,
  areErrorStylesActive: false,
  isNameValid: true,
  isHotelNameValid: true
};

const mocks = [
  {
    request: {
      query: ADD_RESERVATION_MUTATION
    },
    result: {
      data: {
        addReservation: {
          message: 'success',
          __typename: 'reservation'
        }
      }
    }
  }
];

describe('<AddReservation />', () => {
  it('Renders correctly and matches the snapshot', async() => {
    const wrapper = mount(
      <MockedProvider>
        <AddReservation
          reservationDetails={
            {
              name: fakeReservation.fakeReservationDetails.name,
              hotelName: fakeReservation.fakeReservationDetails.hotelName,
              arrivalDate: fakeReservation.fakeReservationDetails.arrivalDate,
              departureDate: fakeReservation.fakeReservationDetails.departureDate
            }
          }
          isArrivalValid={ fakeReservation.isArrivalValid }
          isDepartureValid={ fakeReservation.isDepartureValid }
          isRangeValid={ fakeReservation.isRangeValid }
          areErrorsPresent={ fakeReservation.areErrorsPresent }
          areErrorStylesActive={ fakeReservation.areErrorStylesActive }
          isNameValid={ fakeReservation.isNameValid }
          isHotelNameValid={ fakeReservation.isHotelNameValid }
        />
      </MockedProvider>
    );
    const inputCollection = wrapper.find('View[testID="inputCollection"]');
    expect(toJSON(inputCollection)).toMatchSnapshot();
  });

  it('Posts the mutation to the database', async () => {
    const wrapper = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <AddReservation
          reservationDetails={
            {
              name: fakeReservation.fakeReservationDetails.name,
              hotelName: fakeReservation.fakeReservationDetails.hotelName,
              arrivalDate: fakeReservation.fakeReservationDetails.arrivalDate,
              departureDate: fakeReservation.fakeReservationDetails.departureDate
            }
          }
          isArrivalValid={ fakeReservation.isArrivalValid }
          isDepartureValid={ fakeReservation.isDepartureValid }
          isRangeValid={ fakeReservation.isRangeValid }
          areErrorsPresent={ fakeReservation.areErrorsPresent }
          areErrorStylesActive={ fakeReservation.areErrorStylesActive }
          isNameValid={ fakeReservation.isNameValid }
          isHotelNameValid={ fakeReservation.isHotelNameValid }
        />
      </MockedProvider>
    );

    wrapper.setState(fakeReservation);
    const component = wrapper.find('TextInput').first();
    const instance = component.instance();
    const spy = jest.spyOn(TextInput.prototype, 'setState');
    instance.setState({name: 'firstNameLastName'});

    await wait(0);
    expect(spy).toHaveBeenCalled();

    const button = wrapper.find('Button');
    button.simulate('click');

  });
});
