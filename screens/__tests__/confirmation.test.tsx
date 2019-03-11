import { mount, shallow } from 'enzyme';
import React from 'react';
import Confirmation from '../Confirmation';

const fakeConfirmationDetails = {
  confirmationName: 'Rudy',
  confirmationHotelName: 'Big Hotel',
  confirmationArrivalDate: '03/09/2019',
  confirmationDepartureDate: '03/10/2019'
};

describe('<DateField />', () => {

  it('Mounts correctly', () => {
    const wrapper = mount(
      <Confirmation
        confirmationName={ fakeConfirmationDetails.confirmationName }
        confirmationHotelName={ fakeConfirmationDetails.confirmationHotelName }
        confirmationArrivalDate={ fakeConfirmationDetails.confirmationArrivalDate }
        confirmationDepartureDate={ fakeConfirmationDetails.confirmationDepartureDate }
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

});
