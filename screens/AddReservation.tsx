import React from 'react';
import { Button, KeyboardAvoidingView, Text, View } from 'react-native';
import gql from 'graphql-tag';
import moment from 'moment';
import { AddReservationMutation } from '../mutations/AddReservationMutation';
import Confirmation from '../screens/Confirmation';
import LoadingSpinner from '../components/LoadingSpinner';
import NameField from '../components/NameField';
import DateField from '../components/DateField';
import { containerStyles } from '../styles/containers/containerStyles';
import { colorStyles } from '../styles/colors/colorStyles';

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

interface State {
  reservationDetails: {
    name: string;
    hotelName: string;
    arrivalDate: string;
    departureDate: string;
  };
  isArrivalValid: boolean;
  isDepartureValid: boolean;
  isRangeValid: boolean;
  areErrorsPresent: boolean;
  areErrorStylesActive: boolean;
  isNameValid: boolean;
  isHotelNameValid: boolean;
}

export { ADD_RESERVATION_MUTATION };

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
    isDepartureValid: false,
    isRangeValid: false,
    isNameValid: false,
    isHotelNameValid: false,
    areErrorsPresent: true,
    areErrorStylesActive: false,
    resolvedData: {}
  };

  /**
   * Watches user input fields for errors.  Will be used for determing which errors and styles to send back to the user.
   */
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

    /**
     * @param name Value of name from the underlying <TextInput /> component.
     * Also perform a regexp check to ensure the name is only letters and spaces.
     */
    const inputName = (name: string) => {
      const isNameOnlyLetters = /^[a-zA-Z\s]*$/.test(name);

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

    /**
     * @param hotelName Value of the hotel name from the underlying <TextInput /> component.
     * No regexp check here because some hotels do contain numbers.
     */
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

    /**
     * @param arrivalDate Value of the arrival date from the underlying <TextInput /> component.
     * Ensure the date follows a pre-defined format.
     * Ensure the arrival date is before or on departure date.
     */
    const inputArrivalDate = (arrivalDate: string) => {
      const validArrival = moment(arrivalDate, ['MM/DD/YYYY', 'MM-DD-YYYY'], true).isValid();
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
        isArrivalValid: validArrival
      });
    };

    /**
     * @param departureDate Value of the departure date from the underlying <TextInput /> component
     * Ensure the date follows a pre-defined format.
     * Ensure the departure date is on or after the arrival date.
     */
    const inputDepartureDate = (departureDate: string) => {
      const validDeparture = moment(departureDate, ['MM/DD/YYYY', 'MM-DD-YYYY'], true).isValid();
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

    /**
     * Use in conjunction with @method errorsPresent.
     * We call this when firing off a mutation to the DB to ensure the input fields are free of errors.
     * Otherwise we show the appropriate error message to the user.
     */
    const toggleErrorStyles = () => {
      const { areErrorsPresent } = this.state;
      if (areErrorsPresent === true) {
        this.setState({
          areErrorStylesActive: true
        });
      }
    };

    return (
      // Prevent keyboard from overlapping input fields
      <KeyboardAvoidingView style={ containerStyles.container } behavior='padding' enabled={ true }>
        <AddReservationMutation mutation={ ADD_RESERVATION_MUTATION }>
          {(createReservation, { loading, error, called, data }) => (
          <View testID='inputCollection'>
            { loading === true ? <LoadingSpinner copy='Sending reservation...' /> : undefined }
            <Text>{ error }</Text>
            {/* Monitor our mutation to see if we've successfully sent off a mutation or not */}
            { called === false ?
              <View>
                <NameField
                  areErrorStylesActive={ areErrorStylesActive }
                  isErrorValid={ isNameValid }
                  fieldValue={ name }
                  fieldName='Name'
                  typeOfMethod={ inputName }
                />

                <NameField
                  areErrorStylesActive={ areErrorStylesActive }
                  isErrorValid={ isHotelNameValid }
                  fieldValue={ hotelName }
                  fieldName='Hotel Name'
                  typeOfMethod={ inputHotelName }
                />

                <DateField
                  areErrorStylesActive={ areErrorStylesActive }
                  isErrorValid={ isArrivalValid }
                  isRangeValid={ isRangeValid }
                  fieldValue={ arrivalDate }
                  fieldName='Arrival Date'
                  typeOfMethod={ inputArrivalDate }
                />

                <DateField
                  areErrorStylesActive={ areErrorStylesActive }
                  isErrorValid={ isDepartureValid }
                  isRangeValid={ isRangeValid }
                  fieldValue={ departureDate }
                  fieldName='Departure Date'
                  typeOfMethod={ inputDepartureDate }
                />
                <Button onPress={ this.state.areErrorsPresent === true ? toggleErrorStyles : async () => createReservation({ variables: { input: this.state.reservationDetails } }) } title='Add new reservation' color={`${colorStyles.primaryColor.color}`} accessibilityLabel='Add new reservation' />
              </View>
            :
            // If we've successfully fired off a mutation, render out the confirmation details to the user.
            called === true && data !== undefined ?
            <Confirmation
              confirmationName={ this.state.reservationDetails.name }
              confirmationHotelName={ this.state.reservationDetails.hotelName }
              confirmationArrivalDate={ this.state.reservationDetails.arrivalDate }
              confirmationDepartureDate={ this.state.reservationDetails.departureDate }
            />
            :
            undefined
            }
          </View>
          )}
        </AddReservationMutation>
      </KeyboardAvoidingView>
    );
  }
}
