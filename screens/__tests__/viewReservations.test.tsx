import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import toJSON from 'enzyme-to-json';
import React from 'react';
import wait from 'waait';
import ViewReservations, { ALL_RESERVATIONS_QUERY } from '../ViewReservations';

const fakeReservation = {
  id: '2903482askdjf',
  name: 'Jim Raynor',
  hotelName: 'Mar Sara Inn',
  arrivalDate: '03/09/2019',
  departureDate: '03/19/2019'
};

describe('<ViewReservations />', () => {

  it('Displays the loading state correctly', () => {
    const mocks = [
      {
        request: {
          query: ALL_RESERVATIONS_QUERY
        },
        result: {
          data: {
            reservations: fakeReservation
          }
        }
      }
    ];
    const wrapper = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <ViewReservations
          navigation={
            {
              navigate() { /* to screens */ }
            }
          }
        >
        </ViewReservations>
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading, please wait a moment!');
  });

  it('Pulls in reservations data', async() => {
    const mocks = [
      {
        request: {
          query: ALL_RESERVATIONS_QUERY
        },
        result: {
          data: {
            reservations: fakeReservation
          }
        }
      }
    ];
    const wrapper = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <ViewReservations
          navigation={
            {
              navigate() { /* to screens */ }
            }
          }
        >
        </ViewReservations>
      </MockedProvider>
    );
    await wait(0);
    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Errors out correctly', async() => {
    const mocks = [
      {
        request: {
          query: ALL_RESERVATIONS_QUERY
        },
        error: new Error('Uh oh... we ran into an error! Please bear with us.')
      }
    ];
    const wrapper = mount(
      <MockedProvider mocks={ mocks } addTypename={ false }>
        <ViewReservations
          navigation={
            {
              navigate() { /* to screens */ }
            }
          }
        >
        </ViewReservations>
      </MockedProvider>
    );
    await wait(0);
    wrapper.update();
    expect(wrapper.text()).toContain('Reservations encountered an error: Network error: Uh oh... we ran into an error! Please bear with us.');
  });

});
