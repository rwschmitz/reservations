import gql from 'graphql-tag';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AllReservationsQuery } from '../queries/AllReservationsQuery';

const ALL_RESERVATIONS_QUERY = gql`
query ALL_RESERVATIONS_QUERY {
  reservations {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
}
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

/**
 * Testview is a test.
 */
export default class TestView extends React.PureComponent {
  public render() {
    return (
      <View style={ styles.container }>
        <AllReservationsQuery query={ ALL_RESERVATIONS_QUERY }>
          { (payload) => {
              if (payload.loading) { return <Text>Loading, one moment please!</Text>; }
              if (payload.error !== undefined) { return <Text>Reservations encountered an error: { payload.error.message } </Text>; }
              if (payload.data !== undefined) {
                return (
                  <View>
                    <Text>There are { payload.data.reservations.length } reservations currently booked.</Text>
                  </View>
                );
              }
            }
          }
        </AllReservationsQuery>
      </View>
    );
  }
}
