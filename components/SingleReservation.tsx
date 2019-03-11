import React from 'react';
import { Text, View } from 'react-native';
import { containerStyles } from '../styles/containers/containerStyles';
import { textStyles } from '../styles/text/textStyles';

interface Props {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

/**
 * SingleReservation class contains the code for a single reservation.
 * This class is created in order to utilize a PureComponent to help with optimization.
 */
export default class SingleReservation extends React.PureComponent<Props> {
  public render() {
    const { name, hotelName, arrivalDate, departureDate } = this.props;

    return (
      <View style={ containerStyles.container }>
        <View style={ containerStyles.reservationContainer }>
          <Text style={ textStyles.labelStyle }>Name: <Text style={ textStyles.valueStyle }>{ name }</Text></Text>
          <Text style={ textStyles.labelStyle }>Hotel Name: <Text style={ textStyles.valueStyle }>{ hotelName }</Text></Text>
          <Text style={ textStyles.labelStyle }>Arrival Date: <Text style={ textStyles.valueStyle }>{ arrivalDate }</Text></Text>
          <Text style={ textStyles.labelStyle }>Depature Date: <Text style={ textStyles.valueStyle }>{ departureDate }</Text></Text>
        </View>
      </View>
    );
  }
}
