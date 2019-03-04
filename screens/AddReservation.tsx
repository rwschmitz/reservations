import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingSpinner from '../components/LoadingSpinner';

const ADD_RESERVATION_MUTATION = gql`
mutation createReservation($input: ReservationCreateInput!) {
  createReservation(data: $input) {
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
  textInputStyles: {
    height: 40,
    borderColor: '#5449d2',
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 16,
    width: 300
  }
});

const primaryColor: string = '#5449d2';

interface State {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

/**
 * AddReservation allows users to add a reservation.
 */
export default class AddReservation extends React.PureComponent<State> {

  public state = {
    name: '',
    hotelName: '',
    arrivalDate: '',
    departureDate: ''
  };

  public render() {
    const { name, hotelName, arrivalDate, departureDate } = this.state;

    const inputName = (name: string) => {
      this.setState({
        name
      });
    };

    const inputHotelName = (hotelName: string) => {
      this.setState({
        hotelName
      });
    };

    const inputArrivalDate = (arrivalDate: string) => {
      this.setState({
        arrivalDate
      });
    };

    const inputDepartureDate = (departureDate: string) => {
      this.setState({
        departureDate
      });
    };

    return (
      <View style={ styles.container }>
        <Mutation mutation={ ADD_RESERVATION_MUTATION }>
          {(createReservation, { loading, error, called, data }) => (
            <View>
            { loading === true ? <LoadingSpinner /> : undefined }
            <Text>{ error }</Text>
            <Text>Enter name: </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputName }
              value={ name }
            />

            <Text>Enter hotel name: </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputHotelName }
              value={ hotelName }
            />

            <Text>Enter arrival date: </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputArrivalDate }
              value={ arrivalDate }
            />

            <Text>Enter departure date: </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputDepartureDate }
              value={ departureDate }
            />
            <Button onPress={ async () => createReservation({ variables: { input: this.state } }) } title='Add new reservation' color={`${primaryColor}`} accessibilityLabel='Add new reservation' />
          </View>
          )}
        </Mutation>
      </View>
    );
  }
}
