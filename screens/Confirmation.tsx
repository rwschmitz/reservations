import React from 'react';
import { Text, View } from 'react-native';
import { textStyles } from '../styles/text/textStyles';

interface Props {
  confirmationName: string;
  confirmationHotelName: string;
  confirmationArrivalDate: string;
  confirmationDepartureDate: string;
}

/**
 * Confirmation displays the booked reservation back to the user.
 */
export default class Confirmation extends React.PureComponent<Props> {
  public render() {
    const { confirmationName, confirmationHotelName, confirmationArrivalDate, confirmationDepartureDate } = this.props;

    return (
      <View>
        <Text style={ textStyles.textConfirm }>You're all set!</Text>
        <Text style={ textStyles.textConfirmAlt }>Here are your details</Text>
        <Text style={ textStyles.introTextStyle}><Text style={textStyles.textInputEmphasisStyles}>Name:</Text> { confirmationName }</Text>
        <Text style={ textStyles.introTextStyle}><Text style={textStyles.textInputEmphasisStyles}>Hotel Name:</Text> { confirmationHotelName }</Text>
        <Text style={ textStyles.introTextStyle}><Text style={textStyles.textInputEmphasisStyles}>Arrival:</Text> { confirmationArrivalDate }</Text>
        <Text style={ textStyles.introTextStyle}><Text style={textStyles.textInputEmphasisStyles}>Departure:</Text> { confirmationDepartureDate }</Text>
      </View>
    );
  }
}
