import React from 'react';
import { shallow } from 'enzyme';
import SingleReservation from '../SingleReservation';

const name: string = 'First Last';
const hotelName: string = 'Hotel Place';
const arrivalDate: string = '01/01/2019';
const departureDate: string = '01/02/2019';

describe('<SingleReservation />', () => {
  it('Renders and displays properly', () => {
    const wrapper = shallow(
      <SingleReservation
        name={ name }
        hotelName={ hotelName }
        arrivalDate={ arrivalDate }
        departureDate={ departureDate }
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('Has all necessary content passed to it', () => {
    const wrapper = shallow(
      <SingleReservation
        name={ name }
        hotelName={ hotelName }
        arrivalDate={ arrivalDate }
        departureDate={ departureDate }
      />
    );
    const providedContentLength = wrapper.find('Text').children().length;
    expect(providedContentLength).toBeGreaterThan(0);
  });
});
