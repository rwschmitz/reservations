import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import gql from 'graphql-tag';
import moment from 'moment';
import { AddReservationMutation } from '../mutations/AddReservationMutation';
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
  },
  textInputEmphasisStyles: {
    fontWeight: '700'
  },
  textErrorStyles: {
    color: '#e12d39'
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
            { areErrorStylesActive === true && isNameValid === false ?
            <View>
            { name.length === 0 ? <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ styles.textErrorStyles }>Only letters are allowed.</Text> }
            </View>
            :
            undefined
            }
            <Text>Enter name </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputName }
              value={ name }
            />

            { areErrorStylesActive === true && isHotelNameValid === false ?
            <View>
              <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text>
            </View>
            :
            undefined
            }
            <Text>Enter hotel name </Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputHotelName }
              value={ hotelName }
            />

            { areErrorStylesActive === true && isArrivalValid === false ?
            <View>
              { arrivalDate.length === 0 ? <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ styles.textErrorStyles }>Format of date is incorrect.</Text> }
            </View>
            :
            undefined
            }

            { areErrorStylesActive === true && isArrivalValid === true ?
              <View>
                { isRangeValid === false ? <Text style={ styles.textErrorStyles }>Arrival date cannot be after departure date</Text> : undefined }
              </View>
              :
              undefined
            }
            <Text>Enter arrival date <Text style={ styles.textInputEmphasisStyles }>(YYYY/MM/DD)</Text></Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputArrivalDate }
              value={ arrivalDate }
            />

            { areErrorStylesActive === true && isDepartureValid === false ?
            <View>
              { departureDate.length === 0 ? <Text style={ styles.textErrorStyles }>Field cannot be left blank.</Text> : <Text style={ styles.textErrorStyles }>Format of date is incorrect.</Text> }
            </View>
            :
            undefined
            }

            { areErrorStylesActive === true && isDepartureValid === true ?
              <View>
                { isRangeValid === false ? <Text style={ styles.textErrorStyles }>Arrival date cannot be after departure date</Text> : undefined }
              </View>
              :
              undefined
            }
            <Text>Enter departure date <Text style={ styles.textInputEmphasisStyles }>(YYYY/MM/DD)</Text></Text>
            <TextInput
              style={ styles.textInputStyles }
              onChangeText={ inputDepartureDate }
              value={ departureDate }
            />
            <Button onPress={ this.state.areErrorsPresent === true ? toggleErrorStyles : async () => createReservation({ variables: { input: this.state.reservationDetails } }) } title='Add new reservation' color={`${primaryColor}`} accessibilityLabel='Add new reservation' />
          </View>
          )}
        </AddReservationMutation>
      </View>
    );
  }
}
