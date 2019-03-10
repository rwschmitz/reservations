import gql from 'graphql-tag';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { AllReservationsQuery, Reservation } from '../queries/AllReservationsQuery';
import LoadingSpinner from '../components/LoadingSpinner';
import SingleReservation from '../components/SingleReservation';
import { ViewReservationsScreenProps } from '../App';

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
  introWrapperResHidden: {
    paddingTop: 0
  },
  introWrapperResShown: {
    paddingTop: 160,
    paddingBottom: 160
  },
  introContainer: {
    marginBottom: 64
  },
  introHeadlineTextStyle: {
    textAlign: 'center'
  },
  introTextStyle: {
    fontSize: 16,
    paddingBottom: 4
  },
  flatListStyle: {
    marginBottom: 160
  }
});

const primaryColor: string = '#5449d2';

interface State {
  areReservationsShown: boolean;
}

export { ALL_RESERVATIONS_QUERY };

/**
 * ViewReservations holds all currrently booked reservations.
 */
export default class ViewReservations extends React.PureComponent<ViewReservationsScreenProps, State> {

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
                  <LoadingSpinner copy='Loading, please wait a moment!' />
                </View>
              );
            }
              if (payload.error !== undefined) { return <Text>Reservations encountered an error: { payload.error.message } </Text>; }
              if (payload.data !== undefined) {
                return (
                  <View style={ this.state.areReservationsShown === false ? styles.introWrapperResHidden : styles.introWrapperResShown }>
                    <View style={ styles.introContainer }>
                      <Text style={ [ styles.introHeadlineTextStyle, styles.introTextStyle ] }>Welcome back!</Text>
                      <Text style={ styles.introTextStyle }>There are { payload.data.reservations.length } reservations currently booked.</Text>
                      <Text style={ styles.introTextStyle }>Would you like to add another reservation?</Text>
                      <Button testID='navigateScreens' onPress={ () => this.props.navigation.navigate('Add') } title='Add another reservation' color={`${primaryColor}`} accessibilityLabel='Add another reservation' />
                    </View>

                    { this.state.areReservationsShown === false ?
                      <View>
                        <Button onPress={ toggleReservationsVisbility } title={`Show current ${payload.data.reservations.length} reservations`} color={`${primaryColor}`} accessibilityLabel='View all currently booked reservations' />
                      </View>
                    :
                      <View style={ styles.flatListStyle }>
                        <Button onPress={ toggleReservationsVisbility } title={`Hide all reservations`} color={`${primaryColor}`} accessibilityLabel='Hide all currently booked reservations' />
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
