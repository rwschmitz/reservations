import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

interface Props {
  name: string;
  hotelName: string;
  arrivalDate: string;
  depatureDate: string;
}

/**
 * Reservation class contains the code for a single reservation.
 * This class is created in order to utilize a PureComponent to help with optimization.
 */
export default class SingleReservation extends React.PureComponent<Props> {
  public render() {
    const { name, hotelName, arrivalDate, depatureDate } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ { backgroundColor: 'green', paddingBottom: 64} }>
          <Text>Name: { name }</Text>
          <Text>Hotel Name: { hotelName }</Text>
          <Text>Arrival Date: { arrivalDate }</Text>
          <Text>Depature Date: { depatureDate }</Text>
        </View>
      </View>
    );
  }
}
