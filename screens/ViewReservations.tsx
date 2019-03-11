import gql from 'graphql-tag';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { AllReservationsQuery, Reservation } from '../queries/AllReservationsQuery';
import LoadingSpinner from '../components/LoadingSpinner';
import SingleReservation from '../components/SingleReservation';
import { ViewReservationsScreenProps } from '../App';
import { containerStyles } from '../styles/containers/containerStyles';
import { wrapperStyles } from '../styles/wrappers/wrapperStyles';
import { textStyles } from '../styles/text/textStyles';
import { colorStyles } from '../styles/colors/colorStyles';

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

interface State {
  areReservationsShown: boolean;
  refreshing: boolean;
}

export { ALL_RESERVATIONS_QUERY };

/**
 * ViewReservations holds all currrently booked reservations.
 */
export default class ViewReservations extends React.PureComponent<ViewReservationsScreenProps, State> {

  public state = {
    areReservationsShown: false,
    refreshing: false
  };

  private readonly onRefresh = (payload: any) => {
    this.setState({
      refreshing: true
    });
    payload.refetch().then(() => {
      this.setState({
        refreshing: false
      });
    });
  }

  public render() {

    const toggleReservationsVisbility = () => {
      this.setState({
        areReservationsShown: !this.state.areReservationsShown
      });
    };

    return (
      <View style={ containerStyles.container }>
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
                  <View style={ this.state.areReservationsShown === false ? wrapperStyles.introWrapperResHidden : wrapperStyles.introWrapperResShown }>
                    <View style={ containerStyles.introContainer }>
                      <Text style={ [ textStyles.introHeadlineTextStyle, textStyles.introTextStyle ] }>Welcome back!</Text>
                      <Text style={ textStyles.introTextStyle }>There are { payload.data.reservations.length } reservations currently booked.</Text>
                      <Text style={ textStyles.introTextStyle }>Would you like to add another reservation?</Text>
                      <Button onPress={ () => this.props.navigation.navigate('Add') } title='Add another reservation' color={`${colorStyles.primaryColor.color}`} accessibilityLabel='Add another reservation' />
                    </View>

                    { this.state.areReservationsShown === false ?
                      <View>
                        <Button onPress={ toggleReservationsVisbility } title={`Show current ${payload.data.reservations.length} reservations`} color={`${colorStyles.primaryColor.color}`} accessibilityLabel='View all currently booked reservations' />
                      </View>
                    :
                      <View style={ containerStyles.flatListContainerStyle }>
                        <Button onPress={ toggleReservationsVisbility } title={`Hide all reservations`} color={`${colorStyles.primaryColor.color}`} accessibilityLabel='Hide all currently booked reservations' />
                        <FlatList
                          refreshing={ this.state.refreshing }
                          onRefresh={ () => this.onRefresh(payload) }
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
