import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reservationContainer: {
    paddingBottom: 64,
    width: '100%'
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '700'
  },
  valueStyle: {
    fontWeight: '300'
  }
});

interface Props {
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
}

/**
 * Reservation class contains the code for a single reservation.
 * This class is created in order to utilize a PureComponent to help with optimization.
 */
export default class SingleReservation extends React.PureComponent<Props> {
  public render() {
    const { name, hotelName, arrivalDate, departureDate } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ styles.reservationContainer }>
          <Text style={ styles.labelStyle }>Name: <Text style={ styles.valueStyle }>{ name }</Text></Text>
          <Text style={ styles.labelStyle }>Hotel Name: <Text style={ styles.valueStyle }>{ hotelName }</Text></Text>
          <Text style={ styles.labelStyle }>Arrival Date: <Text style={ styles.valueStyle }>{ arrivalDate }</Text></Text>
          <Text style={ styles.labelStyle }>Depature Date: <Text style={ styles.valueStyle }>{ departureDate }</Text></Text>
        </View>
      </View>
    );
  }
}
