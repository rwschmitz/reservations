import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
        <View style={ { paddingBottom: 64, width: '100%'} }>
          <Text style={ { fontSize: 16, fontWeight: '700' } }>Name: <Text style={ { fontWeight: '300' } }>{ name }</Text></Text>
          <Text style={ { fontSize: 16, fontWeight: '700' } }>Hotel Name: <Text style={ { fontWeight: '300' } }>{ hotelName }</Text></Text>
          <Text style={ { fontSize: 16, fontWeight: '700' } }>Arrival Date: <Text style={ { fontWeight: '300' } }>{ arrivalDate }</Text></Text>
          <Text style={ { fontSize: 16, fontWeight: '700' } }>Depature Date: <Text style={ { fontWeight: '300' } }>{ departureDate }</Text></Text>
        </View>
      </View>
    );
  }
}
