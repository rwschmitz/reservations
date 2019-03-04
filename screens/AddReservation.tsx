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

/**
 * AddReservation allows users to add a reservation.
 */
export default class AddReservation extends React.PureComponent {
  public render() {
    return (
      <View style={ styles.container }>
        <Text>Add a reservation screen.</Text>
      </View>
    );
  }
}
