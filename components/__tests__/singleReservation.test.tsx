import { mount, shallow } from 'enzyme';
import React from 'react';
import SingleReservation from '../SingleReservation';

const fakeName: string = 'First Last';
const HotelName: string = 'Hotel Place';
const fakeArrivalDate: string = '01/01/2019';
const fakeDepartureDate: string = '01/02/2019';

describe('<SingleReservation />', () => {
  it('Mounts correctly', () => {
    const wrapper = mount(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Has a prop of name provided to it with a non-zero value', () => {
    const wrapper = mount(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.prop('name')).not.toHaveLength(0);
  });

  it('Has a prop of hotelName provided to it with a non-zero value', () => {
    const wrapper = mount(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.prop('hotelName')).not.toHaveLength(0);
  });

  it('Has a prop of arrivalDate provided to it with a non-zero value', () => {
    const wrapper = mount(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.prop('arrivalDate')).not.toHaveLength(0);
  });

  it('Has a prop of departureDate provided to it with a non-zero value', () => {
    const wrapper = mount(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.prop('departureDate')).not.toHaveLength(0);
  });

  it('Has 4 user inputs', () => {
    const wrapper = shallow(
      <SingleReservation
        name={ fakeName }
        hotelName={ HotelName }
        arrivalDate={ fakeArrivalDate }
        departureDate={ fakeDepartureDate }
      />
    );
    expect(wrapper.find('Text').children().children().length).toBe(4);
  });

});
