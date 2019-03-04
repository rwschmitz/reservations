import gql from 'graphql-tag';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { AllReservationsQuery, Reservation } from '../queries/AllReservationsQuery';
import LoadingSpinner from '../components/LoadingSpinner';
import SingleReservation from '../components/SingleReservation';

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
  }
});

interface Props {
  navigation: {
    navigate(screen: string): {};
  };
}

/**
 * ViewReservations holds all currrently booked reservations.
 */
export default class ViewReservations extends React.PureComponent<Props> {
  public render() {
    return (
      <View style={ styles.container }>
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
                  <View style={ { marginTop: 64 } }>
                    <Button onPress={ () => this.props.navigation.navigate('Add') } title='Next screen' color='#5449d2' accessibilityLabel='Go to the next screen' />
                    <Text style={ { paddingBottom: 64} }>There are { payload.data.reservations.length } reservations currently booked.</Text>
                    <FlatList
                      data={ payload.data.reservations }
                      keyExtractor={ (item: Reservation) => item.id }
                      renderItem={(props) =>
                        <SingleReservation
                          name={ props.item.name }
                          hotelName={ props.item.hotelName }
                          arrivalDate={ props.item.arrivalDate }
                          depatureDate={ props.item.depatureDate }
                        />
                      }
                    />
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
