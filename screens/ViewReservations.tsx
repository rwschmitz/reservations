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

interface State {
  areReservationsShown: boolean;
}

/**
 * ViewReservations holds all currrently booked reservations.
 */
export default class ViewReservations extends React.PureComponent<Props, State> {

  public state = {
    areReservationsShown: false
  };

  public render() {

    const toggleReservationsVisbility = () => {
      this.setState({
        areReservationsShown: !this.state.areReservationsShown
      });
    };

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
                  <View style={ this.state.areReservationsShown === false ? { marginTop: 0} : { marginTop: 160 } }>
                    <View style={ { marginBottom: 64 } }>
                      <Text style={ { fontSize: 16, textAlign: 'center', paddingBottom: 4 } }>Welcome back!</Text>
                      <Text style={ { fontSize: 16, paddingBottom: 4 } }>There are { payload.data.reservations.length } reservations currently booked.</Text>
                      <Text style={ { fontSize: 16, paddingBottom: 4 } }>Would you like to add another reservation?</Text>
                      <Button onPress={ () => this.props.navigation.navigate('Add') } title='Add new reservation' color='#5449d2' accessibilityLabel='Add another reservation' />
                    </View>

                    { this.state.areReservationsShown === false ?
                      <View>
                        <Button onPress={ toggleReservationsVisbility } title={`Show current ${payload.data.reservations.length} reservations`} color='#5449d2' accessibilityLabel='View all currently booked reservations' />
                      </View>
                    :
                      <View>
                        <Button onPress={ toggleReservationsVisbility } title={`Hide all reservations`} color='#5449d2' accessibilityLabel='Hide all currently booked reservations' />
                        <FlatList
                        data={ payload.data.reservations }
                        keyExtractor={ (item: Reservation) => item.id }
                        renderItem={(props) =>
                          <SingleReservation
                            name={ props.item.name }
                            hotelName={ props.item.hotelName }
                            arrivalDate={ props.item.arrivalDate }
                            departureDate={ props.item.departureDate }
                          />
                          }
                        />
                      </View>
                    }
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
