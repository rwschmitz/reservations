import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import gql from 'graphql-tag';
import moment from 'moment';
import { AddReservationMutation } from '../mutations/AddReservationMutation';
import LoadingSpinner from '../components/LoadingSpinner';
import NameField from '../components/NameField';
import DateField from '../components/DateField';

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
  }
});

const primaryColor: string = '#5449d2';

interface State {
  reservationDetails: {
    name: string;
    hotelName: string;
    arrivalDate: string;
    departureDate: string;
  };
  isArrivalValid: boolean;
  arrivalFormat: string;
  isDepartureValid: boolean;
  isRangeValid: boolean;
  areErrorsPresent: boolean;
  areErrorStylesActive: boolean;
  isNameValid: boolean;
  isHotelNameValid: boolean;
}

/**
 * AddReservation allows users to add a reservation.
 */
export default class AddReservation extends React.PureComponent<State> {

  public componentDidUpdate() {
    this.errorsPresent();
  }

  public state = {
    reservationDetails: {
      name: '',
      hotelName: '',
      arrivalDate: '',
      departureDate: ''
    },
    isArrivalValid: false,
    arrivalFormat: '',
    isDepartureValid: false,
    isRangeValid: false,
    isNameValid: false,
    isHotelNameValid: false,
    areErrorsPresent: true,
    areErrorStylesActive: false
  };

  private readonly errorsPresent = () => {
    this.setState({
      areErrorsPresent: true
    });

    if (this.state.isArrivalValid === true && this.state.isDepartureValid === true && this.state.isRangeValid === true && this.state.isNameValid === true && this.state.isHotelNameValid === true) {
      this.setState({
        areErrorsPresent: false
      });
    }
  }

  public render() {
    const { reservationDetails: { name, hotelName, arrivalDate, departureDate }, areErrorStylesActive, isNameValid, isHotelNameValid, isArrivalValid, isDepartureValid, isRangeValid } = this.state;

    const inputName = (name: string) => {
      const isNameOnlyLetters = /^[a-zA-Z]+$/.test(name);

      if (name.length > 0 && isNameOnlyLetters === true) {
        this.setState({
          isNameValid: true
        });
      } else {
        this.setState({
          isNameValid: false
        });
      }

      this.setState({
        reservationDetails: {
          name,
          hotelName,
          arrivalDate,
          departureDate
        }
      });
    };

    const inputHotelName = (hotelName: string) => {

      if (hotelName.length === 0) {
        this.setState({
          isHotelNameValid: false
        });
      } else {
        this.setState({
          isHotelNameValid: true
        });
      }

      this.setState({
        reservationDetails: {
          name,
          hotelName,
          arrivalDate,
          departureDate
        }
      });
    };

    const inputArrivalDate = (arrivalDate: string) => {
      const validArrival = moment(arrivalDate, ['YYYYMMDD', 'YYYY/MM/DD', 'YYYY-MM-DD'], true).isValid();
      const arrivalFormat = moment(arrivalDate, ['YYYYMMDD', 'YYYY/MM/DD', 'YYYY-MM-DD'], true).format();
      const validRange = moment(departureDate).isSameOrAfter(arrivalDate, 'day');

      if (validRange === false) {
        this.setState({
          isRangeValid: false
        });
      } else {
        this.setState({
          isRangeValid: true
        });
      }

      this.setState({
        reservationDetails: {
          name,
          hotelName,
          arrivalDate,
          departureDate
        },
        arrivalFormat,
        isArrivalValid: validArrival
      });
    };

    const inputDepartureDate = (departureDate: string) => {
      const validDeparture = moment(departureDate, ['YYYYMMDD', 'YYYY/MM/DD', 'YYYY-MM-DD'], true).isValid();
      const validRange = moment(departureDate).isSameOrAfter(arrivalDate, 'day');

      if (validRange === false) {
        this.setState({
          isRangeValid: false
        });
      } else {
        this.setState({
          isRangeValid: true
        });
      }
      this.setState({
        reservationDetails: {
          name,
          hotelName,
          arrivalDate,
          departureDate
        },
        isDepartureValid: validDeparture
      });
    };

    const toggleErrorStyles = () => {
      const { areErrorsPresent } = this.state;
      if (areErrorsPresent === true) {
        this.setState({
          areErrorStylesActive: true
        });
      }
    };

    return (
      <View style={ styles.container }>
        <AddReservationMutation mutation={ ADD_RESERVATION_MUTATION }>
          {(createReservation, { loading, error }) => (
          <View>
            { loading === true ? <LoadingSpinner copy='Sending reservation...' /> : undefined }
            <Text>{ error }</Text>

            <NameField
              areErrorStylesActive={ areErrorStylesActive }
              isErrorValid={ isNameValid }
              fieldValue={ name }
              fieldName='name'
              typeOfMethod={ inputName }
            />

            <NameField
              areErrorStylesActive={ areErrorStylesActive }
              isErrorValid={ isHotelNameValid }
              fieldValue={ hotelName }
              fieldName='hotel name'
              typeOfMethod={ inputHotelName }
            />

            <DateField
              areErrorStylesActive={ areErrorStylesActive }
              isErrorValid={ isArrivalValid }
              isRangeValid={ isRangeValid }
              fieldValue={ arrivalDate }
              fieldName='arrival date'
              typeOfMethod={ inputArrivalDate }
            />

            <DateField
              areErrorStylesActive={ areErrorStylesActive }
              isErrorValid={ isDepartureValid }
              isRangeValid={ isRangeValid }
              fieldValue={ departureDate }
              fieldName='departure date'
              typeOfMethod={ inputDepartureDate }
            />

            <Button onPress={ this.state.areErrorsPresent === true ? toggleErrorStyles : async () => createReservation({ variables: { input: this.state.reservationDetails } }) } title='Add new reservation' color={`${primaryColor}`} accessibilityLabel='Add new reservation' />
          </View>
          )}
        </AddReservationMutation>
      </View>
    );
  }
}
