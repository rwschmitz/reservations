import gql from 'graphql-tag';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AllReservationsQuery } from '../queries/AllReservationsQuery';
import LoadingSpinner from './LoadingSpinner';

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
        {/* Variables can be passed into this query */}
        <AllReservationsQuery query={ ALL_RESERVATIONS_QUERY }>
          { (payload) => {
              if (payload.loading) {
                return (
                <View>
                  <LoadingSpinner />
                </View>
              );
            }
              if (payload.error !== undefined) { return <Text>Reservations encountered an error: { payload.error.message } </Text>; }
              if (payload.data !== undefined) {
                return (
                  <View>
                    { (payload.data.reservations as any[]).map(item => console.log(item)) }
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

